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
const syncLocalStore = () => {
  LocStorage.update("cards", [state.store.cards]);
  // Вариант с сохраненияем ID лайкнутых карточек отдельно
  LocStorage.update("like", state.store.likedCardsId);
};
const like = (id) => {
  state.pushLike(id);
  syncLocalStore();
  !state.findCardInNodeById(id, favoriteGallary) &&
    favoriteGallaryAdd(
      createCard(cardTemplate, state.findCardById(id), handleLikeCard)
    );
};

const unlike = (id) => {
  state.likeDeleteById(id);
  syncLocalStore();
  state.findCardInNodeById(id, favoriteGallary)?.remove();
};

function handleLikeCard(id) {
  const card = document.querySelector(`[id="${id}"]`);
  card.classList.toggle("like");
  state.cardLikeStatusToggle(id, syncLocalStore);
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

function test() {
  console.log("test");
  LocStorage.append("cards", cat);
}
// Получение карточек из API
async function loadCardFromAPI(limit, page) {
  await getCards(limit, page).then((cats) => {
    cats.forEach((cat) => {
      // Если в сторе нету карты с таким ID то дабавляем в стор
      if (!state.findCardById(cat.id)) {
        state.pushCard(cat);
      }
    });
    // Синхронизируем текущий стейт с локал стор
    syncLocalStore();
  });
  return state.store.cards.length;
}

function renderMainGallaryFromState() {
  // Формируем виртаульный DOM галлереи для рендора
  const virtualMainGallary = [];
  // Формируем карточки на основе данных в стейте
  state.store.cards.forEach((item) => {
    virtualMainGallary.push(createCard(cardTemplate, item, handleLikeCard));
  });
  // Рендерим из виртального DOM только карточки которые небыли отрисованны до этого
  virtualMainGallary.forEach((elem) => {
    !state.findCardInNodeById(elem.id, mainGallary) && mainGallaryAdd(elem);
  });
}

/*
	Рендер любимх котиков без использования отдельного массива для хранения id лайкнутых карточек
	(не сохраняется порядок)
*/
// function renderFavoriteGallary() {
//   // Формируем виртаульный DOM галлереи для рендора
//   const virtualFavoritGallary = [];
//   // Формируем карточки на основе данных в стейте
//   state.store.cards.forEach((item) => {
//     item.like &&
//       virtualFavoritGallary.push(
//         createCard(cardTemplate, item, handleLikeCard)
//       );
//   });
//   // Рендерим из виртального DOM только карточки которые небыли отрисованны до этого
//   virtualFavoritGallary.forEach((elem) => {
//     !state.findCardInNodeById(elem.id, favoriteGallary) &&
//       favoriteGallaryAdd(elem);
//   });
// }

/*
	Версия функции, если мы сохраняем ID лайкнутых карточек в отдельном массиве в стейте
	(сохраняется порядок лайкнутых карточек)
*/
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
    console.log(card);
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
      renderMainGallaryFromState();
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
    //Получаем карточки из LS в стейт и вычесляем разницу между количесвтом
    // загруженных карточек и лимитом карточек
    .then((count) => state.store.limit - count)
    // если карточек из LS нехватает, грузим в стейт через API сколько не хватает
    .then((count) => count >= 1 && loadCardFromAPI(count, 0))
    // запускаем отрисовку из стейта
    .then(() => {
      renderMainGallaryFromState();
      renderFavoriteGallary();
    })
    // Инициализация навигации
    .finally(() => {
      navButtons.forEach((button) =>
        button.addEventListener("click", (e) =>
          selectTab(e.target, navButtons, tabs)
        )
      );
    })
    .catch(console.error);
}

initApp();
