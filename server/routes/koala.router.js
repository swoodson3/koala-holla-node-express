const express = require('express');
const koalaRouter = express.Router();
const pool = require('../modules/pool.js');

let koalas = [{
    id: 1,
    name: 'Scotty',
    gender: 'M',
    age: 4, 
    readyToTransfer: 'Yes',
    notes: 'Born in Guatemala',
  },
  {
    id: 2,
    name: 'Jean',
    gender: 'F',
    age: 5, 
    readyToTransfer: 'Yes',
    notes: 'Allergic to lots of lava', 
  },
  {
    id: 3,
    name: 'Ororo',
    gender: 'F',
    age: 7, 
    readyToTransfer: 'No',
    notes: 'Loves listening to Paula(Abdul)',
  },
  {
    id: 4,
    name: 'Logan',
    gender: 'M',
    age: 15, 
    readyToTransfer: 'No',
    notes: 'Loves the sauna',
  },
  {
    id: 5,
    name: 'Charlie',
    gender: 'M',
    age: 9, 
    readyToTransfer: 'Yes',
    notes: 'Favorite band is Nirvana'
  },
  {
    id: 6,
    name: 'Betsy',
    gender: 'F',
    age: 4, 
    readyToTransfer: 'Yes',
    notes: 'Has a pet iguana',
  }
  ];
// DB CONNECTION


// GET
koalaRouter.get('/', (req, res) => {
console.log('GET Request made for /koalas')
let queryText = 'SELECT * FROM "koalas";';
pool.query(queryText).then((result) => {
  res.send(result.rows)
}).catch((error) => {
  console.log(`Error in GET ${error}`);
  alert(`Something went wrong`);
  res.sendStatus(500);
})
});



// POST
koalaRouter.post('/', (req, res) => {
    console.log('POST Request made for /koalas')
    console.log(req.body);
    let koalaToAdd = req.body;
    let queryText = `INSERT INTO "koalas" ("name", "gender", "age", "readyToTransfer", "notes")
                    Values ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [koalaToAdd.name, koalaToAdd.gender, koalaToAdd.age, koalaToAdd.readyToTransfer, koalaToAdd.notes]).then((result) => {
      res.sendStatus(201);
    }).catch((error) => {
      console.log(`Error in POST ${error}`);
      res.sendStatus(500);
    })
});

// PUT


// DELETE
koalaRouter.delete('/:id', (req, res) => {
    console.log(req.params.id);
    const deleteIndex = Number(req.params.id);
    koalas = koalas.filter((id, index) => index !== deleteIndex)
    res.sendStatus(200);
});


module.exports = koalaRouter;