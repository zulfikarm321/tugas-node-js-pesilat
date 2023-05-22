const express = require('express');
const router = express.Router();
const biodata = require('../controllers/biodata.controller');

router.post('/', (req, res) => {
  biodata.create(req, res);
});

router.get('/', (req, res) => {
  biodata.read(req, res);
});

router.put('/:id', (req, res) => {
  biodata.update(req, res);
});

router.delete('/:id', (req, res) => {
  biodata.delete(req, res);
});

module.exports = router;
