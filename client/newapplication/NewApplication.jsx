import React from 'react';

import './newapplication.scss';

const NewApplication = () => {
  return (
    <div className="new-application-background">
      <div className="form-div">
        <form
          id="application-form"
          action="/new-application-form"
          method="POST"
        >
          <h3 className="heading">Add a new application</h3>
          <label htmlFor="companyName">Company Name</label>
          <br />
          <input type="text" id="companyName" name="companyName" required />
          <br />
          <label htmlFor="role">Role for this job application</label>
          <br />
          <input type="text" id="role" name="role" required />
          <br />
          <label htmlFor="date">Application Date</label>
          <br />
          <input type="text" id="date" name="date" required />
          <br />
          <label htmlFor="deadline">Application Deadline</label>
          <br />
          <input type="text" id="deadline" name="deadline" required />
          <br />
          <label htmlFor="location">Job location</label>
          <br />
          <input type="text" id="location" name="location" required />
          <br />
          <label htmlFor="url">Job application URL</label>
          <br />
          <input type="text" id="url" name="url" />
          <br />
          <label htmlFor="coverLetter" className="container">
            Have you submitted your cover letter for this job?
            <input
              type="checkbox"
              id="coverLetter"
              name="coverLetter"
              o
              value="true"
              className="checkbox"
            />
            <span className="checkmark"></span>
          </label>
          <br />
          <label htmlFor="applied" className="container">
            Have you submitted your application for this job?
            <input
              type="checkbox"
              id="applied"
              name="applied"
              value="true"
              className="checkbox"
            />
            <span className="checkmark"></span>
          </label>
          <br />
          <label htmlFor="phoneScreen" className="container">
            Have you received phone screen for this job application?
            <input
              type="checkbox"
              id="phoneScreen"
              name="phoneScreen"
              value="true"
              className="checkbox"
            />
            <span className="checkmark"></span>
          </label>
          <br />
          <label htmlFor="onsite" className="container">
            Have you received onsite interview for this job application?
            <input
              type="checkbox"
              id="onsite"
              name="onsite"
              value="true"
              className="checkbox"
            />
            <span className="checkmark"></span>
          </label>
          <br />
          <div className="submit-div">
            <input type="submit" id="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewApplication;
