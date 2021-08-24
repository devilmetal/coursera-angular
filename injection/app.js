(function (){
    'use strict';
    angular.module('DIApp', [])
        .controller('DIController', DIController);
    DIController.$inject = ['$score', '$filter'];
    function DIController($scope, $filter) {
        $scope.name="Some-Name";
        
        $scope.upper = function () {
            var upCase = $filter('uppercase')
            $scope.name = upCase($scope.name)
        }
}
})();