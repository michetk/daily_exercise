const map = new Map([
  ["s", "is a string"],
  [true, "is a boolean"],
]);
console.log(map);

for (const [k, v] of map) {
  console.log(`${k} -> ${v}`);
}
