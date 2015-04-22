/* global angular,FastClick */

(function() {
  
  angular.module('app', [
    'app.skills'
  ])
  .config(['$compileProvider', '$interpolateProvider', function($compileProvider, $interpolateProvider) {
    
    // prevent angular generating unsafe prefix on obscure WinApp resource URLs
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(http|https|file|ms-appx):/);
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(http|https|file|ms-appx):/);
           
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
  }]);

})();