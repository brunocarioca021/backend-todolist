const express = require('express');
const todolistController = require('./../controllers/todolist.controller');

const router = express.Router();

router.get('/', todolistController.getlistAll);
router.get('/get-by-id/:id', todolistController.getlistById);
router.post('/add', todolistController.createList);
router.put('/edit/:id', todolistController.editList);
router.delete('/delete/:id', todolistController.deleteList);


module.exports = router;