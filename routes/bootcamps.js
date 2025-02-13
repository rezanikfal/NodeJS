const express = require('express');
const router = express.Router();
const {
    createBootcamps,
    deleteBootcamps,
    updateBootcamps,
    getBootcamps,
    getBootcamp
} = require('../controllers/bootcamps');

router
    .route('/')
    .get(getBootcamps)
    .post(createBootcamps);

router
    .route('/:id')
    .get(getBootcamp)
    .put(updateBootcamps)
    .delete(deleteBootcamps);

module.exports = router;