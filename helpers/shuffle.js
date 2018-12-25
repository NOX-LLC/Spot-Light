export default shuffle = (array) => {
  let length = 0;
  let index = 0;
  let temp = null;

  for (length = array.length - 1; length > 0; length -= 1) {
    index = Math.floor(Math.random() * (length + 1));
    temp = array[length];
    array[length] = array[index];
    array[index] = temp;
  }

  return array;
}
