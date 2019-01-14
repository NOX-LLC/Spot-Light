export default shuffle = (deck) => {
  deck.forEach((value, i) => {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = deck[i];
    deck[i] = deck[randomIndex];
    deck[randomIndex] = temp;
    return deck;
  });

  return deck;
}
