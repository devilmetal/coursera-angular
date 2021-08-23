(function (){
    'use strict';
    angular.module('NameCalculator', [])
        .controller('NameCalculatorController', function($scope) {
            $scope.name=""
            $scope.totalValue=0
            $scope.displayNumeric=function () {
                var total = computeNumericFromString($scope.name);
                $scope.totalValue = total;
            };
        function computeNumericFromString(string) {
            var total = 0
            for (let i = 0; i < string.length; i++) {
                total += string.charCodeAt(i);
            }
            return total;
            
        }
    })
})();