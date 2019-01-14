export default deck = () => {
  const names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
  let cards = [];

  suits.forEach((suit) => {
    names.forEach((name, i) => {
      cards.push({
        value: i + 1,
        name,
        suit,
      });
    })
  });

  return cards;
}
