import {showLoading , hideLoading} from './loading.js';

const MIN_LOADING_TIME = 0;

let loadingTimeout;
export const searchCountry = async () => {
  const query = document.getElementById('country-name').value;
  const resultContainer = document.getElementById('result-container');

  resultContainer.innerHTML = '';
  if (query === ''){
    const inputInvalid = document.createElement('p');
    inputInvalid.innerHTML = `
    <h2>Invalid Input</h2>
    <p>Please enter a valid country name</p>
    `;
    resultContainer.appendChild(inputInvalid);
    return;
  }

  showLoading();

  // clear the timeout if it exists

  if (loadingTimeout){
    clearTimeout(loadingTimeout);
  }

  try{

    loadingTimeout = setTimeout(() => {
      hideLoading();
    }, MIN_LOADING_TIME);

    // fetch country data
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const countries = await response.json();

    // find the country
    const country = countries.find(country => country.name.common.toLowerCase() === query.toLowerCase());

    // clear the loading timeout

    clearTimeout(loadingTimeout);


    if (!country){
      hideLoading();

      const countryNotFound = document.createElement('p');
      countryNotFound.innerHTML = `
      <h2>Country Not Found</h2>
      `;

      resultContainer.appendChild(countryNotFound);
      return;
    }

    // display the country information

    const countryData = document.createElement('div');
    countryData.innerHTML = `
    <h2>${country.name.common}</h2>
    <p>Capital: ${country.capital}</p>
    <p>Population: ${country.population}</p>
    <p>Area: ${country.area} km<sup>2</sup></p>
    <p>Region: ${country.region}</p>
    <img src="${country.flags.png}" alt="${country.name.common} flag"/>
    `;

    hideLoading();
    resultContainer.appendChild(countryData);

  }catch(error){
    clearTimeout(loadingTimeout);
    hideLoading();
    const errorMessage = document.createElement('div');
    errorMessage.innerHTML = `
    <h2> Something went wrong</h2>
    `;
    resultContainer.appendChild(errorMessage);
    console.error(error);
  }
};  