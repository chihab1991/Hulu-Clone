const closeSpecialOffer = document.querySelector(".special-offer-close");
const specialOffer = document.querySelector(".special-offer");
const close = (targetedDiv, btn) => {
  btn.addEventListener("click", () => {
    targetedDiv.style.display = "none";
  });
};

close(specialOffer, closeSpecialOffer);

const info1 = document.querySelector(".info1");
const info2 = document.querySelector(".info2");
const info3 = document.querySelector(".info3");
const info4 = document.querySelector(".info4");
const info5 = document.querySelector(".info5");

message1 = "";
message2 = "";
message3 = "";
message4 = "";
message5 = "";
