import routing from "./settings/app.config";
import running from "./settings/app.run";
import constants from "./settings/app.const";
import routeService from "./shared/services/routeService";
import home from "./components/home";
// import authService from "./shared/services/authentication";
// import resetService from "./shared/services/reset";
// import sessionService from "./shared/services/session";
// import basicClientService from "./shared/services/basicClient";
// import loader from "./shared/directives/loader";
// import login from "./components/auth/login";
// import forgetPassword from "./components/auth/password_reset";
// import passwordReset from "./components/auth/password_reset_confirm";
// import inputSpinner from "./shared/directives/inputSpinner";

// Services

// Directives

const uirouter = 'ui.router';
const ngroute = 'ngRoute';
const resource = 'ngResource';
const storage = 'LocalStorageModule';
const cookie = 'ngCookies';
const matchmedia = 'matchMedia';
const datePicker = '720kb.datepicker';
const autoComplete = 'angucomplete-alt';
const dateTime = 'datetime';

console.log("app file");

/*
 - Libraries
 - Components
 - Services
 - Directives
 */


angular.module( 'userRegApp', [ uirouter, ngroute, resource, storage, cookie, matchmedia, datePicker, dateTime, // Library
    home, routeService // login, //forgetPassword, passwordReset,
    // Components
    // authService, routeService, // resetService, sessionService, basicClientService, // Services
    // loader, inputSpinner // Directives
] )
    .config( routing )
    .constant( constants )
    .run( running );
