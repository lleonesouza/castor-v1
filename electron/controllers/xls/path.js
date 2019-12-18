const storage = require("electron-json-storage");
const bluebird = require("bluebird");

var get = bluebird.promisify(storage.get);
var set = bluebird.promisify(storage.set);
var exists = bluebird.promisify(storage.has);

// path:items
// path:services
// path:clients

module.exports = {
    // Set Excel Item Path 
    setExcelPathItem: async (path) => {
      await set('path:items', path)
      return path
    },
    // Get Excel Item Path 
    getExcelPathItem: async () => {
      if(exists('path:items')){
        return await get('path:items')
      } else return null
    }
}  