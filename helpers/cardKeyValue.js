const ACE = 1;
const JACK = 11;
const QUEEN = 12;
const KING = 13;

export default cardKeyValue = ({
    value,
  }) => {
  let character = value;
  if (value === ACE) {
    character = 'A';
  } else if (value === JACK) {
    character = 'J';
  } else if (value === QUEEN) {
    character = 'Q';
  } else if (value === KING) {
    character = 'K';
  }
  return character;
};
