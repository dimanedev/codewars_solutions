function solution(input, markers) {
  const rows = input.split("\n");

  for (let i = 0; i < rows.length; i++) {
    for (let marker of markers) {
      if (rows[i].includes(marker)) {
        rows[i] = rows[i].slice(0, rows[i].indexOf(marker)).trim();
      }
    }
  }

  return rows.join("\n");
}

console.log(
  solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
);
