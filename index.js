import sortArray from "./sort_array";

const form = document.querySelector("#form");
const text = document.querySelector("#input");
const oddList = document.querySelector("#odd-list");
const evenList = document.querySelector("#even-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  oddList.innerHTML = "";
  evenList.innerHTML = "";
  const evenArray = [];
  const oddArray = [];

  const userInput = text.value;
  const inputArray = userInput.split(" ");

  const sortedArray = sortArray(inputArray);

  sortedArray.forEach((element) => {
    if (element % 2 === 0) {
      evenArray.push(element);
    } else {
      oddArray.push(element);
    }
  });

  oddList.innerHTML = "";
  oddArray.forEach((num) => {
    const item = document.createElement("li");
    item.innerHTML = num;
    oddList.appendChild(item);
  });

  evenList.innerHTML = "";
  evenArray.forEach((num) => {
    const item = document.createElement("li");
    item.innerHTML = num;
    evenList.appendChild(item);
  });
  text.value = "";
});
