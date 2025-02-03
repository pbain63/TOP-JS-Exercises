const Person = (name) => {
  const sayName = () => console.log(`My name is ${name}`);

  return { sayName };
};

const Nerd = (name) => {
  const prototype = Person(name);
  const doSomthingNerdy = () => console.log("Nerd stuff");
  return Object.assign({}, prototype, { doSomthingNerdy });
};

const jeff = Nerd("Prodip.");
jeff.sayName();
jeff.doSomthingNerdy();
