var romanToInt = function (s) {
  let symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    let curr = symbols[s.charAt(i)];
    let next = symbols[s.charAt(i + 1)];

    if (next) {
      if (curr >= next) {
        sum += curr;
      } else {
        sum += next - curr;
        i++;
      }
    } else {
      sum += curr;
    }
  }
  return sum;
};
