import sortArray from "./sort_array";

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const oddList = document.querySelector("#odd-list");
const evenList = document.querySelector("#even-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  oddList.innerHTML = "";
  evenList.innerHTML = "";
  const evenArray = [];
  const oddArray = [];

  const userInput = input.value;
  const inputArray = userInput.split(" ");

  const sortedArray = sortArray(inputArray);

  sortedArray.forEach((num) => {
    if (num % 2 === 0) {
      createListItem(evenList, num);
    } else {
      createListItem(oddList, num);
    }
  });

  input.value = "";
});

const createListItem = (list, num) => {
  const item = document.createElement("li");
  item.innerHTML = num;
  list.appendChild(item);
};

// First your .js file is named index.js while in the index.html, main.js is called Don't know if it's normal
// 
// I've renamed text into input, better for comprehension
// 
// 2 times you were reinitializing your oddList.innerHTML and evenList.innerHTML, I've let only the first one
// 
// I've created a function not to repeat the code,
// and finally removed the 2 last foreach to render the <li> directly in the first one

// sortedArray.forEach((num) => {
//   if (num % 2 === 0) {
//     createListItem(oddList, num);
//   } else {
//     createListItem(evenList, num);
//   }
// });
// Could also be written:
// sortedArray.forEach((num) => {
//   const list = num % 2 === 0 ? oddList : evenList;
//   createListItem(list, num);
// });
// but I don't know if you learnt the conditional operator, first way is good too
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
//
// the code in sort_array.js sorts the array but also remove the duplicated entries, I don't know if you noticed this
//
// To just sort an array, you can simply use Array.sort() => https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
