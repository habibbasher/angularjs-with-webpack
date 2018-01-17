route.$inject = ['$stateProvider'];

export default function route($stateProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    template: require('./home.html'),
    controller: 'HomeController',
    controllerAs: 'homec',
  });
}
