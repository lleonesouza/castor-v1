const {ipcMain} = require('electron')

let useRoutes = ({controllers, actionMap}, mainWindow) => {
  let routes = [];
  let routesMap 

  if(actionMap){
    routesMap = Object.entries(actionMap);
  }else{
    routesMap = Object.keys(controllers);
  }
 
  routesMap.map(map => {
    routes.push(params => {
      if (params) {
        ipcMain.handle(map[1], (event, params) => {
            const res = controllers[map[0]](params);
            return res;
        })
      }else{
        ipcMain.handle(map[1], (event) => {
            const res = controllers[map[0]](mainWindow);
            return res ;
        });
      }
    });
  });

  // console.log({controllers, actionMap})
  routes.map(route => route());
};

module.exports = useRoutes;
