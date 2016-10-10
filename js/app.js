angular.module('myApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

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

})
