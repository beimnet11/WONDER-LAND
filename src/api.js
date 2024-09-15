const urlData = 'https://restcountries.com/v3.1/all';
export async function fetchData(){
  const response = await fetch(urlData);
  const data = await response.json();
  return data;
}