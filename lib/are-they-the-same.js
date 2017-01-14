const comp = (a, b) => {
  for (var i = 0; i < b.length; i++) {
    let iteratee = Math.sqrt(b[i]);
    let target = a.find((num) => {
    return num === iteratee });
    if (target === undefined) {
      return false
    }
  }
  return true;
};

export default comp;
