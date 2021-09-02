(function () {
'use strict';

angular.module('MenuApp')
.controller('CategorieListController', CategorieListController);


CategorieListController.$inject = ['MenuDataService', 'items'];
function CategorieListController(MenuDataService, items) {
  var mainList = this;
  mainList.items = items;
}

})();
