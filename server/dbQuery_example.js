const db = require('../models/starWarsModels');

const starWarsController = {};

starWarsController.getCharacters = async (req, res, next) => {
  const queryCharacters = `
    SELECT s.name as species, pl.name as homeworld, p.* 
    FROM people p
    INNER JOIN species s on p.species_id = s._id
    INNER JOIN planets pl on p.homeworld_id = pl._id;
  `;

  await db.query(queryCharacters)
    .then(async dataCharacters => {
      const characters = dataCharacters.rows

      for (let i = 0; i < characters.length; i += 1) {
        const character = characters[i]
        const id = character._id

        const queryFilms = {
          text: `
            SELECT *
            FROM films f
            JOIN people_in_films pif on f._id = pif.film_id
            WHERE person_id = $1;
          `,
       b   values: [id]
        }

        /**
         * 1. [ ] (BONUS) Getting a list of films a character has been in will require using the join table of **people_in_films**. You will have to run another query for each character to generate an array of films that each character has been in. Remember, you'll need an object with the _title_ and the _\_id_ (as _id_ without the underscore) for each film in the array. Since you have to make a new query for each character, this will take quite some time to generate the response. Feel free to skip this one for now and come back to this later if you can.
         */

        const data = await db.query(queryFilms)
        const films = data.rows.map(film => ({ ...film, id: film.film_id }));
        character.films = films;
      }

      res.locals.characters = characters
      next()
    }).catch(error => next({
      log: `starWarsController.getCharacters; ERROR: ${error}`,
      message: {
        err: `${error}`,
      },
    }))
};

starWarsController.getSpecies = (req, res, next) => {
  // write code here
  const { id } = req.query;
  const query = {
    text: `SELECT s._id as species_id, s.name, classification, average_height, average_lifespan, language, homeworld_id, p.name as homeworld 
    FROM species s
    JOIN planets p on s.homeworld_id = p._id
    WHERE s._id = $1;`,
    values: [id],
  };

  db.query(query)
    .then((data) => {
      res.locals.species = data.rows[0] || {};
      next();
    })
    .catch((error) => {
      next({
        log: `starWarsController.getSpecies; ERROR: ${error}`,
        message: {
          err: `${error}`,
        },
      });
    });
};

starWarsController.getHomeworld = (req, res, next) => {
  // write code here
  const { id } = req.query;
  const query = {
    text: `SELECT name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population
          FROM planets
          WHERE _id = $1;`,
    values: [id],
  };

  db.query(query)
    .then((data) => {
      res.locals.homeworld = data.rows[0];
      next();
    })
    .catch((error) =>
      next({
        log: `starWarsController.getHomeworld; ERROR: ${error}`,
        message: {
          err: `${error}`,
        },
      })
    );
};

starWarsController.getFilm = (req, res, next) => {
  const { id } = req.query;

  const query = {
    text: `
      SELECT title, episode_id, director, producer, release_date    
      FROM films
      WHERE _id = $1;
    `,
    values: [id]
  }

  db.query(query)
    .then(data => {
      const film = data.rows[0];
      res.locals.film = film;
      next();
    })
    .catch(error => next({
      log: `starWarsController.getFilm; ERROR: ${error}`,
      message: {
        err: `${error}`,
      },
    }))
};

starWarsController.addCharacter = (req, res, next) => {
  // write code here
  const {
    name,
    gender,
    species_id,
    birth_year,
    eye_color,
    skin_color,
    hair_color,
    mass,
    height,
    homeworld_id
  } = req.body;


  const query = {
    text: `INSERT INTO PEOPLE (name, gender, species_id, birth_year, eye_color, skin_color, hair_color, mass, height, homeworld_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
    values: [
      name,
      gender,
      species_id,
      birth_year,
      eye_color,
      skin_color,
      hair_color,
      mass,
      height,
      homeworld_id
    ],
  };

  db.query(query)
    .then((data) => {
      next();
    })
    .catch((error) =>
      next({
        log: `starWarsController.addCharacter; ERROR: ${error}`,
        message: {
          err: `${error}`,
        },
      })
    );
};

module.exports = starWarsController;
