const fibonacci = (n) => {
  const result = [];
  let start = 0;
  let next = 1;

  switch (n) {
    case 0:
      break;
    case 1:
      result.push(start);
      break;
    case 2:
      result.push(start);
      result.push(next);
      break;
    default:
      result.push(start);
      result.push(next);
      for (let i = 2; i < n; i++) {
        const val = start + next;
        start = next;
        next = val;
        result.push(val);
      }
  }

  return result;
};

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(10));
