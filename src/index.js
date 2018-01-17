// Load Files
function requireAll( r ) {
    r.keys().forEach( r );
}
requireAll( require.context( './webapp/client/', true, /\.*/ ) ); // Load Angular Apps
requireAll( require.context( './webapp/assets/', true, /\.*/ ) ); // Load Assets

// Load Libraries Below
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js';
import '../node_modules/angular/angular.min.js';
import '../node_modules/angular-resource/angular-resource.min.js';
import '../node_modules/@uirouter/angularjs/release/angular-ui-router.min.js';
import '../node_modules/angular-local-storage/dist/angular-local-storage.min.js';
import '../node_modules/angular-route/angular-route.js';
import '../node_modules/angular-cookies/angular-cookies.min.js';
import '../node_modules/angular-media-queries/match-media.js';
import '../node_modules/angularjs-datepicker/src/js/angular-datepicker.js';
import '../node_modules/lodash/lodash.min.js';
import '../node_modules/angucomplete-alt/dist/angucomplete-alt.min.js';
import '../node_modules/angular-datetime-input/dist/datetime.js';