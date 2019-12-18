const storage = require("electron-json-storage");
const bluebird = require("bluebird");

var get = bluebird.promisify(storage.get);
var set = bluebird.promisify(storage.set);
var exists = bluebird.promisify(storage.has);

let consolelog = () => {
    console.log('log');
    return 'r'
}

let me = {
    test: 'sss',
    m: consolelog()
}

set('test', me)
get('test').then(res => console.log(res))
