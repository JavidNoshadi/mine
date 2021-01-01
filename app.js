const express = require('express')
const next = require('next')
var reCAPTCHA = require('recaptcha2');

const port = parseInt(process.env.PORT, 10) || 4000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const bodyParser = require('body-parser');

app.prepare().then(() => {
  const server = express()
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())
 
  var recaptcha = new reCAPTCHA({
    siteKey: '6LeijBwaAAAAACA_ErnECQLBwTc9umopeJwZ-K3l', // retrieved during setup
    secretKey: '6LeijBwaAAAAALbyI3D3C20kCjgw8zZ1uIrJDIuT' , // retrieved during setup
    ssl: false 
  })

  server.post('/signup',(req,res)=>{
     function submitForm(req, res) {
    recaptcha.validateRequest(req)
      .then(function(){
        // validated and secure
        res.json({formSubmit:true})
      })
      .catch(function(errorCodes){
        // invalid
        res.json({
          formSubmit: false,
          errors: recaptcha.translateErrors(errorCodes) // translate error codes to human readable text
        });
      });
  }
  })
 

  server.get('/login', (req, res) => {
    return app.render(req, res, '/login', req.query)
  })

server.post('/login',(req,res)=>{
    console.log(req.body)
})

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
