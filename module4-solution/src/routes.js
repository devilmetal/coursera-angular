(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider']
    function RoutesConfig($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home',{
                url: '/',
                templateUrl: 'src/home/home.template.html'
            })
            .state('categories',{
                url: '/categories',
                templateUrl: 'src/categories/categories.template.html',
                controller: 'CategoriesController as ctrl',
                resolve: {
                    items: ['MenuDataService', (MenuDataService) => {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('items',{
                url: '/{category}/items',
                templateUrl: 'src/items/items.template.html',
                controller: 'ItemsController as ctrl',
                resolve: {
                    items: ['MenuDataService','$stateParams', (MenuDataService,$stateParams) => {
                        return MenuDataService.getItemsForCategory($stateParams.category);
                    }]
                }
            });
    }
}());
