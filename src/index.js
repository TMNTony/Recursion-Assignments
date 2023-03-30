import "./style.css";

const output = document.querySelector("#output");

function fibIt(num) {
  let first = 0;
  let second = 1;
  let current = 0;
  const array = [];

  for (let i = 0; i < num; i++) {
    if (i <= 1) {
      current = i;
    } else {
      current = first + second;
      first = second;
      second = current;
    }
    array.push(current);
  }
  return array;
}

function fibRec(num) {
  if (num === 1) return [0];
  if (num === 2) return [0, 1];
  const previous = fibRec(num - 1);
  const current = previous[previous.length - 1] + previous[previous.length - 2];
  return [...previous, current];
}

function mergeSort(array) {
  if (array.length < 2) return array;

  const middle = Math.ceil(array.length / 2);
  const first = array.slice(0, middle);
  const second = array.slice(-middle);

  mergeSort(first);
  mergeSort(second);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i <= first.length - 1 && j <= second.length - 1) {
    if (first[i] < second[j]) {
      array[k++] = first[i++];
    } else {
      array[k++] = second[j++];
    }
  }

  for (; i <= first.length - 1; i++) {
    array[k++] = first[i];
  }

  for (; j <= second.length - 1; j++) {
    array[k++] = second[j];
  }
  return array;
}

output.innerHTML = mergeSort([5, 3, 2, 4, 6, 9, 11]);
console.log(mergeSort([5, 3, 2, 4, 6, 9, 11]));
