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