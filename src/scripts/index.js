import { getCards } from "../components/api.js";
import { createCard } from "../components/card.js";
import { selectTab } from "../components/tabs.js";

const cardTemplate = document.querySelector("#card-template").content;
const gallaryAllCats = document.querySelector("#allCats .gallary__list");
const gallaryFavouriteCats = document.querySelector(
  "#favouriteCats .gallary__list"
);
const tabs = document.querySelectorAll(".tab");
const navButtons = document.querySelectorAll(".nav__button");
const renderCat = (cat) => gallaryAllCats.append(createCard(cardTemplate, cat));

getCards().then((cats) => {
  cats.forEach(renderCat);
});

navButtons.forEach((button) =>
  button.addEventListener("click", (e) => selectTab(e.target, navButtons, tabs))
);
