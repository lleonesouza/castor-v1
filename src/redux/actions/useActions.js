const { ipcRenderer } = window.require("electron");
import { wrapPromise  } from '../wrapPromise'

export default (action, params) => {
    if(params){
        var res = wrapPromise(ipcRenderer.invoke(action, params)).read
    }else{
        var res = wrapPromise(ipcRenderer.invoke(action)).read
    }
    return res
}
