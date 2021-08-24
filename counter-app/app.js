(function (){
    'use strict';
    angular.module('CounterApp', [])
        .controller('CounterController', CounterController);
    
    CounterController.$inject = ['$scope', '$timeout'];
    function CounterController($scope, $timeout) {
        $scope.onceCounter=0;
        $scope.counter=0;

        $scope.showNumberOfWatchers=function () {
            console.log('number of watchers ', $scope.$$watchersCount)
        };

        $scope.countOnce = function () {
            $scope.onceCounter = 1;
        }

        $scope.count = function () {
            // setTimeout(
            //     function () {
            //     $scope.$apply(function () {
            //         $scope.counter++;
            //         console.log('Counter incremented!')
            //     })
            //     , 2000
            // )
            $timeout(function () {
                $scope.counter++;
                console.log('Counter incremented!')
            }, 2000)
        }

        $scope.$watch(function () {
           console.log('Digest loop fired ! ') 
        });


        // $scope.$watch('onceCounter', function (newValue, oldValue) {
        //     console.log('once counter old value ', oldValue);
        //     console.log('once counter new value', newValue);
        // })

        // $scope.$watch('counter', function (newValue, oldValue) {
        //     console.log('counter old value ', oldValue);
        //     console.log('counter new value', newValue);
        // })

        
}
})();
    