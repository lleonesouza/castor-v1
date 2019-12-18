const CronJob = require("cron").CronJob;

  new CronJob(
    "1 * */1 */1 *",
    function() {
      console.log("You will see this message every second");
    },
    null,
    true,
    "America/Los_Angeles"
  );