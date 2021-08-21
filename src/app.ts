import express from 'express'
import https from 'https'
import fs from 'fs'
import cors from 'cors'

const app = express()

const options = {
  key: fs.readFileSync('192.168.0.158-key.pem'),
  cert: fs.readFileSync('192.168.0.158.pem'),
};

app.use(cors());

app.get('/', (req, res) => {
  console.log('-- request --');
  console.trace();
  res.send('Hello World!')
})

https.createServer(options, app).listen(443, () => console.log('Server started 🚀'));
