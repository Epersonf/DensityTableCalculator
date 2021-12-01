function kgM3ToGMl(value: number, code: string) {
  switch (code) {
  case "g/ml":
    return value/1000;
  }
  return value;
}

function celsiusDeconvert(value: number, code: string) {
  switch (code) {
  case "F":
    return (value - 32) * 5/9;
  case "K":
    return value - 273.15;
  }
  return value;
}

function celsiusConvert(value: number, code: string) {
  switch (code) {
  case "F":
    return (value * 9/5) + 32;
  case "K":
    return value + 273.15;
  }
  return value;
}

export { celsiusConvert, celsiusDeconvert, kgM3ToGMl };