angular.module('testApp', [
  'ionic',
  'testApp.controllers',
  'nvd3',
  'nvChart',
  // we add new dependecies
  'testApp.services',
  'testApp.filters',
  'testApp.directives'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
  // console.log("run app.js");
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.myStocks', {
      url: '/my-stocks',
      views: {
        'menuContent': {
          templateUrl: 'templates/my-stocks.html',
          controller: 'MyStocksCtrl'
        }
      }
    })

  .state('app.stock', {
    url: "/:stockTicker",
    views: {
      'menuContent': {
        templateUrl: 'templates/stock.html',
        controller: 'StockCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/my-stocks');
  // console.log("config app.js");
});
