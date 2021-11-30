import { getAlcoholDegree } from "./input-getter";
import { getTemperatureInCelsius } from "./input-getter";

const n = 5;
const m: number[] = [11, 10, 9, 4, 2];

const A: number[] = [
  913.76673,
  -221.75948,
  -59.61786,
  146.82019,
  -566.5175,
  621.18006,
  3782.4439,
  -9745.3133,
  -9573.4653,
  32677.808,
  8763.7383,
  -39026.437
];

const B: number[] = [
  -0.7943755,
  -0.001216841,
  3.50178e-06,
  1.77094e-07,
  -3.41388e-09,
  -9.98802e-11
];

const C: number[][] = [
  [-0.39158709, 1.1518337, -5.0416999, 13.381608, 4.5899913, -118.21, 190.5402, 339.81954, -900.32344, -349.32012, 1285.9318],
  [-0.000120832, -0.005746625, 0.12030894, -0.23519694, -1.0362738, 2.1804505, 4.2763108, -6.8624848, -6.9384031, 7.4460428],
  [-3.86832e-05, -0.000209114, 0.002671389, 0.004104205, -0.049364385, -0.017952946, 0.29012506, 0.023001712, -0.54150139],
  [-5.60249e-07, -1.26492e-06, 3.4864e-06, -1.51687e-06],
  [-1.44417e-08, 1.34705e-08]
];

function calculate() {
  const gm = getAlcoholDegree();
  const t = getTemperatureInCelsius();

  let me: number = A[0];
  for (let k = 1; k < 12; k++) {
    me += A[k] * Math.pow((gm/100) - 0.5, k + 1);
  }
  
  for (let k = 0; k < 6; k++) {
    me += B[k] * Math.pow(t - 20, k + 1);
  }

  for (let i = 0; i < n; i++) {
    for (let k = 0; k < m[i]; k++) {
      me += C[i][k] * Math.pow((gm/100) - 0.5, k + 1) * Math.pow(t - 20, i + 1);
    }
  }

  console.log(me);
}

export default calculate;