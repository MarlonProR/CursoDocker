
let times=0;
const syncDB=() => {
 times++;
    console.log('running a task every minute: ', times);
return times;
  }

  module.exports={
    syncDB
  }