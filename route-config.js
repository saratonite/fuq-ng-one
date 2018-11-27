app.controller('HomeController', function ($scope) {})

app.controller('AboutController', function ($scope) {})
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
  }
])
