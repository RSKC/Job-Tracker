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
  received_phone_screen BOOLEAN NOT NULL,
  rejected BOOLEAN NOT NULL,
  FOREIGN KEY (company_id) REFERENCES companies (_id),
  FOREIGN KEY (role_id) REFERENCES roles (_id),
  FOREIGN KEY (location_id) REFERENCES locations (_id)
);


CREATE TABLE Companies
(
  _id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL 
  CONSTRAINT unique_name UNIQUE(name)
);

CREATE TABLE Roles
(
  _id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
  CONSTRAINT unique_name UNIQUE(name)
);

CREATE TABLE Locations
(
  _id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
  CONSTRAINT unique_name UNIQUE(name)
);

-- --Ced's:
-- INSERT INTO Applications (company_id, role_id, location_id, applied_date, deadline, cover_letter_submitted, job_url, submitted, received_phone_screen, received_on_site)
-- VALUES (1, 1, 1, '12/1/2020', '12/15/2020', TRUE, 'http://cedriciscool.com/itstrue', TRUE, FALSE, FALSE);

-- -- Shreshth's:
-- INSERT INTO Applications (company_id, role_id, location_id, applied_date, deadline, cover_letter_submitted, job_url, submitted, received_phone_screen, received_on_site)
-- VALUES (1, 1, 1, '12/1/2020', '12/15/2020', TRUE, 'http://www.google.com/CEO', TRUE, FALSE, FALSE);

-- -- Richie
INSERT INTO Applications (company_id, role_id, location_id, applied_date, deadline, cover_letter_submitted, job_url, submitted, received_phone_screen, received_on_site)
VALUES (1, 1, 1, '3/5/2020', '10/3/2014', TRUE, 'hi.com', TRUE, FALSE, FALSE);

--   _id SERIAL PRIMARY KEY,
--   company_id INT NOT NULL,
--   role_id INT NOT NULL,
--   location_id INT NOT NULL,
--   applied_date DATE NOT NULL,
--   deadline DATE NOT NULL,
--   cover_letter_submitted BOOLEAN NOT NULL,
--   job_url VARCHAR NOT NULL,
--   submitted BOOLEAN NOT NULL,
--   received_phone_screen BOOLEAN NOT NULL,
--   received_on_site BOOLEAN NOT NULL,
--   FOREIGN KEY (company_id) REFERENCES companies (_id),
--   FOREIGN KEY (role_id) REFERENCES roles (_id),
--   FOREIGN KEY (location_id) REFERENCES locations (_id)
