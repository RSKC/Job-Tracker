const db = require('./dbModel');
const metricsController = {
  getRawData: async (erq, res, next) => {
    //getting the counts of applications and phone screens and save them to res.locals and pass onto the next middleware
//{conversionRate: string,
//  appsSubmitted: string,
//  phoneScreenReceived: string,
//  offersReceived: string,
//  rejectionsReceived: string,
//  waitingOn: string
// }
    res.locals.rawData = {};
    const numAppsSubmitted = await db.query('SELECT COUNT(*) FROM Applications WHERE submitted = TRUE;').catch((err) => next(err));
    res.locals.rawData.numAppsSubmitted = numAppsSubmitted.rows[0]['count'];
  
    const numPhoneScreens = await db.query('SELECT COUNT(*) FROM Applications WHERE received_phone_screen = TRUE;');
    res.locals.rawData.numPhoneScreens = numPhoneScreens.rows[0].count;
    // console.log('numPhoneScreens', numPhoneScreens.rows[0].count);
    //const numOffers = await db.query() // will come back to this
    const numRejections = await db.query('SELECT COUNT(*) FROM Applications WHERE rejected = TRUE;');
    res.locals.rawData.numRejections = numRejections.rows[0].count;
    const numWaiting = (Number(res.locals.rawData.numAppsSubmitted) - Number(res.locals.rawData.numPhoneScreens)); //This will be numAppsSubmitted - numPhoneScreens
    // console.log('number convert', Number(res.locals.rawData.numAppsSubmitted), Number(res.locals.rawData.numPhoneScreens));
    res.locals.rawData.numWaiting = numWaiting.toString();
    const numOnSiteReceived = await db.query('SELECT COUNT(*) FROM Applications WHERE received_on_site = TRUE;');
    res.locals.rawData.numOnSiteReceived = numOnSiteReceived.rows[0].count;

    // console.log('rawData',res.locals.rawData);
    return next();
  },

  getConversionRate: async (req, res, next) => {
    //using the data in res.locals to calculate conversion rate and save to res.locals and send to next
    const {numAppsSubmitted, numPhoneScreens, numRejections, numWaiting, numOnSiteReceived} = res.locals.rawData;
    const conversionRate = Math.ceil((Number(numPhoneScreens) / Number(numAppsSubmitted)) * 100).toString();
    // create object
    const metrics = {...res.locals.rawData, conversionRate};
    res.locals.metrics = metrics;
    console.log("metrics object is ", res.locals.metrics);
    //return metrics object with raw data and conversion
    return next();
  },
};

module.exports = metricsController;
