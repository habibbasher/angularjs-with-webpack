export default class LoginController {
  constructor(loginService, $scope, sessionService, CONST, $rootScope) {
    this.service = loginService;
    this.session = sessionService;
    this.constant = CONST;
    this.username = '';
    this.password = '';
    this.errorMessage = null;
    this.scope = $scope;
    this.rootScope = $rootScope;
    this.emitNavbarStatus();
  }

  setMenuItems(menuItems) {
    this.session.setStorageItem(this.constant.menuItems, menuItems);
  }


  login() {
    if (this.service.checkValidity(this.username, this.password)) {
      this.service.login(this.username, this.password)
      .$promise.then(res => {
        this.service.storeVcodeAndUser({vcode:res.vcode, userName:res.username});
        this.broadcastUserAndVcode({username: res.username, vcode: res.vcode});
        this.setMenuItems(res.menu_items);
        this.service.storeAuth();
        this.service.goNext();
      }, res => {
        this.errorMessage = res.data.detail;
      });
    } else {
      this.errorMessage = 'Username and Password can not be null';
    }
  }

  emitNavbarStatus() {
    this.scope.$emit('navbarStatus', false);
  }

  broadcastUserAndVcode(data){
    this.rootScope.$broadcast('user-data', data);
  }
}

LoginController.$inject = ['loginService', '$scope', 'sessionService', 'CONST', '$rootScope'];