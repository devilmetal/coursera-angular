(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesController',CategoriesController);

    CategoriesController.$inject = ['items'];
    function CategoriesController(items) {
        let ctrl = this;
        ctrl.items = items;
    }
}());
