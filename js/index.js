

let CountriesEl = document.querySelector(".countries");

export function UpdateUi(date) {
   CountriesEl.innerHTML = ''
  date.forEach((item) => {
    return CountriesEl.innerHTML += `
        <li class="country">
          <img src="${item.flag}" alt="" />
          <div class="country__intro">
            <h4 class="name">${item.name}</h4>
            <p>Population: <span>${item.population} </span></p>
            <p>Region: <span class="region">${item.region} </span></p>
            <p>Capital: <span>${item.capital}</span></p>
          </div>
        </li>
    `;
  });
}
