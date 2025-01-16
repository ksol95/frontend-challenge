import * as state from "../components/state.js";
import { getCards } from "../components/api.js";
import { createCard } from "../components/card.js";
import { selectTab } from "../components/tabs.js";
import { LocStorage } from "../components/localStorage.js";

const cardTemplate = document.querySelector("#card-template").content;
const mainGallary = document.querySelector("#allCats .gallary__list");
const favoriteGallary = document.querySelector("#favouriteCats .gallary__list");
const tabs = document.querySelectorAll(".tab");
const navButtons = document.querySelectorAll(".nav__button");

// Добавление в галлерею любимых карточек (добавить в начало)
const favoriteGallaryAdd = (item) => favoriteGallary.prepend(item);
// Добавление карточки в главную галлерею (добавить в конец)
const mainGallaryAdd = (item) => mainGallary.append(item);

const like = (id) => {
  !state.pushLike(id);
  const find = state.findCardInNodeById(id, favoriteGallary);
  !find &&
    favoriteGallaryAdd(
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
      mainGallaryAdd(createCard(cardTemplate, cat, handleLikeCard));
    }
  });
});

const renderMainGallary = (cat) => {
  // Если карточки нету в стейте
  if (!state.findCardById(cat.id)) {
    // Проверка отрисована ли карточка в DOM
    const find = state.findCardInNodeById(cat.id, mainGallary);
    // если нет, то рендерим
    !find && mainGallaryAdd(createCard(cardTemplate, cat, handleLikeCard));
  }
};

const renderFavoriteGallary = () => {
  // Формируем виртаульный DOM галлереи для рендора
  const virtualFavoritGallary = [];
  /*
		Перебераем ID лайкнутых карточек из стейта
		Если в стейте есть карточка с данным ID
		формируем карточку и записываем ее в
		вертаульнуюю копию DOM галлереии
	*/
  state.store.likedCardsId.forEach((favCats) => {
    const card = state.findCardById(favCats);
    card &&
      virtualFavoritGallary.push(
        createCard(cardTemplate, card, handleLikeCard)
      );
  });
  // Рендерим из виртального DOM только карточки которые небыли отрисованны до этого
  virtualFavoritGallary.forEach((elem) => {
    const find = state.findCardInNodeById(elem.id, favoriteGallary);
    !find && favoriteGallaryAdd(elem);
  });
};

//Обработка пользовательского события "активация таба"
document.addEventListener("activeTab", (e) => {
  const activeTab = e.detail.tabId;
  switch (activeTab) {
    case "allCats": {
      state.store.cards.forEach(renderMainGallary);
      break;
    }
    case "favouriteCats": {
      renderFavoriteGallary();
      break;
    }
  }
});
