const myObject = {
  property: "Value!",
  otherProperty: 77,
  "obnoxious property": function () {},
};

const variable = "property";

console.log(myObject.property);
console.log(myObject["obnoxious property"]);

// console.log(myObject.variable);
console.log(myObject[variable]);
