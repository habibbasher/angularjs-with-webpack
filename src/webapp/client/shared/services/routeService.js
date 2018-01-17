//TODO: refactor route service
class RouteService {
    constructor( $state, localStorageService, CONST, $location) {
        // Injector
        /*@ngInject*/
        this.storage = localStorageService;
        this.state = $state;
        this.constants = CONST;

    }

    go( state ) {
        this.state.go( state );
    }

    restrictUrl( path ) {
        let route = {
            allow: true,
            desiredUrl: null
        };
        let openPaths = [ '/home', '/login', '/forget-password' ];
        console.log("route");

        switch ( true ) {

          case true:
            route.allow = true;
            route.desiredUrl = '/home';
            break;
            // case openPaths.indexOf( path ) >= 0:
            //     if ( this.auth.isAuthenticated() ) {
            //         route.allow = false;
            //         route.desiredUrl = '/location';
            //     }
            //     break;
            // case path.startsWith( '/password-reset-confirm' ):
            //     if ( this.auth.isAuthenticated() ) {
            //         route.allow = false;
            //         route.desiredUrl = '/location';
            //     }
            //     break;
            //
            // case path == '/confirmation':
            //     if ( !this.auth.isAuthenticated() ) {
            //         route.allow = false;
            //         route.desiredUrl = '/login';
            //     }
            //     break;
            // case !this.auth.isAuthenticated():
            //     route.allow = false;
            //     route.desiredUrl = '/login';
            //     break;
            //
            // case path == '/customer-registration':
            //     break;


        }
        return route;

    }
}

export default angular.module( 'services.route', [] )
    .service( 'routeService', RouteService )
    .name;
