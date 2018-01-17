import route from "./route";
import homeService from "./service";
import HomeController from "./controller";

var ngroute = 'ngRoute';
var uiroute = 'ui.router';
var resource = 'ngResource';

export default angular.module('home', [ngroute, uiroute, resource, homeService])
.config(route)
.controller('HomeController', HomeController)
    .name;
