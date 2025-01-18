export const createCard = (template, catInfo, handleLikeCard) => {
  const card = template.querySelector(".card").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const cardLikeButton = card.querySelector(".card__like-button");
  const preloader = document.createElement("div");
  preloader.className = "card__preloader";
  card.appendChild(preloader);

  card.id = catInfo.id;
  catInfo.like && card.classList.add("like");
  cardLikeButton.addEventListener("click", () => handleLikeCard(catInfo.id));

  cardImage.src = catInfo.url;
  cardImage.setAttribute("alt", "Котик");
  cardImage.addEventListener("load", () => {
    preloader.remove();
  });
  cardImage.addEventListener("error", () => {
    console.error(
      `Ошибка загрузки изображения - "${cardImage.alt}" по адресу ${cardImage.src}`
    );
  });
  return card;
};
