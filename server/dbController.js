const db = require('./dbModel');

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


  //QUERY FOR INSERTING WITHOUT DUPLICATING OR ERRORING
  //  INSERT INTO Companies (NAME)
  //  VALUES('uber')
  //  ON CONFLICT ON CONSTRAINT unique_name 
  //  DO NOTHING;

    const { companyName, role, date, deadline, location, url, coverLetter, applied, phoneScreen, onsite } = req.body;
    console.log('1')
    // console.log(typeof url);

    // inserting safely
    // companies
    await db.query(`INSERT INTO Companies (name) 
    VALUES ('${companyName}') 
    ON CONFLICT ON CONSTRAINT unique_company_name 
    DO NOTHING;`).catch((err) => next(err));

    // roles
    await db.query(`INSERT INTO Roles (name) 
    VALUES ('${role}') 
    ON CONFLICT ON CONSTRAINT unique_role_name 
    DO NOTHING;`).catch((err) => next(err));


    // location
    await db.query(`INSERT INTO Locations (name)
    VALUES ('${location}')
    ON CONFLICT ON CONSTRAINT unique_location_name
    DO NOTHING;`).catch((err) => next(err));


    // selecte the IDs
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
    const coverLetterBool = coverLetter ? 'TRUE': 'FALSE';
    const appliedBool = applied ? 'TRUE': 'FALSE';
    const phoneScreenBool = phoneScreen ? 'TRUE': 'FALSE';
    const onsiteBool = onsite ? 'TRUE': 'FALSE';
    console.log('5')
    
    const newApplicationQuery = `INSERT INTO Applications (company_id, role_id, location_id, applied_date, 
      deadline, cover_letter_submitted, job_url, submitted, received_phone_screen, 
      received_on_site) VALUES (${companyId}, ${roleId}, ${locationId}, '${date}', '${deadline}', ${coverLetterBool}, 
      '${url}', ${appliedBool}, ${phoneScreenBool}, ${onsiteBool});`
    console.log('6')
    const newApplicationResult = await db.query(newApplicationQuery).catch((err) => next(err))
    console.log('7')
    console.log(newApplicationResult);
    res.locals.newApplication = newApplicationResult;
    return next();
    }
}


module.exports = dbController;
