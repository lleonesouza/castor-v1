const Store = require ("electron-store")
const employees = require ('./employees')
const products = require ('./products')
const spedings = require ('./spendings')
const transactions = require ('./transactions')
const paths = require('./paths')

const schema = {
    ...employees,
    ...products,
    ...spedings,
    ...transactions,
    ...paths
}

const store = new Store({ schema });
const db = store;

module.exports = db