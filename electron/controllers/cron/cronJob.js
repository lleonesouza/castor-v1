const CronJob = require("cron").CronJob;
const storage = require("electron-json-storage");
const bluebird = require("bluebird");
const monthDays = require('month-days');

var get = bluebird.promisify(storage.get);
var set = bluebird.promisify(storage.set);
var exists = bluebird.promisify(storage.has);


let cronBackupDay = async () => {
  let res = await get("cron");
  if (res === false) {
    return "cron already waiting next day one to update";
  } else {
    await set("cron", true);
    return await get("cron");
  }
};

let cronBackupMonth = async () => {
  let res = await get("cron");
  if (res === false) {
    return "cron already waiting next day one to update";
  } else {
    await set("cron", true);
    return await get("cron");
  }
};

let cronBakcupYear = async () => {
  let res = await get("cron");
  if (res === false) {
    return "cron already waiting next day one to update";
  } else {
    await set("cron", true);
    return await get("cron");
  }
};

let cronBackupHundredth = async () => {
  let res = await get("cron");
  if (res === false) {
    return "cron already waiting next day one to update";
  } else {
    await set("cron", true);
    return await get("cron");
  }
};

let dates = () => {
    let date = new Date();
    let day = date.getUTCDate();
    let month = date.getUTCMonth();
    let year = date.getUTCFullYear();
    let dayString = `${day}/${month}/${year}`
    let monthString = `${month}/${year}`
    return {day, month, year, dayString, monthString}
}

let checkCronStatus = async (cron) => {
  switch (cron) {
    case "day":
        if(await exists("day")){
           return await get("day")
        }else{
            await set("day", false)
            return false
        }
    case "month":
            if(await exists("month")){
                return await get("month")
             }else{
                 await set("month", false)
                 return false
             }
    case "year":
            if(await exists("year")){
                return await get("year")
             }else{
                 await set("year", false)
                 return false
             }
    default:
      break;
  }
};


// "transaction" = " transacation  "



let at30min = "30 * */1 */1 *"


let cronDay = (time) => new CronJob(
  time,
  async () => {
    var { day, dayString } = dates();
    let lastBackup = await checkCronStatus("day");
    if (lastBackup === day) {
      throw false;
    } else {
      let transaction = await get("transaction");

        await set(dayString, transaction);

        //Start two test after 1s and 2s and finish 
        setTimeout(() => {
            let test = await get(dayString)
            if(test === transaction){
                 set("day", true)
                 set("transaction", null)
                 return true 
            }else{
                setTimeout(() => {
                    let test = await get(dayString)
                    if(test === transaction){
                         set("day", true)
                         set("transaction", null)
                    }else{
                        return new Error('backup fails')
                    }
                }, 1000)
            }
        }, 1000)
    }
  },
  [],
  "Brasil/LasVegas"
);

'10/4 -> 11/5'




let transaction = [{
    id: '',
    time: 'date',
    items: [],
    seller: '',
    paymentMethod: paymentMethod,
    disconunt: '',
    change: '',
}]

let analysisDay = () => {

}


let result = {

}

getData = async (fromDate, toDate) => {
    let array
   let {fromDay, fromMonth, fromYear} = fromDate
   let {toDay, toMonth, toYear} = toDate
   if(fromMonth === toMonth){
    for(let i = fromDay; i < toDay; i++){
        array.push(await get(`${i}/${fromMonth}/${fromMonth}`))
    }
    return array
   }else{
       for(let m = fromMonth; m < toMonth; m++){
        if(m === fromMonth){
            let lastDay = monthDays({month: i, year: fromYear});
            for(let i = fromDay; i < lastDay; i++){
                array.push(await get(`${i}/${m}/${fromYear}`))
            }
        }else if(m === toMonth){
            for(let i = 0; i < toDay; i++){
                array.push(await get(`${i}/${m}/${fromYear}`))
            }
        }else{
            let lastDay = monthDays({month: i, year: fromYear})
            for(let i = 0; i < lastDay; i++){
                array.push(await get(`${i}/${m}/${fromYear}`))
            }
        }
       }     
   }
   return array  
}

normalizeData = async () => {
   let data = getData
}


let cronMonth = (time) => new CronJob(
    time,
    async () => {
        let { day, month, monthString } = dates();
      let lastBackup = await checkCronStatus('month');
      if (lastBackup === month) {
        throw false;
      } else {
        let data = getMonthData()
        await set(monthString, data);
        // Start two test after 1s and 2s and finish 
          setTimeout(() => {
              let test = await get(monthString)
              if(test === data){
                   set("day", true)
                   set("transaction", null)
                   return true 
              }else{
                  setTimeout(() => {
                      let test = await get(dayString)
                      if(test === transaction){
                           set("day", true)
                           set("transaction", null)
                      }else{
                          return new Error('backup fails')
                      }
                  }, 1000)
              }
          }, 1000)
      }
    },
    [],
    "Brasil/LasVegas"
  );

  let cronYear = (time) => new CronJob(
    time,
    async () => {
      var { day, dayString } = dates();
      let lastBackup = await checkCronStatus(type);
      if (lastBackup === day) {
        throw false;
      } else {
        let transaction = await get("transaction");
          await set(dayString, transaction);
          //Start two test after 1s and 2s and finish 
          setTimeout(() => {
              let test = await get(dayString)
              if(test === transaction){
                   set("day", true)
                   set("transaction", null)
                   return true 
              }else{
                  setTimeout(() => {
                      let test = await get(dayString)
                      if(test === transaction){
                           set("day", true)
                           set("transaction", null)
                      }else{
                          return new Error('backup fails')
                      }
                  }, 1000)
              }
          }, 1000)
      }
    },
    [],
    "Brasil/LasVegas"
  );






var newCron = (sta) => {




   new CronJob("1 */1 */1 */1 *", async () => {
    var {day, month, year} = dates()
    let res = await checkCronStatus("day")
    if (res === month){
      return null;
    } else {
      await set("cron", month);
      let backupDate = { day, month, year };
      let backup = await get("sells");
      let dataBackup = [...backupDate, ...backup];
      let d = `${month}/${year}`;
      let backup = await set(d, dataBackup);
      let msg = `backup dia ${d} completo`;
      return alert(msg);
    }
  }, [], "Brasil/LasVegas");


};
