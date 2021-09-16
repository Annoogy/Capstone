


var MeaningCloud = require('meaning-cloud');
var Geonames = require('geonames')
const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors');
const fetch = require('node-fetch')
const app = express()
const baseURL = 'http://api.geonames.org/postalCodeSearchJSON?'
const textapi = process.env.userName

app.use(express.static(__dirname + '/public/views'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public/views'))
console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/trip', function (req, res) {
    res.send(mockAPIResponse)
})
app.post('/apitrip', async function(req, res) {
    
    const urltoCheck = req.body.trip;
    const apiGeo = `${baseURL}key=${textapi}&url=${urltoCheck}&lang=en`

    const response = await fetch(apiGeo)
    const analysis = await response.json()
    
    
    res.send(analysis)
  
})