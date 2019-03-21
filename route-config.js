app.controller('AboutController', function ($scope) {})
app.controller('HomeController', function ($scope) {})
app.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/pages/home.html',
      controller: 'HomeController'
    })
    $routeProvider.when('/about', {
      templateUrl: '/pages/about.html',
      controller: 'AboutController'
    })
    $routeProvider.when('/examples', {

      templateUrl: '/pages/examples.html',
      controller: 'MainCtrl'

    })
    $routeProvider.when('/breadcrumbs', {
      templateUrl: '/pages/breadcrumbs.html',
      controller: 'BreadcrumbController'
    })
  }
])