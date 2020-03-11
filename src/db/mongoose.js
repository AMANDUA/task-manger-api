const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/task-manager-api-timestamp`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
