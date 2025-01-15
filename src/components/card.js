export const createCard = (template, catInfo) => {
  const card = template.querySelector(".card").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const cardLikeButton = card.querySelector(".card__like-button");

  card.setAttribute("cat_id", catInfo.id);
  cardImage.src = catInfo.url;
  cardImage.setAttribute("alt", "Котик");

  cardLikeButton.addEventListener("click", () => handleLikeCard(catInfo.id));
  return card;
};

const handleLikeCard = (id) => {
  const card = document.querySelector(`[cat_id=${id}]`);
  console.log(card);
};
