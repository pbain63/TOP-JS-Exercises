function makeAdding(firstNUmber) {
  const first = firstNUmber;

  return function resulting(secondNumber) {
    const second = secondNumber;
    return first + second;
  }
}