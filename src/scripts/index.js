import * as state from "../components/state.js";
import { getCards } from "../components/api.js";
import { createCard } from "../components/card.js";
import { selectTab } from "../components/tabs.js";
import { LocStorage } from "../components/localStorage.js";

const cardTemplate = document.querySelector("#card-template").content;
const gallaryAllCats = document.querySelector("#allCats .gallary__list");
const favoriteGallary = document.querySelector("#favouriteCats .gallary__list");
const tabs = document.querySelectorAll(".tab");
const navButtons = document.querySelectorAll(".nav__button");

const like = (id) => {
  !state.pushLike(id);
  const find = state.findCardInNodeById(id, favoriteGallary);
  !find &&
    favoriteGallary.prepend(
      createCard(cardTemplate, state.findCardById(id), handleLikeCard)
    );
};

const unlike = (id) => {
  state.likeDeleteById(id);
  const find = state.findCardInNodeById(id, favoriteGallary);
  find && find.remove(find);
};

function handleLikeCard(id) {
  const card = document.querySelector(`[id="${id}"]`);
  card.classList.toggle("like");
  state.cardLikeStatusToggle(card.id);

  card.classList.contains("like") ? like(id) : unlike(id);
}
// Инициализация навигации
navButtons.forEach((button) =>
  button.addEventListener("click", (e) => selectTab(e.target, navButtons, tabs))
);

//Получение карточек
getCards(state.store.limit, state.store.page).then((cats) => {
  cats.forEach((cat) => {
    if (!state.findCardById(cat.id)) {
      state.pushCard({ like: false, ...cat });
      gallaryAllCats.append(createCard(cardTemplate, cat, handleLikeCard));
    }
  });
});

const renderAllCats = (cat) => {
  !state.findCardById(cat.id) &&
    gallaryAllCats.append(createCard(cardTemplate, cat, handleLikeCard));
};

const renderFavoriteCats = () => {
  const virtualFavoritGallary = [];
  state.store.likedCardsId.forEach((favCats) => {
    const card = state.findCardById(favCats);
    card &&
      virtualFavoritGallary.push(
        createCard(cardTemplate, card, handleLikeCard)
      );
  });

  virtualFavoritGallary.forEach((elem) => {
    const find = state.findCardInNodeById(elem.id, favoriteGallary);
    !find && favoriteGallary.prepend(elem);
  });
};

//Обработка пользовательского события "активация таба"
document.addEventListener("activeTab", (e) => {
  const activeTab = e.detail.tabId;
  switch (activeTab) {
    case "allCats": {
      state.store.cards.forEach(renderAllCats);
      break;
    }
    case "favouriteCats": {
      renderFavoriteCats();
      break;
    }
  }
});
