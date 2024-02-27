const modal = () => {
  const modal = document.querySelector(".search-model");
  const modalOpen = document.querySelector(".search-switch");
  const modalClose = modal.querySelector(".search-close-switch");
  const modalInput = modal.querySelector("#search-input");

  modalOpen.addEventListener("click", () => {
    if (modal.classList.contains("active")) {
      modal.classList.remove("active");
    } else {
      modal.classList.add("active");
    }
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });
  modalInput.addEventListener("input", () => {
    console.log(modalInput.value);
  });
};
modal();
