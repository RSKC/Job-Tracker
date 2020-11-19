CREATE TABLE Companies
(
  _id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
    CONSTRAINT unique_company_name UNIQUE(name)
);

CREATE TABLE Roles
(
  _id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
    CONSTRAINT unique_role_name UNIQUE(name)
);

CREATE TABLE Locations
(
  _id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
    CONSTRAINT unique_location_name UNIQUE(name)
);

CREATE TABLE Applications
(
  _id SERIAL PRIMARY KEY,
  company_id INT NOT NULL,
  role_id INT NOT NULL,
  location_id INT NOT NULL,
  applied_date DATE NOT NULL,
  deadline DATE NOT NULL,
  cover_letter_submitted BOOLEAN NOT NULL,
  job_url VARCHAR NOT NULL,
  submitted BOOLEAN NOT NULL,
  received_on_site BOOLEAN NOT NULL,
  received_phone_screen BOOLEAN NOT NULL,
  rejected BOOLEAN NOT NULL DEFAULT FALSE,
  FOREIGN KEY (company_id) REFERENCES companies (_id),
  FOREIGN KEY (role_id) REFERENCES roles (_id),
  FOREIGN KEY (location_id) REFERENCES locations (_id)
);

