    
    MenuDataService.inject = ['$http'] 
    function MenuDataService($http){
        var service = this;

        service.getAllCategories = function () {  
          //https://davids-restaurant.herokuapp.com/categories.json
        }
        
        service.getItemsForCategory = function (categoryShortName) {  
          //https://davids-restaurant.herokuapp.com/menu_items.json?category=
        }

    }