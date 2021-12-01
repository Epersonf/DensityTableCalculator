import { celsiusConvert, celsiusDeconvert } from "../convert-util";

let observedDensity = 0;
let fluidDensity = 0.00112473;
let temperature = 0;
let temperatureUnit = "C";

function listenConvertInput() {
  const observedDensityInput: HTMLInputElement = document.querySelector(".observed-density-input") as HTMLInputElement;
  const fluidDensityInput: HTMLSelectElement = document.querySelector(".fluid-input") as HTMLSelectElement;
  const temperatureInput: HTMLInputElement = document.querySelector(".temperature-density-input") as HTMLInputElement;
  const temperatureUnitInput: HTMLSelectElement = document.querySelector(".temperature-density-unit-input") as HTMLSelectElement;
  const specificMass20Output: HTMLParagraphElement = document.querySelector(".degrees-density-output") as HTMLParagraphElement;

  observedDensityInput.value = observedDensity.toString();
  observedDensityInput.onchange = (e: Event) => {
    observedDensity = parseFloat((<HTMLInputElement>e.target).value);
    observedDensityInput.value = (<HTMLInputElement>e.target).value;
    giveOutput();
  };

  fluidDensityInput.value = fluidDensity.toString();
  fluidDensityInput.onchange = (e: Event) => {
    fluidDensity = parseFloat((<HTMLSelectElement>e.target).value);
    fluidDensityInput.value = (<HTMLSelectElement>e.target).value;
    giveOutput();
  };

  temperatureInput.value = temperature.toString();
  temperatureInput.onchange = (e: Event) => {
    temperature = parseFloat((<HTMLInputElement>e.target).value);
    temperatureInput.value = (<HTMLInputElement>e.target).value;
    giveOutput();
  };

  temperatureUnitInput.value = temperatureUnit.toString();
  temperatureUnitInput.onchange = (e: Event) => {
    temperatureUnit = (<HTMLSelectElement>e.target).value;
    temperatureUnitInput.value = (<HTMLSelectElement>e.target).value;
    giveOutput();
  };

  function giveOutput() {
    const result = observedDensity * (1 + fluidDensity * (celsiusDeconvert(temperature, temperatureUnit) - 20));
    specificMass20Output.innerText = `Density normalized to ${celsiusConvert(20, temperatureUnit)} º${temperatureUnit}: ${result.toFixed(4)}`;
  }
}

export { listenConvertInput };