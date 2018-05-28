(function(){
'use strict';

  angular.module('myFirstApp', [])

  .controller('MyFirstController', function($scope) {
    $scope.name = "Sreekant";
    $scope.sayHello = function() {
      return "Hello Sreekant - How is it going..!";
    };
  });

})();
