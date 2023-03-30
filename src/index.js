import "./style.css";

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

console.log(fibRec(7));
