const key = "z";
const { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
