// const url = "https://jsonplaceholder.typicode.com/todos";

// const fetchData = async () => {
//     try{
//         const data = await (await fetch(url)).json()
//       console.log(data);
//     } catch(err){
//         console.log(err);
//     }
// }

// fetchData()

// fetch(url) 
//     .then(res => res.json())   
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error=> console.log(error))



// const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// const getCatsName = async () => {
//     try{
//         const response = await fetch(catsAPI)
//         console.log(response);
//         //const catsName = await response.json();
//         //console.log(catsName);
//         const data = response.map((cat)=>{
//             return cat.name
//         })
//         console.log(data);

//     }catch(err){
//         console.log(err);
//     }
// }

// getCatsName()

// Veri cekecegimiz url adresi
// const countriesAPI = 'https://restcountries.com/v2/all';

// fetch(countriesAPI)
//     .then(response => response.json()) // verileri json formatina cevirdik
//     .then(data => {
//         const sortedCountries = data.sort((a, b) => b.population - a.population); // ulkeleri populationa göre siraladik

//         const largestCountries = sortedCountries.slice(0, 10); // siraladigimiz ulkelerin ilk 10'u getirdik
//         //console.log(largestCountries);
//         const largestCountriesNames = largestCountries.map((country) => country.name); // sonra bu ülkelerin ismini yazdirdik
//         console.log(largestCountriesNames);
//     })

const countriesAPI2 = 'https://restcountries.com/v2/all';

const countries = async () => {
   try {
    const response =  await fetch(countriesAPI2);
    const data = await response.json();
    console.log(data);
    const sortedCountries = data?.sort((a,b)=> a.population - b.population)?.slice(0,10)?.map((country)=> country.name)
    console.log(sortedCountries);
   } catch (error) {
    console.log("hata var");
   }
}
countries();








