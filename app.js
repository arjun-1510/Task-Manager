const connectDB = require('./db/connect');
const express = require('express')
const app = express();
const tasks = require('./routes/task')
require('dotenv').config()


// middleware
app.use(express.static('./public'))
app.use(express.json())

// Routes



app.use('/api/v1/tasks', tasks)

const port = 5000;


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is port listening Port ${port}`))
    } catch (err) {
        console.log(err)
    }
}

start()