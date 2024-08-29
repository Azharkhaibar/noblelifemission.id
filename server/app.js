const express = require('express');
const cors = require('cors');
const app = express()
const getRouter = require('./routes/router')
const PORT = 3000

app.use('/api', getRouter)
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.listen(PORT, ()=> {
    console.log(`server running on port ${PORT}`);
    
})