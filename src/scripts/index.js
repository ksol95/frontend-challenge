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
if (!state.store.localStorage) LocStorage.clear();

const like = (id) => {
  !state.pushLike(id, LocStorage.append("like", id));
  const find = state.findCardInNodeById(id, favoriteGallary);
  !find &&
    favoriteGallaryAdd(
      createCard(cardTemplate, state.findCardById(id), handleLikeCard)
    );
};

const unlike = (id) => {
  state.likeDeleteById(id, LocStorage.removeItem("like", id));
  const find = state.findCardInNodeById(id, favoriteGallary);
  find && find.remove(find);
};

function handleLikeCard(id) {
  const card = document.querySelector(`[id="${id}"]`);
  card.classList.toggle("like");
  state.cardLikeStatusToggle(card.id);
  card.classList.contains("like") ? like(id) : unlike(id);
}

//Получение карточек из стора
async function loadFromLocalStorage() {
  let localCards = LocStorage.get("cards");
  if (localCards.length) {
    localCards = JSON.parse(localCards);
    localCards.forEach((item) => state.pushCard(item));
  }
  let localLike = LocStorage.get("like");
  if (localLike.length) {
    localLike.forEach((item) => state.pushLike(item));
  }
  return state.store.cards.length;
}

// Получение карточек из API
async function loadCardFromAPI(limit, page) {
  await getCards(limit, page).then((cats) => {
    cats.forEach((cat) => {
      // Если в сторе нету карты с таким ID то дабавляем в стор
      if (!state.findCardById(cat.id)) {
        state.pushCard(cat, LocStorage.append("cards", cat));
      }
    });
  });
  return state.store.cards.length;
}

const renderMainGallary = (cat) => {
  // Если карточки нету в стейте
  if (!state.findCardById(cat.id)) {
    // Проверка отрисована ли карточка в DOM
    const find = state.findCardInNodeById(cat.id, mainGallary);
    // если нет, то рендерим
    !find && mainGallaryAdd(createCard(cardTemplate, cat, handleLikeCard));
  }
};

async function renderMainGallaryFromState() {
  // Формируем виртаульный DOM галлереи для рендора
  const virtualMainGallary = [];
  // Формируем карточки на основе данных в стейте
  state.store.cards.forEach((item) => {
    virtualMainGallary.push(createCard(cardTemplate, item, handleLikeCard));
  });
  // Рендерим из виртального DOM только карточки которые небыли отрисованны до этого
  await virtualMainGallary.forEach((elem) => {
    !state.findCardInNodeById(elem.id, mainGallary) && mainGallaryAdd(elem);
  });
}

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
    !state.findCardInNodeById(elem.id, favoriteGallary) &&
      favoriteGallaryAdd(elem);
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

function initApp() {
  loadFromLocalStorage()
    .then((count) => state.store.limit - count)
    .then((count) => count > 1 && loadCardFromAPI(count, 0))
    .then(() => renderMainGallaryFromState())
    .finally(() => {
      // Инициализация навигации
      navButtons.forEach((button) =>
        button.addEventListener("click", (e) =>
          selectTab(e.target, navButtons, tabs)
        )
      );
    })
    .catch(console.error);
}

initApp();
