const express = require('express');

const { rootController } = require('../controllers');
const userRouter = require('./user'); 

const router = express.Router();


router.get('/', rootController);
router.get('/users', userRouter);
router.get('/users/:id', userRouter);
router.post('/users', userRouter);
router.put('/users/:id', userRouter);
router.delete('/users/:id', userRouter)

module.exports = router;