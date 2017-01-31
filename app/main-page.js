const app = require("application");

exports.loaded = () => {
  // gets current OS time in miliseconds
  const currentTime = java.lang.System.currentTimeMillis();
   // adds 15 minutes to current time
   // NOTE. Need to convert the 15 minutes to miliseconds
   // 1 min = 60 0000 miliseconds
  const modifiedTime = currentTime + (15 * 60000);

  console.log('>>>>>>> currentTime', currentTime);
  console.log('>>>>>>> modifiedTime', modifiedTime);
  console.log(android.os.SystemClock.setCurrentTimeMillis(modifiedTime)); // investigate more on how to use the setCurrentTimeMillis method!
};
