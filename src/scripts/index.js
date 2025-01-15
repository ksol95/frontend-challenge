import { getCards } from "../components/api.js";
import { createCard } from "../components/card.js";

const cardTemplate = document.querySelector("#card-template").content;
const gallary = document.querySelector(".gallary__list");

const renderCat = (cat) => gallary.append(createCard(cardTemplate, cat));

getCards().then((cats) => {
  cats.forEach(renderCat);
});
