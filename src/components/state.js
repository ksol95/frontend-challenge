export const store = {
  cards: [],
  likedCardsId: [],
  page: 0,
  logMode: true,
};

export const stateModificate = (owner = "") => {
  if (store.logMode) {
    console.log(owner);
    console.log(store);
  }
};

export const findCardById = (id) => {
  const res = store.cards.find((item) => item.id == id);
  return typeof res === "undefined" ? false : res;
};

export const findLikeInDomById = (id, node) => {
  const res = Array.from(node.childNodes).find((card) => card.id == id);
  return typeof res === "undefined" ? false : res;
};

export const pushCard = (card) => {
  if (!store.cards.includes(card)) {
    store.cards.push(card);
    stateModificate("stateCardPush");
    return true;
  }
  return false;
};

export const pushLike = (id) => {
  if (!store.likedCardsId.includes(id)) {
    store.likedCardsId.push(id);
    stateModificate("stateLikePush");
    return true;
  }
  return false;
};

export const cardLikeStatusToggle = (id) => {
  return (
    stateModificate("stateCardLikeStatusToggle"),
    (store.cards.find((card) => card.id == id).like ^= true)
  );
};

export const likeDeleteById = (id) => {
  return (
    store.likedCardsId.splice(store.likedCardsId.indexOf(id), 1),
    stateModificate("stateLikeDeleteById")
  );
};
