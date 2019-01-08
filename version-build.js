var fs = require('fs');

fs.rename('./dist/cliaprtElement/main.js', './dist/cliaprtElement/clipart-element-v.js', function(err) {
    if ( err ) console.log('ERROR: ' + err);
});
