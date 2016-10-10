angular.module('myApp').controller('shopCtrl', function($scope, $stateParams, mainService) {


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
})
