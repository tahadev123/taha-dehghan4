const numbers = [5, 12, 8, 130, 44];
const sortNumber = [...numbers];
const lessThan30 = [];
const stringNumber = [];
const removeIndex = []

sortNumber.sort(function (a, b) {
  return a - b;
});
sortNumber.reverse();

const smaller = (numbers) => {
  for (let i = 0; i < numbers.length + 1; i++) {
    if (numbers[i] < 30) {
      lessThan30.push(numbers[i]);
    }
  }
};

smaller(numbers);

const Total = numbers.reduce((acc, cur) => {
  const result = acc + cur;
  return result;
}, 0);

const numberString = numbers.map((item) => {
  const result = item.toString();
  stringNumber.push(result);
});

console.log(removedIndex);
