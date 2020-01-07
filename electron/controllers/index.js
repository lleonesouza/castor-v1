// BlockChain

// Wallets
// Transaction 
// Contracts
// Mushrooms Logs
// Medical Data


// Storage
const items = require('./storage/items') 
const services = require('./storage/services') 
const transactions = require ('./storage/transactions')
const employees = require('./storage/employees')
const spendings = require('./storage/spendings')
const path = require('./storage/path')

// Dialogs


// Xls
const exportXls = require('./xls/exportXls')
const importXls = require('./xls/importXls')
const updatesXls = require('./xls/updatesXls')

// Pdf
const exportPdf = require('./pdf/exportPdf')
const importPdf = require('./pdf/importPdf')
const updatesPdf = require('./pdf/updatesPdf')

module.exports = {
    // Xls
    ...updatesXls,
    ...importXls,
    ...exportXls,

    // Pdf
    ...exportPdf,
    ...importPdf,
    ...updatesPdf,

    // Electron Storage
    ...items,
    ...services,
    ...transactions,
    ...employees,
    ...spendings,
    ...path

    // Auth
    


}
