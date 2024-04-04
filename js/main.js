"use strict";

const arr = ["Ramin", "Rustem", "Natiq", "Adil", "Zaur"]; //Massiv

const checkBtn = document.querySelector("#btn"); //Knopka-btn

const randomIndex = Math.floor(Math.random() * arr.length); // təsadüfi bir index seçin
console.log(randomIndex);
const randomName = arr[randomIndex].toLowerCase(); // təsadüfi seçilmiş adı əldə edin və kiçik herflere kecirin!
console.log(randomName);

checkBtn.addEventListener("click", function () {
  const ad = document.querySelector("#nameInput").value.toLowerCase(); // input daxilindəki adı kiçik hərflərə çevirin
  const resultDiv = document.querySelector("#result");

  if (ad === randomName) {
    // kiçik hərflərlə müqayisə edin
    resultDiv.textContent = "Düz tapdınız!";
  } else {
    resultDiv.textContent = "Sehv tapdınız!";
  }
});
