export const createCard = (template, catInfo, handleLikeCard) => {
  const card = template.querySelector(".card").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const cardLikeButton = card.querySelector(".card__like-button");

  card.id = catInfo.id;
  cardImage.src = catInfo.url;
  cardImage.setAttribute("alt", "Котик");
  catInfo.like && card.classList.add("like");

  cardLikeButton.addEventListener("click", () => handleLikeCard(catInfo.id));
  return card;
};
