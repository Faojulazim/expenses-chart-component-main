const dataCards = document.querySelectorAll("[data-cards]");
const dataCardHeight = document.querySelectorAll("[data-cardHeight]");

(async () => {
  const fetchData = await fetch("data.json");
  const dataJson = await fetchData.json();

  let maxHeight = 0;
  let tallestCard;

  dataCards.forEach((val, index) => {
    val.querySelector(
      "[data-hovertext]"
    ).innerText = `$${dataJson[index].amount}`;
    dataCardHeight[index].style.transition = "height 1s";
    dataCardHeight[index].style.height = `${dataJson[index].amount * 3}px`;
    const currentHeight = parseInt(dataCardHeight[index].style.height);

    if (currentHeight > maxHeight) {
      maxHeight = currentHeight;
      tallestCard = val;
    }
  });
  tallestCard.querySelector("[data-cardHeight]").classList.add("bg-cyan");
})();
dataCards.forEach((val) => {
  val.addEventListener("mouseover", (e) => {
    val.querySelector("[data-hovertext]").classList.remove("opacity-0");
  });
  val.addEventListener("mouseleave", (e) => {
    val.querySelector("[data-hovertext]").classList.add("opacity-0");
  });
});
