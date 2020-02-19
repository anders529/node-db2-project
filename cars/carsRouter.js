const express = require('express');
const router = express.Router();
const db = require('../data/dbConfig.js');
router.get('/', (req, res) => { db('cars')
      .then(cars => {res.json(cars)})
      .catch(err => {res.status(500).json({message:'Failed to retrieve cars'})
      });
});
router.get('/:id', (req, res) => {
    const {id} = req.params;
    db('cars').where({id}).first()
        .then(cars => {res.json(cars)})
        .catch(error => {res.status(500).json({message:'Failed to retrieve cars'})
        });
});
router.post('/', (req, res) => {
    const carData = req.body;
    db('cars').insert(carData)
        .then(ids => {
            db('cars').where({id:ids[0]})
                .then(newCarEntry => {res.status(201).json(newCarEntry)})
            })
                .catch(error => {
                    console.log('POST error', error);
                    res.status(500).json({message:'Failed to store data'});
        });
});
module.exports = router;