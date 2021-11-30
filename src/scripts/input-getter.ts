import calculate from "./calculate";

let alcoholDegree = 0;
let temperature = 0;
let temperatureUnit = "C";

function listen() {
  const alcoholDegreeInput: HTMLInputElement = document.querySelector(".alcohol-degree") as HTMLInputElement;
  const temperatureInput: HTMLInputElement = document.querySelector(".temperature") as HTMLInputElement;
  const temperatureUnitInput: HTMLSelectElement = document.querySelector(".temperature-unit-input") as HTMLSelectElement;
  const meResult: HTMLParagraphElement = document.querySelector(".me-result") as HTMLParagraphElement;
  const meResult20: HTMLParagraphElement = document.querySelector(".me-result-20") as HTMLParagraphElement;
  const calculateButton: HTMLButtonElement = document.querySelector(".button-calculate") as HTMLButtonElement;

  alcoholDegreeInput.value = alcoholDegree.toString();
  alcoholDegreeInput.onchange = (e: Event) => {
    alcoholDegree = parseFloat((<HTMLInputElement>e.target).value);
    alcoholDegreeInput.value = (<HTMLInputElement>e.target).value;
  };

  temperatureInput.value = alcoholDegree.toString();
  temperatureInput.onchange = (e: Event) => {
    temperature = parseFloat((<HTMLInputElement>e.target).value);
    temperatureInput.value = (<HTMLInputElement>e.target).value;
  };

  temperatureUnitInput.value = temperatureUnit;
  temperatureUnitInput.onchange = (e: Event) => {
    temperatureUnit = (<HTMLSelectElement>e.target).value;
    temperatureUnitInput.value = (<HTMLSelectElement>e.target).value;
  };

  calculateButton.onclick = () => {
    const result = calculate(getAlcoholDegree(), getTemperatureInCelsius());
    meResult.innerText = `Specific Mass of Alcohol: ${result.specificMass.toFixed(5)}`;
    meResult20.innerText = `Specific Mass of Alcohol at 20ºc: ${result.specificMass20.toFixed(5)}`;
  };
}

function getAlcoholDegree(): number {
  return alcoholDegree;
}

function getTemperatureInCelsius(): number {
  switch (temperatureUnit) {
  case "F":
    return (temperature - 32) * 5/9;
  case "K":
    return temperature - 273.15;
  }
  return temperature;
}

export { getAlcoholDegree, getTemperatureInCelsius, listen };