const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up and listening in port ' + port)
})


/* const bcrypt = require('bcryptjs')

const name = 'Aman Dua'

const hashing = async () => {
    const encrytedName = await bcrypt.hash(name, 7)
    console.log(encrytedName)
    
const isMatch = await bcrypt.compare('Aman Dua', encrytedName)
console.log(isMatch)
}
hashing() */

/* const jwt = require('jsonwebtoken')

const myFunc = async () => {
    const token = jwt.sign({id: 'random'}, 'thisissignature')
    console.log(token)
    const isMatch = jwt.verify(token, 'thisissignature')
    console.log(isMatch)
}

myFunc() */

/* const Task = require('./models/task')
const User = require('./models/user')

const func = async () => {
    const task = await Task.findById('5e5bbcc800687423c48778cd')
    await task.populate('owner').execPopulate()
    console.log(task.owner)
    
    const user = await User.findById('5e5bbcb300687423c48778cb')
    await user.populate('task').execPopulate()
    console.log(user.task)
}

func() */


/* const multer = require('multer')
const upload = multer({
    dest: 'images'
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
}) */