import "./styles/reset.css";
import "./styles/index.css";
import "./scripts/input-getter";
import { listen } from "./scripts/input-getter";

window.onload = () => {
  listen();
};