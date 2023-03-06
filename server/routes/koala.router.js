const express = require('express');
const koalaRouter = express.Router();

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
    res.send(koalas);
});
// POST
koalaRouter.post('/', (req, res) => {
    console.log('POST Request made for /koalas')
    console.log(req.body);
    let koalaToAdd = req.body;
    koalas.push(koalaToAdd)
    res.sendStatus(201);
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