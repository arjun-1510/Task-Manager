require('./db/connect');
const express = require('express')
const app = express();
const tasks = require('./routes/task')


// middleware

app.use(express.json())

// Routes

app.get('/hello',(req, res) => {
    res.send('Task Manager')
})

app.use('/api/v1/tasks', tasks)

const port = 5000;

app.listen(port , console.log(`Server listening on Port ${port}....`))