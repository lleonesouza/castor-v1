const { ipcRenderer } = window.require("electron");

// Exports
const writeExcel = async (filePath) => {
    var res = await ipcRenderer.invoke("excel:items", filePath)
    return res
}

const writeJson = async (filePath) => {
    var res = await ipcRenderer.invoke("excel:items", filePath)
    return res
}

// Excel Routes
const getExcelItems = async (filePath) => {
    var res = await ipcRenderer.invoke("excel:items")
    return res
}

const updateStock = async (filePath) => {
    var res = await ipcRenderer.invoke("excel:newStock", filePath)
    return res
}

const pathItems = async (filePath) => {
    var res = await ipcRenderer.invoke("path:items", filePath)
    return res
}

// Transactions Routes
const postTransaction = async (transaction) => {
    var res = await ipcRenderer.invoke("post:transaction", transaction)
    return res
}

const getTransactions = async (filePath) => {
    var res = await ipcRenderer.invoke("get:transaction")
    return res
}

const getMonth = async (filePath) => {
    var res = await ipcRenderer.invoke("get:month", filePath)
    return res
}

const getYear = async (filePath) => {
    var res = await ipcRenderer.invoke("get:year", filePath)
    return res
}

const pathTransaction = async (filePath) => {
    var res = await ipcRenderer.invoke("path:items", filePath)
    return res
}

export {writeExcel, getMonth, getYear, writeJson, getExcelItems, updateStock, pathItems, postTransaction, getTransactions, pathTransaction }