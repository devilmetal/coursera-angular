(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope', '$filter'];
    function LunchCheckController($scope, $filter) {
        $scope.list=""
        $scope.message=""
        
        $scope.computeMessage = function () {
            var len = $scope.list
                .split(',')
                .filter(el => el != "")
                .length;
            $scope.message = len > 3 ? 
                "Too much!" : 
                len == 0 ? "Please enter data first" : "Enjoy !";
        }

    }
    
    })();
    