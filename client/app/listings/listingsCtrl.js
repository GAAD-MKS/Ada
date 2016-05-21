angular.module('adaApp').controller('ListingsCtrl', ListingsCtrl);


function ListingsCtrl($scope, listingsFactory) {
  var vm = this;
  vm.name = "adsf";
  vm.violations = [];

  vm.populateListings = function() {
    listingsFactory.fetchListings().then(function(res) {
      console.log(res);
      res.forEach(function(item) {
        vm.violations.push(item);
      })
    })
  }

  vm.closeListing = function(item) {
    console.log(item);
    listingsFactory.closeListing(item).then(function(res) {
      item.status = "closed"
    })
  }

  vm.populateListings();
}
