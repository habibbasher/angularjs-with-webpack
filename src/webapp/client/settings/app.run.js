running.$inject = [ '$rootScope', '$location', '$state', 'routeService' ];

export default function running( $rootScope, $location, $state, routeService ) {
    $rootScope.$on( '$locationChangeStart', ( event ) => {
        // redirect to login page if not logged in and trying to access a restricted page
        let path = $location.path();
        console.log('This is from app run file'+path);
        let route = routeService.restrictUrl( path );

        if ( route.allow ) {
            $location.path( route.desiredUrl );
        }

        // console.log(route);
        // if ( !route.allow ) {
        //     $location.path( route.desiredUrl );
        // }
    } );
}
