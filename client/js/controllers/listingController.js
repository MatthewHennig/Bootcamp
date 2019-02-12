angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
	  /**TODO 
	  *Save the article using the Listings factory. If the object is successfully 
	  saved redirect back to the list page. Otherwise, display the error
	 */    
		$scope.templisting = new Object();
        $scope.templisting.code = $scope.newListing.code;
        $scope.templisting.name = $scope.newListing.name;
        $scope.templisting.address = $scope.newListing.address;
        $scope.templisting.coordinates = new Object();
        $scope.templisting.coordinates.latitude = $scope.newListing.lat;
        $scope.templisting.coordinates.longitude = $scope.newListing.long;
		$scope.listings.push($scope.templisting);
		Listings.create(templisting);
	  if(err)
	  {
      console.log(err);
      res.status(400).send(err);
	  }
    };

    $scope.deleteListing = function(id) {
	   /**TODO
        Delete the article using the Listings factory. If the removal is successful, 
		navigate back to 'listing.list'. Otherwise, display the error. 
       */
		$scope.listings.splice(id,1);
		Listing.delete(index);
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);