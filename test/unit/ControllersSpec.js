'use strict';

describe("Controller Specs", function() {
    var $scope;

    beforeEach(module('myApp.controllers'));

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('HelloWorldController', {
            $scope: $scope
        });
    }));

    it('Should create "name" model with first name "Jane"', function() {
        expect($scope.person.firstName).toBe("Jane");
    });

});