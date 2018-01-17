class HomeService {
  constructor($resource, $state, localStorageService, CONST) {
    /*@ngInject*/
    this.resource = $resource;
    this.state = $state;
    this.storage = localStorageService;
    this.constants = CONST;
  }

}


export default angular.module('services.home', [])
.service('homeService', HomeService)
    .name;
