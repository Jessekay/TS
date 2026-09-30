// This object's function will not be executed because typescript does not run undefined functions and the function that was passed to the object is regular and to solve this we have to use the arrow function
const normalPerson = {
  name: "Jesse",
  greet: function () {
    setTimeout(function () => {
      console.log(`Hello ${this.name}`);
    }, 1000)
  }
}

// The below object lets typescript treats it right because the setTimeout method has arrow function used 
const arrowPerson = {
  name: "Jesse",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello ${this.name}`);
    }, 1000);
  }
}