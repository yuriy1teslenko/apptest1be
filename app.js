const express = require('express');
const request = require('request');

const path = require('path').join;
const urlResolve = require('url').resolve;
const config = require('./config/configApp.json');

const service = express();

const portSrv = parseInt((process.env.PORT || config.service.port), 10);

service.use('/', express.static(config.service.uiDirectory));
service.get('/api/*', (req, res) => {
  let url = urlResolve(config.service.apiUrl, req.params[0]);
  request({
    url,
    qs: req.query,
  }).pipe(res);
});
service.get('/*', (req, res) => {
  res.sendFile(config.service.uiDirectory);
});

service.listen(portSrv, () => {
  console.info(`Server listening on: http://localhost: ${portSrv}`)
});
