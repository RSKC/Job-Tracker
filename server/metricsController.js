const db = require("./dbModel");
const metricsController = {
  getRawData: async (erq, res, next) => {
    res.locals.rawData = {};
    const numAppsSubmitted = await db.query(
      "SELECT COUNT(*) FROM Applications WHERE submitted = TRUE;")
      .catch((err) => next(err));
    res.locals.rawData.numAppsSubmitted = numAppsSubmitted.rows[0].count;

    const numPhoneScreens = await db.query(
      "SELECT COUNT(*) FROM Applications WHERE received_phone_screen = TRUE;"
    ).catch((err) => next(err));
    res.locals.rawData.numPhoneScreens = numPhoneScreens.rows[0].count;

    const numRejections = await db.query(
      "SELECT COUNT(*) FROM Applications WHERE rejected = TRUE;"
    ).catch((err) => next(err));
    res.locals.rawData.numRejections = numRejections.rows[0].count;

    const numWaiting =
      Number(res.locals.rawData.numAppsSubmitted) -
      Number(res.locals.rawData.numPhoneScreens);
    res.locals.rawData.numWaiting = numWaiting.toString();

    const numOnSiteReceived = await db.query(
      "SELECT COUNT(*) FROM Applications WHERE received_on_site = TRUE;"
    ).catch((err) => next(err));
    res.locals.rawData.numOnSiteReceived = numOnSiteReceived.rows[0].count;

    return next();
  },

  getConversionRate: async (req, res, next) => {
    const { numAppsSubmitted, numPhoneScreens } = res.locals.rawData;
    const conversionRate = Math.ceil(
      (Number(numPhoneScreens) / Number(numAppsSubmitted)) * 100
    ).toString();

    const metrics = { ...res.locals.rawData, conversionRate };
    res.locals.metrics = metrics;

    return next();
  },
};

module.exports = metricsController;
