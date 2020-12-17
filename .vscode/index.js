// make some variable and assign value
let http = require('http')
let finalhandler = require('finalhandler')
let router = require('router')

const router = new router()

let server = http.createServer(function(request, respone){router(request, response, finalhandler(request, response))
})

server.listen(3000, function(){
    console.log('Hi, My server already running')
}
    )


