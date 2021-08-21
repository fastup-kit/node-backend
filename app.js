const express = require('express')
const app = express()
const https = require('https')
const fs = require('fs');
const cors = require('cors')

const options = {
  key: fs.readFileSync('192.168.0.158-key.pem'),
  cert: fs.readFileSync('192.168.0.158.pem'),
};

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

https.createServer(options, app).listen(443)
