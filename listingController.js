angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      $scope.listings.push({code: $scope.listings.codeName,
        name: $scope.listings.buildingName,
        coordinates: { latitude: $scope.listings.buildingLatitude, longitude: $scope.listings.buildingLongitude},
        address: $scope.listings.buildingAddress});
    };
    $scope.deleteListing = function(index) {
      var removeBuilding = $scope.listings.indexOf(index);
      $scope.listings.splice(removeBuilding, 1);
    };

    $scope.showDetails = function(building) {
      $scope.showBuilding = $scope.listings[$scope.listings.indexOf(building)];
    };
  }

]);
