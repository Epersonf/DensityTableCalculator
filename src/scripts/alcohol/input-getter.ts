import calculate from "./calculate";
import { celsiusConvert, celsiusDeconvert, kgM3ToGMl } from "../convert-util";

let alcoholDegree = 0;
let temperature = 0;
let temperatureUnit = "C";
let resultUnit = "kg/m³";

function listenAlcoholInput() {
  const alcoholDegreeInput: HTMLInputElement = document.querySelector(".alcohol-degree") as HTMLInputElement;
  const temperatureInput: HTMLInputElement = document.querySelector(".temperature") as HTMLInputElement;
  const temperatureUnitInput: HTMLSelectElement = document.querySelector(".temperature-unit-input") as HTMLSelectElement;
  const resultUnitInput: HTMLSelectElement = document.querySelector(".result-unit-input") as HTMLSelectElement;
  const meResult: HTMLParagraphElement = document.querySelector(".me-result") as HTMLParagraphElement;
  const meResult20: HTMLParagraphElement = document.querySelector(".me-result-20") as HTMLParagraphElement;
  const alcoholicDegreeOutput: HTMLParagraphElement = document.querySelector(".alcoholic-degree-gv") as HTMLParagraphElement;
  const correctionFactorOutput: HTMLParagraphElement = document.querySelector(".correction-factor") as HTMLParagraphElement;

  alcoholDegreeInput.value = alcoholDegree.toString();
  alcoholDegreeInput.onchange = (e: Event) => {
    alcoholDegree = parseFloat((<HTMLInputElement>e.target).value);
    alcoholDegreeInput.value = (<HTMLInputElement>e.target).value;
    giveOutput();
  };

  temperatureInput.value = alcoholDegree.toString();
  temperatureInput.onchange = (e: Event) => {
    temperature = parseFloat((<HTMLInputElement>e.target).value);
    temperatureInput.value = (<HTMLInputElement>e.target).value;
    giveOutput();
  };

  temperatureUnitInput.value = temperatureUnit;
  temperatureUnitInput.onchange = (e: Event) => {
    temperatureUnit = (<HTMLSelectElement>e.target).value;
    temperatureUnitInput.value = (<HTMLSelectElement>e.target).value;
    giveOutput();
  };

  resultUnitInput.value = resultUnit;
  resultUnitInput.onchange = (e: Event) => {
    resultUnit = (<HTMLSelectElement>e.target).value;
    resultUnitInput.value = (<HTMLSelectElement>e.target).value;
    giveOutput();
  };

  function giveOutput() {
    const result = calculate(getAlcoholDegree(), getTemperatureInCelsius());
    meResult.innerHTML = `Specific Mass of Alcohol ${resultUnitInput.value}: <b style="font-weight: bold; color: red;">${kgM3ToGMl(result.specificMass, resultUnitInput.value).toFixed(8)}</b>`;
    meResult20.innerHTML = `Specific Mass of Alcohol at ${celsiusConvert(20, temperatureUnit)}º${temperatureUnitInput.value} ${resultUnitInput.value}: <b style="font-weight: bold; color: red;">${kgM3ToGMl(result.specificMass20, resultUnitInput.value).toFixed(8)}</b>`;
    alcoholicDegreeOutput.innerHTML = `Alcoholic degree at ${celsiusConvert(20, temperatureUnit)}º${temperatureUnitInput.value} % v/v: <b style="font-weight: bold; color: red;">${(getAlcoholDegree() * (result.specificMass20 / 789.23)).toFixed(5)}</b>`;
    correctionFactorOutput.innerHTML = `Correction factor: <b style="font-weight: bold; color: red;">${(
      (result.specificMass / result.specificMass20) * (1 + 0.000036 * (getTemperatureInCelsius() - 20))
    ).toFixed(5)}</b>`;
  }
}

function getAlcoholDegree(): number {
  return alcoholDegree;
}

function getTemperatureInCelsius(): number {
  return celsiusDeconvert(temperature, temperatureUnit);
}

export { getAlcoholDegree, getTemperatureInCelsius, listenAlcoholInput };