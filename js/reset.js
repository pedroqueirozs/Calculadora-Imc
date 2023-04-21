import { modal } from "./modal.js";
export default function reset() {
  document.getElementById("name").value = "";
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  modal.close();
}
