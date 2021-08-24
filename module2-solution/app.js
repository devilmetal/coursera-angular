(function (){
    'use strict';
    angular.module('ShopApp', [])
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .controller('ToBuyController', ToBuyController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;
        alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    }
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {

        var toBuy = this;
        toBuy.items = ShoppingListCheckOffService.getToBuyItems();
        toBuy.buy = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex)
        }
    }

    function ShoppingListCheckOffService(){
        var service = this;

        var toBuyItems = [
            { name: "cookies", quantity: 10 },
            { name: "cookies", quantity: 10 },
            { name: "cookies", quantity: 10 },
            { name: "cookies", quantity: 10 },
            { name: "cookies", quantity: 10 },
        ]
        var alreadyBoughtItems = []

        service.buyItem = function (itemIndex) {
            var item = toBuyItems[itemIndex]
            toBuyItems.splice(itemIndex, 1)
            alreadyBoughtItems.push(item)           
        }

        service.getAlreadyBoughtItems = function () {
            return alreadyBoughtItems;            
        }

        service.getToBuyItems = function () {
            return toBuyItems;            
        }
    }

})();
    