export default deck = () => {
  const names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
  let cards = [];

  for(let s = 0; s < suits.length; s++ ) {
    for(let n = 0; n < names.length; n++ ) {
      cards.push({
        value: n + 1,
        name: names[n],
        suit: suits[s]
      });
    }
  }

  return cards;
}
