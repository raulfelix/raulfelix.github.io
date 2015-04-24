/* global angular,FastClick */

(function() {
  
  angular.module('app', [
    'app.skills',
    'app.nav'
  ])
  .config(['$compileProvider', '$interpolateProvider', function($compileProvider, $interpolateProvider) {
    
    // prevent angular generating unsafe prefix on obscure WinApp resource URLs
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(http|https|file|ms-appx):/);
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(http|https|file|ms-appx):/);
           
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
  }]);

  angular
    .module('app.nav', [])
    .controller('NavCtrl', NavCtrl);
  
  function NavCtrl($scope) {
    $scope.up = function() {
      Velocity(document.body, "scroll", { offset: "0px"});
    }
  }
  
})();