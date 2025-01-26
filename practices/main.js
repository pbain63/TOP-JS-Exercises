function outer() {
  const outerVar = "Hey I am the outer Var";

  function inner() {
    const innerVar = "hey I am the inner Var";
    console.log(innerVar);
    console.log(outerVar);
  }
  inner();
}
outer();
