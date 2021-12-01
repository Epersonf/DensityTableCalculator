import "./styles/reset.css";
import "./styles/index.css";
import "./scripts/alcohol/input-getter";
import { listenAlcoholInput } from "./scripts/alcohol/input-getter";
import { listenConvertInput } from "./scripts/densityTo20/input-getter-convert";
import { tabListen } from "./scripts/tab-manager";

window.onload = () => {
  listenAlcoholInput();
  listenConvertInput();
  tabListen();
};