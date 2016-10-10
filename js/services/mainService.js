angular.module('myApp').service('mainService', function() {

  this.cart = [];
  this.productInfo=[{
    name: "America",
    price: "$14.00+",
    image: "../images/america.jpg"
  }, {
    name: "Custom Last Name",
    price: "$102.78",
    image: "../images/calvarusos.jpg"
  }, {
    name: "Custom Name with Back",
    price: "$1,240.99",
    image: "../images/madison.jpg"
  }, {
    name: "BE Kind",
    price: "$0.34",
    image: "../images/beKind1.jpg"
  }, {
    name: "Hello",
    price: "$23.85",
    image: "../images/helloHand.jpg"
  }, {
    name: "I am a child of God",
    price: "$23.44",
    image: "../images/iAmAChild.jpg"
  }, {
    name: "Custom First Name",
    price: "$23.44",
    image: "../images/mila.jpg"
  }, {
    name: "Darling",
    price: "$23.44",
    image: "../images/darling.jpg"
  }, {
    name: "BE Brave",
    price: "$23.44",
    image: "../images/beBraveBlue.jpg"
  }, {
    name: "Custom Full Name",
    price: "$23.44",
    image: "../images/evaRosalie.jpg"
  }, {
    name: "Little Cub",
    price: "$23.44",
    image: "../images/littleCub.jpg"
  }, {
    name: "Always",
    price: "$23.44",
    image: "../images/mickey.jpg"
  }];

  this.addCartInfo = function(obj) {
    this.cart.push(obj);
  };


})
