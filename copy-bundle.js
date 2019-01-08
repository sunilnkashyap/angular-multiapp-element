
const copy = require('copy');

console.log('Copy UMD bundles ...');



(async function build() {
    copy('node_modules/@angular/*/bundles/*.umd.js', 'assets', {}, _ => {});
    copy('node_modules/rxjs/bundles/*.js', 'assets/rxjs', {}, _ => {});
    copy('node_modules/zone.js/dist/*.js', 'assets/zone.js', {}, _ => {});
    copy('node_modules/core-js/client/*.js', 'assets/core-js', {}, _ => {});
  })();