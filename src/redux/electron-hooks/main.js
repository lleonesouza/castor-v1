import React, {createContext} from 'react'


let controllers = {
  "get:employees": () => {},
  "get:transaction": () => {}
};

let useRoutes = (controllers) => {
  let routes = {};
  let routesName = Object.keys(controllers);

  routesName.map(name => {
    Object.defineProperty(routes, name, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: params => {
        if (params) {
          ipcMain.handle(name, async (event, params) => {
            if (params) {
              const res = controllers[name](params);
              return { res, event };
            } else {
              const res = controllers[name](params);
              return { res, event };
            }
          });
        }
      }
    });
  });

  routes.map(route => route());


};


let model = {
    "get:employees": (state, res) => { 
        // ...action
        return {...state, user: res.user}
    },
    "get:transaction": (state, res) => { 
        // ...action
        return {...state, user: res.user}
    }
  };


let useStore = (model) => {
    let wrapPromise = (promise) => {
        let status = 'pending';
        let result = '';
        let suspender = promise.then(r => {
            status = 'success'
            result = r
        }, e => {
            status = 'error'
            result = e
        })
    
        return {
            read(){
                if(status === 'pending'){
                    throw suspender
                } else if (status === 'error'){
                    throw result
                }
                return result
            }
        }
    }

    let reducer = (state, action) => {
    if(params){
        var res = wrapPromise(await ipcRenderer.invoke(action.type, params))
        dispatchActions
    }else{
        var res = wrapPromise(await ipcRenderer.invoke(action.type))
    }
    let newState = model[action.type](state, res)
        return newState
    }

    let [state, dispatch] = useReducer(reducer, {});

    let useAction = (type, data) => {
        dispatch({type: type, data})
    }

    return {state, useAction}
}

