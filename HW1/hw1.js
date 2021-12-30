const Forecast = {
    city : "Fairfield",
    date : "12/30/2021",
    temperature : 7,
    precipitation : 30,
};

const markup = (Forecast) => {
    return `
    <div>
      <h3>${Forecast.city}</h3>
      <ul>
        <li>Date: ${Forecast.date}</li>
        <li>Temperature: ${Forecast.temperature}</li>
        <li>Precipitation: ${Forecast.precipitation}</li>
      </ul>
    </div>
  `;
  };

  const main = document.createElement("main");
  main.innerHTML=markup(Forecast);
  document.body.appendChild(main);