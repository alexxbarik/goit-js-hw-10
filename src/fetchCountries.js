const BASE_URL = `https://restcountries.com/v3.1/name/`;
const fields = `fields=name,capital,population,flags,languages`;

export default function fetchCountries(name){
    return fetch(`${BASE_URL}${name}?${fields}`)
 
.then(responce =>responce.json())

}

// !!!!!!!!!!
// export default async function fetchCountries(name){
//      const responce = await fetch(`${BASE_URL}${name}?${fields}`)
//     const data = await responce.json()
    
// return data;
// }