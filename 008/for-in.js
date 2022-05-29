const arr = ["a"];

for (const k in arr) {
  console.assert(k === "0");
  console.log(arr[k]);
}
