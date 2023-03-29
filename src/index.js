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
console.log(fibIt(8));
