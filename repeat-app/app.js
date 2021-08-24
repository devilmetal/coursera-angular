(function (){
    'use strict';

    var shoppingList1 = ['Milk', 'Cream', 'Butter']

    var shoppingList2 = [
        {
            name: 'Milk',
            quantity: "2"
        }, 
        {
            name: 'Cream',
            quantity: "1"
        },
        {
            name: 'Butter',
            quantity: "3"
        }]

    angular.module('ShopApp', [])
        .controller('ShopController', ShopController);
    
        ShopController.$inject = ['$scope'];
    function ShopController($scope) {
        $scope.shoppingList1=shoppingList1;
        $scope.shoppingList2=shoppingList2;
    }
})();
    