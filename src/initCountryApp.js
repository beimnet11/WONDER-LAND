import {searchCountry} from './api.js';

export const loadApp = () => { 
  const userInterface = document.getElementById('user-interface');
  // userInterface.innerHTML = '';

  userInterface.innerHTML = `
  <h1>COUNTRY INFORMATION LOOKUP</h1>
  <input type='text' id='country-name' placeholder='Enter a country name'/>
  <button id= 'search-btn'>Search</button>
  `;
  
  document.getElementById('search-btn').addEventListener('click',searchCountry);
};

window.addEventListener('load', loadApp);

