
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