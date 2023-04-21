import {
  MAX_DISPLAY,
  MID_DISPLAY,
  MIN_DISPLAY,
  MAX_DISPLAY_START,
  MAX_DISPLAY_ADD,
  MID_DISPLAY_START,
  MID_DISPLAY_ADD,
  MIN_DISPLAY_START,
  MIN_DISPLAY_ADD,
} from './consts';

function useInitialCards(screenWidth) {
  const initialCards = {};

  if (screenWidth >= MAX_DISPLAY) {
    initialCards.start = MAX_DISPLAY_START;
    initialCards.add = MAX_DISPLAY_ADD;
    return initialCards;
  }

  if (screenWidth <= MID_DISPLAY && screenWidth > MIN_DISPLAY) {
    initialCards.start = MID_DISPLAY_START;
    initialCards.add = MID_DISPLAY_ADD;
    return initialCards;
  }

  initialCards.start = MIN_DISPLAY_START;
  initialCards.add = MIN_DISPLAY_ADD;

  return initialCards;
}

export default useInitialCards;
