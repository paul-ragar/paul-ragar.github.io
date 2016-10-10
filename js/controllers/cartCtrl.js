angular.module('myApp').controller('cartCtrl', function($scope, $stateParams, mainService) {

  $scope.newCartItems = mainService.cart;

  $scope.hideEmpty = function() {
    $scope.newCart = mainService.cart;
    if ($scope.newCart.length >= 1) {
      $('.empty-cart-container').css({'visibility': 'hidden','height': '0px', 'width': '0px' });
    }
  }()

  $scope.removeItem = function(id) {
    for (var i = 0; i < mainService.cart.length; i++) {
      if (id === mainService.cart[i].name) {
        mainService.cart.splice(i, 1);
      }
    }
    $scope.newCart = mainService.cart;
    if ($scope.newCart.length < 1) {
      $('.empty-cart-container').css({'visibility': 'visible','height': '60vh', 'width': '100%' });
    }

  }
})
