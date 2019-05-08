app.factory("productsFactory", function($http){
 
    var factory = {};
 
    // read all products
    factory.readProducts = function(){
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api-REST-PHP/api/product/read.php'
        });
    };
     


// create product
factory.createProduct = function($scope){
    return $http({
        method: 'POST',
        data: {
            'name' : $scope.name,
            'description' : $scope.description,
            'price' : $scope.price,
            'category_id' : 1
        },
        url: 'http://localhost:8080/api-REST-PHP/api/product/create.php'
    });
};
 
// readOneProduct will be here

// read one product
factory.readOneProduct = function(id){
    return $http({
        method: 'GET',
        url: 'http://localhost:8080/api-REST-PHP/api/product/read_one.php?id=' + id
    });
};
 
// updateProduct will be here

// update product
factory.updateProduct = function($scope){
 
    return $http({
        method: 'POST',
        data: {
            'id' : $scope.id,
            'name' : $scope.name,
            'description' : $scope.description,
            'price' : $scope.price,
            'category_id' : 1
        },
        url: 'http://localhost:8080/api-REST-PHP/api/product/update.php'
    });
};
 
// deleteProduct will be here
// delete product
factory.deleteProduct = function(id){
    return $http({
        method: 'POST',
        data: { 'id' : id },
        url: 'http://localhost:8080/api-REST-PHP/api/product/delete.php'
    });
};
 
// searchProducts will be here

// search all products
factory.searchProducts = function(keywords){
    return $http({
        method: 'GET',
        url: 'http://localhost:8080/api-REST-PHP/api/product/search.php?s=' + keywords
    });
};
     
    return factory;
});
