const Store = require ("electron-store")
const employees = require ('./employees')
const products = require ('./products')
const spedings = require ('./spendings')
const transactions = require ('./transactions')

const schema = {
    ...employees,
    ...products,
    ...spedings,
    ...transactions
}

const store = new Store({ schema });
const db = store;

module.exports = db