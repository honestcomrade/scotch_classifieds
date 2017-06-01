(function () {
  "use strict";

  angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope) {

      $scope.name =  {
        first: "Joe",
        last: "Scarpacelli"
      }
      $scope.message = "Hello, World!!!";

    });
})();