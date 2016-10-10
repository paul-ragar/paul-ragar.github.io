angular.module('myApp').controller('contactCtrl', function($scope, $stateParams, mainService) {

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

})
