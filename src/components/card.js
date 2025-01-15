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
