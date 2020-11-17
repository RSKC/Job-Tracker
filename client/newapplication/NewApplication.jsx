import React from 'react';

import './newapplication.scss';

const NewApplication = () => {
  return (
    <div>
      <form id="application-form" action="/new-application-form" method="POST">
        <label for="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          placeholder="Company name..."
        />
        <br />
        <label for="role">Role for this job application</label>
        <input
          type="text"
          id="role"
          name="role"
          placeholder="Name of the role..."
        />
        <br />
        <label for="date">Application Date</label>
        <input
          type="text"
          id="date"
          name="date"
          placeholder="Application date..."
        />
        <br />
        <label for="deadline">Application Deadline</label>
        <input
          type="text"
          id="deadline"
          name="deadline"
          placeholder="Application deadline..."
        />
        <br />
        <label for="location">Job location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Job location..."
        />
        <br />
        <label for="url">Job application URL</label>
        <input
          type="text"
          id="url"
          name="url"
          placeholder="Application URL..."
        />
        <br />
        <label for="coverLetter" className="checkbox">
          Have you submitted your cover letter for this job
        </label>
        <input type="checkbox" id="applied" name="coverLetter" value="true" />
        <br />
        <label for="applied" className="checkbox">
          Have you submitted your application for this job
        </label>
        <input type="checkbox" id="applied" name="applied" value="true" />
        <br />
        <label for="phoneScreen" className="checkbox">
          Have you received phone screen for this job application?
        </label>
        <input
          type="checkbox"
          id="phoneScreen"
          name="phoneScreen"
          value="true"
        />
        <br />
        <label for="onsite" className="checkbox">
          Have you received onsite interview for this job application?
        </label>
        <input type="checkbox" id="onsite" name="onsite" value="true" />
        <br />
        <input type="submit" id="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewApplication;
