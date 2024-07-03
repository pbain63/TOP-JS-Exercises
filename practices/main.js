function execute() {
  "use strict";

  function concat(str1, str2) {
    console.log(this === undefined);
    return str1 + str2;
  }
  concat("Hello", "World!")
}
execute();

// console.log(player1.name);
