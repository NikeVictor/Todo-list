const Task = require('../model/Task')

const getAllTasks =  async (req, res) => {
    try {
        const tasks =  await Task.find({})
        if(!tasks){
            res.json({message: "No tasks found"})
        }
        else{
            res.status(200).send(tasks)
        }
    } catch (error) {
        res.status(401).send(error)
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
    res.status(201).json({ task })
    } catch (error) {
        res.status(400).send(error)
    }
  }

module.exports = {
    getAllTasks,
    createTask
}