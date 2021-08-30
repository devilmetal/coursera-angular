(function (){
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        ;


    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var controller = this;

        controller.items=undefined
        controller.searchTerm=undefined
        controller.init = true

        controller.doSearch = function () {
            var promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);

            promise && promise.then(function (response) {
                controller.items = response;
                controller.init = false;

              })
              .catch(function (error) {
                console.log("Something went terribly wrong.", error);
              });
        }

        controller.onRemove = function (itemIndex) {
            controller.items.splice(itemIndex, 1)           
        }

        controller.displayList = function () {
            return controller.init || !!(controller.items && controller.items.length != 0);
        }
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http(
                {
                    method: "GET",
                    url: ('https://davids-restaurant.herokuapp.com/menu_items.json'),
                  }
                )
            .then(function (result) {
                // process result and only keep items that match
                if(!!!searchTerm){
                    return undefined
                }
                var foundItems = result.data
                var processed = []
                foundItems.menu_items.forEach(item => {
                    if(item.description.toLowerCase().includes(searchTerm.toLowerCase())){
                        processed.push(item)
                    }
                });
                return processed;
            });
            
        }
    }

    function FoundItemsDirective() {
        var ddo = {
          templateUrl: 'foundItems.html',
          scope: {
            items: '<',
            onRemove: '&',
            displayList: '&'
          },
          //controller: ShoppingListDirectiveController,
          //controllerAs: 'list',
          //bindToController: true
        };
      
        return ddo;
      }
      

})();
    