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
(function() {

  angular
    .module('app.experience', []);
  
})();
(function() {

  angular
    .module('app.skills', []);
  
})();
(function() {
  
  angular
    .module('app.experience')
    .controller('ExperienceCtrl', ExperienceCtrl);
  
  function ExperienceCtrl($scope) {
    
    $scope.experience = [
      {
        position: 'Lead Front End Engineer/UX Specialist',
        duration: 'Oct 2014 - present',
        company: {
          name: 'Commonwealth Bank',
          logo: 'assets/images/lgo-cba.png'
        },
        technologies: 'AngularJS, Apache Cordova, Grunt, Javascript, Design thinking',
        description: 'The details of this work is sensitive but the nature of the work is to provide software development skills in mobile and web contexts as well as user experience guidance. In addition, I build prototypes that experiment with technologies and user interaction patterns which are then taken into production.'
      }
    ];
    
  }
  
})();
(function() {
  
  angular
    .module('app.skills')
    .controller('SkillsCtrl', SkillsCtrl);
  
  function SkillsCtrl($scope) {
    
    $scope.skillsets = [
      {
        area: 'Industry experience',
        expertise: ['Mining', 'Finance (CBA)', 'Government (DOD)', 'Education/Scientific research'] 
      },
      {
        'area': 'Main technologies',
        'disciplines': [
          {
            'subtitle': 'Front end',
            'skills': ['HTML5', 'CSS3', 'Sass', 'Javascript', 'Grunt']
          },
          {
            'subtitle': 'Programming languages',
            'skills': ['Java', 'PHP', 'Ruby', 'C#']
          },
          {
            'subtitle': 'Javascript frameworks',
            'skills': ['AngularJS', 'Backbone.js']
          },
          {
            'subtitle': 'Templating frameworks',
            'skills': ['Handlebars', 'HAML', 'JSP']
          },
          {
            'subtitle': 'Web application frameworks',
            'skills': ['Ruby on Rails', 'Spring MVC']
          },
          {
            'subtitle': 'Mobile application frameworks',
            'skills': ['Android', 'Apache Cordova']
          },
          {
            'subtitle': 'Content management systems',
            'skills': ['Ghost', 'Wordpress']
          },
          {
            'subtitle': 'Testing',
            'skills': ['Mocha', 'Phantom JS', 'Jasmine', 'rspec', 'Cucumber', 'Selenium']
          }
        ]
      },
      {
        area: 'Processes',
        expertise: ['Design Thinking', 'Agile', 'Kanban', 'SDLC', 'Behavioural driven development (BDD)', 'Test driven development'] 
      },
      {
        area: 'Productivity tools',
        expertise: ['Jira', 'Git', 'Bitbucket', 'Confluence'] 
      },
      {
        area: 'Other',
        expertise: ['Sketch', 'Photoshop', 'Illustrator'] 
      }
    ];
    
  }
  
})();