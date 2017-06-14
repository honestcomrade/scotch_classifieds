angular
  .module("ngClassifieds", ["ngMaterial", 'ui.router'])
  .config(function($mdThemingProvider, $stateProvider) {
    
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('orange');

    $stateProvider
      .state('classifieds', {
        url: '/classifies',
        template: 'components/classifieds/classifieds.tpl.html',
        controller: 'classifiedsCtrl as vm'
      })
  });