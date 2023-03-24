function useInitialCards(screenWidth) {
  const initialCards = {};

  if (screenWidth >= 1280) {
    initialCards.start = 12;
    initialCards.add = 3;
    return initialCards;
  }

  if (screenWidth <= 928 && screenWidth > 768) {
    initialCards.start = 8;
    initialCards.add = 2;
    return initialCards;
  }

  initialCards.start = 5;
  initialCards.add = 5;

  return initialCards;
}

export default useInitialCards;
