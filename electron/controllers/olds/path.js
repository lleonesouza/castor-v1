const storage = require("electron-json-storage");
const bluebird = require("bluebird");
// require('../cron/try')

var get = bluebird.promisify(storage.get);
var set = bluebird.promisify(storage.set);
var exists = bluebird.promisify(storage.has);

let path = "/home/l/Desktop/lleonesouza.github.com/Exceller/electron/formula_stress_test.xlsx"

// Put or Get Path
var cacheItemPath = async (path) => {
  if(path){
    await set('path', path)
    return path
  } else {
    if(exists('path')){
      let cachePath = await get('path')
      return cachePath
    } else return null
  }
}



// module.exports = {
//   // Set Excel Item Path 
//   setExcelPathItem: async (path) => {
//     await set('path', path)
//     return path
//   },
//   // Get Excel Item Path 
//   getExcelPathItem: async () => {
//     if(exists('path')){
//       let cachePath = await get('path')
//       return cachePath
//     } else return null
//   }



// }


// Set Excel Clients Path 

// Get Excel Clients Path 



module.exports = { cacheItemPath };
