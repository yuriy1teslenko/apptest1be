const express = require('express');
const request = require('request');

const path = require('path').join;
const urlResolve = require('url').resolve;
const config = require('./config/configApp.json');

const service = express();
const portSrv = parseInt(process.env.PORT || config.service.port);

service.use('/', express.static('../apptest1/dist'));
service.get('/api/*', (req, res) => {
  let url = urlResolve('https://jsonplaceholder.typicode.com/', req.params[0]);
  request({
    url,
    qs: req.query,
  }).pipe(res);
});
service.get('/*', (req, res) => {
  res.sendFile('/work/elex/apptest1/dist/index.html');
});

service.listen(parseInt(portSrv, 10), () => {
  console.info(`Server listening on: http://localhost: ${portSrv}`)
});
