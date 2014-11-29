'use strict';
angular.module('myApp.directives', [])
    .directive('helloWorld', function() {
        return {
            restrict: "AE",
            scope: {
                name: "="
            },
            template: "<h1>Hello {{name.first}} {{name.last}}!</h1>" +
                "<input type='text' data-ng-model='name.first' >" +
                "<input type='text' data-ng-model='name.last' >"
        }
    });