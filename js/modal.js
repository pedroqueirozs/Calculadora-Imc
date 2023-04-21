import reset from "./reset.js";
export const modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  buttonClose: document.querySelector(".btn-modal img"),
  modalError: document.querySelector(".modal-error"),
  modalText: document.querySelector(".modalCard h2"),

  open() {
    modal.wrapper.classList.add("open");
  },
  close() {
    modal.wrapper.classList.remove("open");
  },
  modalErrorOpen() {
    modal.modalError.classList.add("open");
  },
  modalErrorClose() {
    modal.modalError.classList.remove("open");
  },
};
modal.buttonClose.addEventListener("click", reset);
