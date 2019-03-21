console.log('Hello Angular 1')

const app = angular.module('app', ['ngRoute', 'ngAnimate'])

app.controller('AppController', function ($scope, $location) {

  $scope.title = 'Hello - World';
  $scope.dirClass = 'slide-left';

  $scope.routes = ['/', '/about', '/examples', '/breadcrumbs']

  $scope.currentRoute = '';

  let mainEl = document.querySelector('main');
  let mc = new Hammer(mainEl)

  mc.on('swipeleft swiperight tap', (event) => {

    if (event.isFinal && (event.type === 'swiperight' || event.type === 'swipeleft')) {

      $scope.dirClass = event.type === 'swipeleft' ? 'slide-left' : 'slide-right';



      let currentPathIndex = $scope.routes.indexOf($location.path());

      if (currentPathIndex < 0 || currentPathIndex > $scope.routes.length) return;

      let nextPathOIndex = 0;
      if (event.type === 'swipeleft') {
        nextPathOIndex = currentPathIndex + 1;
      } else {
        nextPathOIndex = currentPathIndex - 1;
      }



      $location.path($scope.routes[nextPathOIndex]);
      $scope.$apply();


    }
  })

  $scope.toggleSlideDirection = function () {

    $scope.dirClass = ($scope.dirClass === 'slide-left') ? 'slide-right' : 'slide-left';
  }

})
app.controller('MainCtrl', function ($scope, $http) {
  $scope.title = 'Hello Angular'

  $scope.filters = ['name', 'age']

  $scope.students = [{
      name: 'Foo',
      age: 18
    },
    {
      name: 'Bar',
      age: 19
    },
    {
      name: 'Baz',
      age: 17
    }
  ]

  $scope.employees = []

  // Ajax

  $http.get('/data/employees.json').then(function (data) {
    console.log(data)
    $scope.employees = data.data
  })
})