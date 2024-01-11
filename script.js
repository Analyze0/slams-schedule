const date = new Date();
let minutes = date.getMinutes();
let hours = date.getHours();
console.log(hours + ":"+minutes);
function foo() {

    console.log(hours + ":"+minutes);

  setTimeout(foo, 1000);
}

foo();