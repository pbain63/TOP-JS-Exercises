function show() {
  "use strict";
  console.log(this === undefined);

  function display() {
    console.log(this === undefined);
  }
  display();
}

show();
// console.log(player1.name);
