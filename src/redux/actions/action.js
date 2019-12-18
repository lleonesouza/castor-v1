const { ipcRenderer } = window.require("electron");

export const useActions = async (action, params) => {
    if(params){
        var res = await ipcRenderer.invoke(action, params)
    }else{
        var res = await ipcRenderer.invoke(action)
    }
    return res
}

