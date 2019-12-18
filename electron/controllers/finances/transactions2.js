const storage = require("electron-json-storage");
const bluebird = require("bluebird");

var getBlue = bluebird.promisify(storage.get);
var set = bluebird.promisify(storage.set);
var exists = bluebird.promisify(storage.has);

let get = async (key, value) => {
    if(exists(key)){
        return await getBlue(key, value)
    } else return null
}

let writeTransaction = async (sells) => {
    let array = []
    if(exists('sell')){
        let oldSell = await get('sell')
      } else {
        await set('sell', sell)
        array = [...await get('sell')]
        return array
      }
    array = [...oldSell, ...sell]
    return array
}

let getTransaction = async () => {
    if(exists('sell')){
        return await get('sell')
      } else {
        return false
      }
}


let date = new Date()
let day = date.getUTCDate();
let mounth = date.getUTCMonth()
let year = date.getUTCFullYear();
let d = `${day}/${mounth}/${year}`

console.log(d)


let month = [{
  transactions: '',
  transactionsAvarage: '',
  bestSellers: '',
  bestDays: '',
  total: '',
}]



let transactionAvarageDay = (day) => {
  return {
    ...day,
    transactionAvarage = day.total / day.transaction.lenght
  }
}

let transactionAvarageMonth = (month) => {
  return {
    ...month,
    transactionsAvarage = month.total / month.transactions.lenght
  }
}



let bestDays = (month) => {
  let x = 0
  let topFive = []
  month.map((day) => {
    if(x < day.total){
        topFive['first'] = day
        topFive['second'] = topFive['first']
        topFive['third'] =  topFive['second']
        topFive['fourth'] = topFive['third']
        topFive['fifith'] = topFive['fourth']
    }
  })
  return topFive
}

let bestSellers = month => {
  let count = {};
  month.map(({ transaction }) => {
    transaction.items.map(({ name, quantity }) => {
      if(count[name]){
        count[name] = count[name] + quantity
      }else{
        count[name] = quantity;
      }
    });
  });
  let sorted = count.sort((a,b) => {return b - a})
  console.log(sorted)
};

let transaction = [
  {
    id: "",
    time: "date",
    items: [],
    seller: "",
    paymentMethod: {
      type: "",
      value: ""
    },
    disconunt: "",
    change: ""
  }
];

let pushTransaction = (transaction) => {

}

let pushDay = () => {

}


let paymentMethod = {
    type: '',
    value: '',
}



let day = [...transaction]

let month = [...day]

let year = [...month]

let decade = [...year]