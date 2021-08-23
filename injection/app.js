(function (){
    'use strict';
    angular.module('DIApp', [])
        .controller('DIController', function($scope, $filter) {
            $scope.name="Some-Name";
            
            $scope.upper = function () {
                var upCase = $filter('uppercase')
                $scope.name = upCase($scope.name)
            }
    })
})();