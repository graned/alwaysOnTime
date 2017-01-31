const app = require("application");
const utils = require("utils/utils");
var permissions = require( "nativescript-permissions" );

exports.loaded = () => {
  // gets current OS time in miliseconds
  const currentTime = java.lang.System.currentTimeMillis();
   // adds 15 minutes to current time
   // NOTE. Need to convert the 15 minutes to miliseconds
   // 1 min = 60 0000 miliseconds
  const modifiedTime = currentTime + (15 * 60000);


  // TODO. Extract logic to disable the clock automatic time
  // RETRIEVES VALUE OF AUTO_TIME FROM DEVICE (1=yes, 0=no)
  const settings = android.provider.Settings.Global;
  const contentResolver = app.android.context.getContentResolver();
  const isDeviceAutoTimeEnabled = settings.getInt(contentResolver, settings.AUTO_TIME);
  if (isDeviceAutoTimeEnabled) {
    console.log('Auto time is enabled, I will disable it!');
    // const r = settings.putInt(contentResolver, settings.AUTO_TIME, 0);
    // console.log('able to change automatic timeing? ', r);
  } else {
    console.log('Auto time is disabled!');
  }



// Calendar c = Calendar.getInstance();
// c.set(2010, 1, 1, 12, 00, 00);
// AlarmManager am = (AlarmManager) this.getSystemService(Context.ALARM_SERVICE);
// am.setTime(c.getTimeInMillis());

  console.log('>>>>>>> currentTime', currentTime);
  console.log('>>>>>>> modifiedTime', modifiedTime);

  // CANNOT SET DEVICE TIME! :(, need to find a workaround
  const am = utils.ad.getApplicationContext().getSystemService(android.content.Context.ALARM_SERVICE);
  am.setTime(modifiedTime);

  // console.log(android.os.SystemClock.setCurrentTimeMillis(modifiedTime)); // investigate more on how to use the setCurrentTimeMillis method!
};
