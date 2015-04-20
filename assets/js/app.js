/* global angular,FastClick */

(function() {
  
  angular.module('app.raulfelix', [
    'app.skills'
  ])
  .config(['$compileProvider', function($compileProvider) {
    
    // prevent angular generating unsafe prefix on obscure WinApp resource URLs
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(http|https|file|ms-appx):/);
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(http|https|file|ms-appx):/);
           
  }]);

})();


(function() {

  angular
    .module('app.skills', []);
  
})();
(function() {
  
  angular
    .module('app.skills')
    .controller('SkillsCtrl', Skills);
  
  function Skills($scope) {
    $scope.skills = {
      
    };
  }
  
})();