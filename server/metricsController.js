const db = require('./dbModel');
const metricsController = {
  getMetrics: async (erq, res, next) => {
    //getting the counts of applications and phone screens and save them to res.locals and pass onto the next middleware
  },

  getConversionRate: async (req, res, next) => {
    //using the data in res.locals to calculate conversion rate and save to res.locals and send to next
  },
};

module.exports = metricsController;
