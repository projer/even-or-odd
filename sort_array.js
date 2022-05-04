function sortArray(array) {
  const filteredArray = array.filter(
    (element) => !isNaN(element) && element !== ""
  );
  const uniqueSet = new Set(filteredArray);
  const backToArray = [...uniqueSet];
  return backToArray.sort((a, b) => a - b);
}

export default sortArray;
