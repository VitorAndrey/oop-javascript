// We have three ways to create an object:

// Object literal sintax
const literalCircle = {
  radious: 1,
  draw: function () {
    console.log("drawing circle");
  },
};

// Factory function
function createCircle(radious) {
  return {
    radious,
    draw: function () {
      console.log("drawing circle");
    },
  };
}
const factoryCircle = createCircle(1);

// Constructor function (capital letter convention)
function Circle(radious) {
  this.radious = radious;
  this.draw = function () {
    console.log("drawing circle");
  };
}
const constructorCircle = new Circle(1);
