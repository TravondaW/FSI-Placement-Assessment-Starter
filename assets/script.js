// HINT: You can delete this console.log after you no longer need it!
console.log("JavaScript code has loaded!");
// First, tell us your name
let yourName = "Travonda Williams";
let quantityText = document.querySelector(".total-quantity");

// We'll use these variables to track the counts of each cookie type
let gb = 0; // Gingerbread
let cc = 0; // Chocolate Chip
let sugar = 0; // Sugar Sprinkle
let total = 0

// selecting the element with an id of credit
const credit = document.querySelector("#credit");
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector("#add-gb");
const gbMinusBtn = document.querySelector("#minus-gb");
const ccPlusBtn = document.querySelector("#add-cc");
const ccMinusBtn = document.querySelector("#minus-cc");
const sugarPlusBtn = document.querySelector("#add-sugar");
const sugarMinusBtn = document.querySelector("#minus-sugar");

// Code to update name display
credit.textContent = "Created by Travonda Williams";

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener("click", function () {
  gb++;
  const quantitygb = document.querySelector("#qty-gb");
  quantitygb.textContent = gb;

  total = total + 1
  const totalQuanity = document.querySelector("#qty-total")
  totalQuanity.textContent = total 
});

gbMinusBtn.addEventListener("click", function () {
  gb--;
  const quantitygb = document.querySelector("#qty-gb");
  quantitygb.textContent = gb;
});

ccPlusBtn.addEventListener("click", function () {
  cc++;
  const quantitycc = document.querySelector("#qty-cc");
  quantitycc.textContent = cc;
});

ccMinusBtn.addEventListener("click", function () {
  cc--;
  const quantitycc = document.querySelector("#qty-cc");
  quantitycc.textContent = cc;
});

sugarPlusBtn.addEventListener("click", function () {
  sugar++;
  const quantitysugar = document.querySelector("#qty-sugar");
  quantitysugar.textContent = sugar;
});

sugarMinusBtn.addEventListener("click", function () {
  sugar--;
  const quantitysugar = document.querySelector("#qty-sugar");
  quantitysugar.textContent = sugar;
});

function addBy() {
  quantitygb = document.getElementById("#qty-gb").ariaValueMax;
  quantitycc = document.getElementById("#qty-cc").ariaValueMax;
  quantitysugar = document.getElementById("qty-sugar").ariaValueMax;
  document.getElementById("qty-total").innerHTML =
    quantitygb + quantitycc + quantitysugar;
}

//const credit = document.querySelector("calculate");
