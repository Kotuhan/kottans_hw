"use strict"

const port = '3001'
const host = 'localhost1'

let app = require('./app.js')

app.use(require('./function1.js'))
app.use(require('./function2.js'))

app.start(host, port, () => console.log("started on " + port))