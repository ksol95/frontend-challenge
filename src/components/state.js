export const store = {
  cards: [], //Массив карточек отображаемых на главной
  likedCardsId: [], //Массив id карточек которые лайкнули
  page: 0, //Номер страницы из запроса api
  limit: 10, //количество получаемых карточек из api
  logMode: false, //Вывод в консоль стейта при его изменении с указанием функции которая выхвала мутацию
  localStorage: true, //флаг вкл\выкл хранение в localStorage
};

// Функция выполняется каждый раз когда происходит модификация стейта
export const stateModificate = (owner = "") => {
  if (store.logMode) {
    console.log(owner);
    console.log(store);
  }
};

//Поиск карточки по id в стейте
export const findCardById = (id) => {
  const res = store.cards.find((item) => item.id == id);
  return typeof res === "undefined" ? false : res;
};

// Поиск карточки по id в указаном узле
export const findCardInNodeById = (id, node) => {
  const res = Array.from(node.childNodes).find((card) => card.id == id);
  return typeof res === "undefined" ? false : res;
};

// Добавление только уникальных карточек
export const pushCard = (card, callBack) => {
  if (!store.cards.includes(card)) {
    store.cards.push(card);
    callBack && callBack();
    stateModificate("stateCardPush");
    return true;
  }
  return false;
};

const toggleStatus = async (id) =>
  (store.cards.find((card) => card.id == id).like ^= true);

// Переключенеие статуса лайка карточки
export const cardLikeStatusToggle = (id, callBack) => {
  toggleStatus(id).then(callBack && callBack());
  stateModificate("stateCardLikeStatusToggle");
};

// Добавление только уникальных лайков
export const pushLike = async (id, callBack) => {
  if (!store.likedCardsId.includes(id)) {
    await store.likedCardsId.push(id);
    callBack && callBack();
    stateModificate("stateLikePush");
    return true;
  }
  return false;
};

// Удалить карточки из массива лайкнутых карточек по id карточки
export const likeDeleteById = (id, callBack) => {
  return (
    store.likedCardsId.splice(store.likedCardsId.indexOf(id), 1),
    callBack && callBack(),
    stateModificate("stateLikeDeleteById")
  );
};
