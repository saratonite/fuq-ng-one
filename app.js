console.log('Hello Angular 1')

const app = angular.module('app', ['ngRoute', 'ngAnimate'])

app.controller('AppController', function ($scope, $location) {

  $scope.title = 'Hello - World';
  $scope.dirClass = 'slide-left';

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