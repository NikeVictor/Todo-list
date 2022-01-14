const express = require('express')
const task = require('./routes/Task')
require('dotenv').config()
const connectDB = require('./db/conntect')

app = express();
app.use(express.json())

app.use(task);

const port = 3000;

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI)
      app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
      console.log(error)
    }
  }

start();