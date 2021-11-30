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
  const alcoholicDegreeOutput: HTMLParagraphElement = document.querySelector(".alcoholic-degree-gv") as HTMLParagraphElement;
  const correctionFactorOutput: HTMLParagraphElement = document.querySelector(".correction-factor") as HTMLParagraphElement;
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
    meResult.innerHTML = `Specific Mass of Alcohol: <b style="font-weight: bold; color: red;">${result.specificMass.toFixed(5)}</b>`;
    meResult20.innerHTML = `Specific Mass of Alcohol at 20ºC: <b style="font-weight: bold; color: red;">${result.specificMass20.toFixed(5)}</b>`;
    alcoholicDegreeOutput.innerHTML = `Alcoholic degree at 20ºC: <b style="font-weight: bold; color: red;">${(getAlcoholDegree() * (result.specificMass20 / 789.23)).toFixed(5)}</b>`;
    correctionFactorOutput.innerHTML = `Correction factor: <b style="font-weight: bold; color: red;">${(
      (result.specificMass / result.specificMass20) * (1 + 0.000036 * (getTemperatureInCelsius() - 20))
    ).toFixed(5)}</b>`;
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