const dollarsText = document.querySelector(".dollars");
const priceRange = document.getElementById("priceRange");

priceRange.addEventListener("input", (e) => updatePrice(e.target.value));

const updatePrice = (priceInCents) => {
  const dollars = Math.floor(priceInCents / 100).toString();
  const cents = (priceInCents % 100).toString();
  const price = `${dollars}.${cents}`;

  dollarsText.innerText = price;
};
