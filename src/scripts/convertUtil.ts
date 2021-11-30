function celsiusToFarenheit(value: number): number {
  return (value * 9/5) + 32;
}

function celsiusToKelvin(value: number): number {
  return value + 273.15;
}

function celsiusConvert(value: number, code: string) {
  switch (code) {
  case "F":
    return celsiusToFarenheit(value);
  case "K":
    return celsiusToKelvin(value);
  }
  return value;
}

export { celsiusConvert };