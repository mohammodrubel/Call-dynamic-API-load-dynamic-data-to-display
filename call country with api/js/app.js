const countryApi = ()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(Response => Response.json())
    .then(contry => internationalConutry(contry))
}
countryApi()

// const internationalConutry= (contry)=>{
//     console.log(contry)
//     const mainContainer = document.getElementById('mainContainer')
//     for (const singleCountry of contry){
//         // console.log(singleCountry.name)
//         const p = document.createElement('p')
//         p.innerText = singleCountry.name
//         mainContainer.appendChild(p)
//     }

// }
// NOW IMPLEMENT FOREACH 
const internationalConutry = (contry)=>{
    console.log(contry)
    const mainContainer = document.getElementById('mainContainer')
    contry.forEach (worldCountry =>{
        console.log(worldCountry)
        const p = document.createElement('p')
        p.classList.add('perp')
        p.innerHTML =`
        <h3>${worldCountry.name}</h3>
        <p>Code: ${worldCountry.area}</p>
        <p>TimeZone ${worldCountry.timezones} <br> languages Name: ${worldCountry.capital}</p>
        <button class="btn btn-success" onclick="loadCountryDetails('${worldCountry.name}')">Show Name </button>
        ` 
        mainContainer.appendChild(p)

    })
}
const loadCountryDetails = name = (name)=>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then (Response => Response.json())
    .then (contry => displayCountry(contry[0]))
}

const displayCountry = single => {
    const countryDetail = document.getElementById('countryDetail')
    countryDetail.innerHTML=`
    ${single.name} <br> Population: ${single.population} <br> Flag: <img width="200px" src="${single.flag}">
    `

}