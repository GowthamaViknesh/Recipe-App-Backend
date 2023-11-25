const express = require('express');
const {
  getAllRecepies,
  CreateRecepie,
  updateRecepie,
} = require('../Controller/RecepieController');

const router = express.Router();

router.route('/allrecpies').get(getAllRecepies);
router.route('/createRecpie').post(CreateRecepie);
router.route('/updateRec/:id').put(updateRecepie);

module.exports = router;
