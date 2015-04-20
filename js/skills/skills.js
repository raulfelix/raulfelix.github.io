(function() {
  
  angular
    .module('app.skills')
    .controller('SkillsCtrl', Skills);
  
  function Skills($scope) {
    $scope.skills = {
      
    };
    
    console.log('skills CTRl');
  }
  
})();