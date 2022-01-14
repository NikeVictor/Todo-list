const express = require('express')
const routers = express.Router()

const {
  getAllTasks,
  createTask,
} = require('../controller/Task')

routers.route('/allTasks').get(getAllTasks);
routers.route('/postTask').post(createTask);


module.exports = routers