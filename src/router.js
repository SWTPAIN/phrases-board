routerConfig.$inject = [
  '$stateProvider',
  '$urlRouterProvider'
];

export function routerConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'app',
      url: '/',
      views: {
        '': {
          template: '<app></app>'
        }
      }
    });

  $urlRouterProvider.otherwise('/');
}
