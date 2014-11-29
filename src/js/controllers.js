'use strict';
angular.module('myApp.controllers', [])
    .controller('HelloWorldController', function($scope) {
        $scope.name = {
            first: "Jane",
            last: "Doe"
        }
    });