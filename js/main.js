const closeSpecialOffer = document.querySelector(".special-offer-close");
const specialOffer = document.querySelector(".special-offer");
const close = (targetedDiv, btn) => {
  btn.addEventListener("click", () => {
    targetedDiv.style.display = "none";
  });
};

close(specialOffer, closeSpecialOffer);
