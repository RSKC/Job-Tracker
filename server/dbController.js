const db = require('./dbModel')

const dbController = {
  addApplication: async (req, res, next) => {
    
      /*
      {
        companyName: 'Balh',
        role: 'runner',
        date: '12-12-12',
        deadline: '08-26-99',
        location: 'New York, NY',
        url: 'https://miro.com/app/board/o9J_leodH58=/',
        coverLetter: 'true',
        applied: 'true',
        phoneScreen: 'true',
        onsite: 'true'
      }


    -- INSERT INTO Applications (company_id, role_id, location_id, applied_date, deadline, cover_letter_submitted, job_url, submitted, received_phone_screen, received_on_site)
    -- VALUES (1, 1, 1, '12/1/2020', '12/15/2020', TRUE, 'http://uber.com', TRUE, FALSE, FALSE);
    */
    const { companyName, role, date, deadline, location, url, coverLetter, applied, phoneScreen, onsite } = req.body;
    console.log('1')
    console.log(typeof url);

    const companyIdQuery = `SELECT _id FROM Companies WHERE name = '${companyName}';`;
    const companyIdResult = await db.query(companyIdQuery).catch((err) => next(err))
    const companyId = companyIdResult.rows[0]['_id'];
    console.log('2')
    // console.log(`companyId: ${companyId}`);
    
    const roleIdQuery = `SELECT _id FROM Roles WHERE name = '${role}';`;
    const roleIdResult = await db.query(roleIdQuery).catch((err) => next(err))
    const roleId = roleIdResult.rows[0]['_id'];
    console.log('3')
    // console.log(`roleId: ${roleId}`);

    const locationIdQuery = `SELECT _id FROM Locations WHERE name = '${location}';`;
    const locationIdResult = await db.query(locationIdQuery).catch((err) => next(err));
    const locationId = locationIdResult.rows[0]['_id'];
    // console.log(`locationId: ${locationId}`);
    console.log('4')

    // Our frontend will send an array of 2 values when a checkbox is checked. If the length
    // of the property is > 1 (meaning at least 2 values are there), then we know the box was 
    // checked. Otherwise, the box was not checked.
    const coverLetterBool = Boolean(coverLetter);
    const appliedBool = Boolean(applied);
    const phoneScreenBool = Boolean(phoneScreen);
    const onsiteBool = Boolean(onsite);
    console.log('5')
    
    const newApplicationQuery = `INSERT INTO Applications (company_id, role_id, location_id, applied_date, 
      deadline, cover_letter_submitted, job_url, submitted, received_phone_screen, 
      received_on_site) VALUES (${companyId}, ${roleId}, ${locationId}, ${date}, ${deadline}, ${coverLetterBool}, 
      ${url}, ${appliedBool}, ${phoneScreenBool}, ${onsiteBool});`
    const newApplicationResult = await db.query(newApplicationQuery).catch((err) => next(err))
    // const locationId = locationIdResult.rows[0]['_id'];
    console.log('6')
    
    return next();
    }
}


module.exports = dbController;