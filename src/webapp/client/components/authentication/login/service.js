class LoginService {
  constructor($resource, $state, localStorageService, authService, CONST) {
    /*@ngInject*/
    this.resource = $resource;
    this.state = $state;
    this.storage = localStorageService;
    this.auth = authService;
    this.constants = CONST;
  }

  storeAuth() {
    this.auth.setAuthenticated();
  }

  storeVcodeAndUser(userData) {
    this.storage.set(this.constants.vcodeKey, userData.vcode);
    this.storage.set(this.constants.userName, userData.userName);
  }


  login(username, password) {
    let resource = this.resource(
        '/api/v3/users/login/');
    return resource.save(
        {
          "username": username,
          "password": password
        });
  }

  checkValidity(username, password) {
    if (username === '' | password === '') {
      return false
    }
    ;
    return true;
  }

  goNext() {
    this.state.go('landing-page');

  }

  logout() {
    return this.resource(
        '/api/users/logout/'
    );
  }
}


export default angular.module('services.login', [])
.service('loginService', LoginService)
    .name;

