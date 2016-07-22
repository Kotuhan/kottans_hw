"use strict"

const http = require('http')

class App {
    constructor() {
        this.middlevares = []
    }

    use(middlevare) {
    	this.middlevares.push(middlevare)
    }
    
    start(port, host, callback) {

        http.createServer((req, res) => {
        	this.middlevares.forEach( (elem) => {
        		elem.call(this, req, res)
        	})
        }).listen(port)

    callback()

    }
}


module.exports = new App()