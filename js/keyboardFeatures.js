export function handleKeydow(event) {
  if (event.key === "Escape") {
    resetFields();
  }
}
export function handleEnter(event) {
  if (event.key === "Enter") {
    calculateImc();
  }
}
export default { handleEnter, handleKeydow };
