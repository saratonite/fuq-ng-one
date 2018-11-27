console.log('Hello Angular 1')

const app = angular.module('app', ['ngRoute'])

app.controller('MainCtrl', function ($scope, $http) {
  $scope.title = 'Hello Angular'

  $scope.filters = ['name', 'age']

  $scope.students = [
    { name: 'Foo', age: 18 },
    { name: 'Bar', age: 19 },
    { name: 'Baz', age: 17 }
  ]

  $scope.employees = []

  // Ajax

  $http.get('/data/employees.json').then(function (data) {
    console.log(data)
    $scope.employees = data.data
  })
})
