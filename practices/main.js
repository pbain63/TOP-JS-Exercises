function f() {
    return [1, 2, 3];
  }
  
  const [a, , b] = f();
  console.log(a); // 1
  console.log(b); // 3
  
  const [c] = f();
  console.log(c); // 1
  