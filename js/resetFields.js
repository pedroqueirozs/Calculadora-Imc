import { modal } from "./modal.js";
export default function resetFields() {
  document.getElementById("name").value = "";
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  modal.close();
}
