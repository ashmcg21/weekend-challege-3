const express = require('express');
const tasksRouter = express.Router();
const pg = require('pg');
const pool = require('../modules/pool.js');


router.get('/', (req, res) => {
    console.log('In /tasks GET');
  
    let queryText = `SELECT * FROM "tasks";`;
    pool
      .query(queryText)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(`error in GET /tasks ${error}`);
        res.sendStatus(500);
      });
  });
  
  router.post('/', (req, res) => {
    console.log(`In /tasks POST with`, req.body);
  
    const tasksToAdd = req.body;
    const queryText = `INSERT INTO "tasks" ("notes")
                          VALUES ($1);`;
    pool
      .query(queryText, [
        tasksToAdd.task,
      ])
      .then((responseFromDatabase) => {
        console.log(responseFromDatabase);
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log(`Error in POST /tasks ${error}`);
        res.sendStatus(500);
      });
  });
  
  module.exports = tasksRouter;
  