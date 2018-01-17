export default class HomeController {

  constructor($scope, CONST, $rootScope, homeService) {
    this.constant = CONST;
    this.scope = $scope;
    this.rootScope = $rootScope;
    this.service = homeService;
  }

  goToLogin() {

    console.log('home controller');
  };

}

HomeController.$inject = [ '$scope', 'CONST', '$rootScope'];
