import calculateImc from "./calculateImc.js";
import { modal } from "./modal.js";

export function handleEscape(event) {
  if (event.key === "Escape") {
    modal.close();
  }
}
export function handleEnter(event) {
  if (event.key === "Enter") {
    calculateImc();
  }
}
export default { handleEnter, handleEscape };
