// :)
const smartSearch = (array, value) => array.includes(value);
const randomSearch = (array) => {
  const randomItemIndex = Math.floor(Math.random() * 10);
    if(randomItemIndex < array.length) {
      return array[randomItemIndex];
    }
      return randomSearch(array);
};

module.exports = {
  smartSearch,
  randomSearch,
} 