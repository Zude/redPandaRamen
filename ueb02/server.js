'use strict';
var fhWeb = require('fhw-web');

fhWeb.start({
    port: 8080,
    magicRoutes: false,
    validator: {
        "css": false,
        "html": false
    }
});