// const removeCardById = (cardID) => {
//   document.querySelector(`.card[id='${cardID}']`).remove();
// };

// const getCardID = (evt) => evt.target.closest(".card").getAttribute("id");

// const itLikedCard = (cardID) =>
//   document.querySelector(`.card[id='${cardID}']`).getAttribute("liked");

// const likeCard = (likes, cardID, userID) => {
//   const card = document.querySelector(`.card[id='${cardID}']`);
//   const likeButton = card.querySelector(".card__like-button");
//   const cardLikeCounter = card.querySelector(".card__like-counter");

//   if (likes.some((user) => user._id === userID)) {
//     card.setAttribute("liked", true);
//     likeButton.classList.add("card__like-button_is-active");
//   } else {
//     card.removeAttribute("liked");
//     likeButton.classList.remove("card__like-button_is-active");
//   }

//   cardLikeCounter.textContent = likes.length;
// };

export const createCard = (template, catInfo, handleLikeCard) => {
  const card = template.querySelector(".card").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const cardLikeButton = card.querySelector(".card__like-button");

  card.setAttribute("catId", catInfo.id);
  cardImage.src = catInfo.url;
  cardImage.setAttribute("alt", "Котик");
  // cardImage.addEventListener("click", () => openImagePopup(cardInfo));

  cardLikeButton.addEventListener("click", handleLikeCard);

  //Определяем ставил ли лайк пользователь
  // if (cardInfo.likes.some((user) => user._id === userID)) {
  //   card.setAttribute("liked", true);
  //   cardLikeButton.classList.add("card__like-button_is-active");
  // } else {
  //   card.removeAttribute("liked");
  // }
  return card;
};
