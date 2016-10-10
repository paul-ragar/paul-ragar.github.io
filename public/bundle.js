angular.module('myApp', ['ui.router']).config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');


  $stateProvider
    .state('shop', {
      templateUrl: './views/shop.html',
      controller: 'shopCtrl',
      url: '/'
    })
    .state('contact', {
      templateUrl: './views/contact.html',
      controller: 'contactCtrl',
      url: '/contact'
    })
    .state('about', {
      templateUrl: './views/about.html',
      controller: 'aboutCtrl',
      url: '/about/:id'
    })
    .state('cart', {
      templateUrl: './views/cart.html',
      url: '/checkOut/:id',
      controller: 'cartCtrl'
    })

    $urlRouterProvider.otherwise('/');

}])

angular.module('myApp').controller('aboutCtrl', ["$scope", "$stateParams", "mainService", function($scope, $stateParams, mainService) {




}])

angular.module('myApp').controller('cartCtrl', ["$scope", "$stateParams", "mainService", function($scope, $stateParams, mainService) {

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
}])

angular.module('myApp').controller('contactCtrl', ["$scope", "$stateParams", "mainService", function($scope, $stateParams, mainService) {

  $scope.sendMessage = function() {
    if (!$('.input-name').val() || !$('.input-email').val() || !$('.input-message').val()) {
      $('.contact-warning').css('visibility', 'visible');
    }
    else {
    $('.contact-opaque').css('visibility', 'visible');
    $('.contact-pop-up').css('visibility', 'visible');
    }
  }
  $scope.closePopUp = function() {
    $('.contact-opaque').css('visibility', 'hidden');
    $('.contact-pop-up').css('visibility', 'hidden');
    $('.contact-warning').css('visibility', 'hidden');
    $('.input-name').val('');
    $('.input-email').val('');
    $('.input-phone').val('');
    $('.input-message').val('');

  }

}])

angular.module('myApp').controller('mainCtrl', ["$scope", function($scope) {





}])

angular.module('myApp').controller('shopCtrl', ["$scope", "$stateParams", "mainService", function($scope, $stateParams, mainService) {


  $scope.products = mainService.productInfo;

  $scope.quickView = function(id) {
    $('.opaque-square').css('visibility', 'visible');
    $('.quick-product').css('visibility', 'visible');
    $('.x-close').css('visibility', 'visible');

    for (var i = 0; i < mainService.productInfo.length; i++) {
      if (id === mainService.productInfo[i].name) {
        $scope.selectedProduct = mainService.productInfo[i];
        $scope.selectedProductImage = {'background-image': 'url('+$scope.selectedProduct.image+')'};
      }
    }
  }


  $scope.addCart = function(id) {
    $('.opaque-square').css('visibility', 'hidden');
    $('.quick-product').css('visibility', 'hidden');
    $('.x-close').css('visibility', 'hidden');

    for (var i = 0; i < mainService.productInfo.length; i++) {
      if (id === mainService.productInfo[i].name) {
        mainService.addCartInfo(mainService.productInfo[i]);
      }
    }

  }

   $scope.hideEmptyCart= function() {
       $('.empty-cart-container').css({'visibility': 'hidden'});
   }
  // $scope.addCart = function(id) {
  //   $('.opaque-square').css('visibility', 'hidden');
  //   $('.quick-product').css('visibility', 'hidden');
  //
  //   for (var i = 0; i < mainService.productInfo.length; i++) {
  //     if (id === mainService.productInfo[i].name) {
  //       $scope.newCartItem = mainService.productInfo[i];
  //       $scope.newCartItemImage = {'background-image': 'url('+$scope.newCartItem.image+')'}
  //     }
  //   }
  // }

  $scope.backView = function() {
    $('.opaque-square').css('visibility', 'hidden');
    $('.quick-product').css('visibility', 'hidden');
    $('.x-close').css('visibility', 'hidden');
  }
}])

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
