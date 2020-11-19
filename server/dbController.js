const db = require('./dbModel');

const dbController = {
  addApplication: async (req, res, next) => {

    const { companyName, role, date, deadline, location, url, coverLetter, applied, phoneScreen, onsite } = req.body;

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
    const companyId = companyIdResult.rows[0]._id;
    
    const roleIdQuery = `SELECT _id FROM Roles WHERE name = '${role}';`;
    const roleIdResult = await db.query(roleIdQuery).catch((err) => next(err))  
    const roleId = roleIdResult.rows[0]._id;

    const locationIdQuery = `SELECT _id FROM Locations WHERE name = '${location}';`;
    const locationIdResult = await db.query(locationIdQuery).catch((err) => next(err));
    const locationId = locationIdResult.rows[0]._id;

    // If coverLetter is undefined, we want to set it to false
    const coverLetterBool = coverLetter ? 'TRUE': 'FALSE';
    const appliedBool = applied ? 'TRUE': 'FALSE';
    const phoneScreenBool = phoneScreen ? 'TRUE': 'FALSE';
    const onsiteBool = onsite ? 'TRUE': 'FALSE';
    
    const newApplicationQuery = `INSERT INTO Applications (company_id, role_id, location_id, applied_date, 
      deadline, cover_letter_submitted, job_url, submitted, received_phone_screen, 
      received_on_site) VALUES (${companyId}, ${roleId}, ${locationId}, '${date}', '${deadline}', ${coverLetterBool}, 
      '${url}', ${appliedBool}, ${phoneScreenBool}, ${onsiteBool});`
    const newApplicationResult = await db.query(newApplicationQuery).catch((err) => next(err))

    res.locals.newApplication = newApplicationResult;
    return next();
    }
}


module.exports = dbController;
