const http = require('http')
const stats = require('./pcRamUsage.js')
const host = 'http://localhost'
const port = 3000

http.createServer((req, res) => {
  let url = req.url

  if(url === '/stats'){
    res.end(JSON.stringify(stats, null, 2))
  } else {
    res.end('<h1>Welcome</h1>')
  }

  }).listen(port, () => console.log(`Server is UP. ${host}:${port}`))