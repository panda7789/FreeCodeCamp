# Timestamp---microservice

Converts human date to unix date and backwards. Return it in JSON.
```
  http://localhost:1234/December 15, 2015
  http://localhost:1234/1450137600
  
  This may return:
  {"unix":1450137600,"natural":"December 15, 2015"}
```
This project was made as challenge in FreeCodeCamp.com
### Version
1.0.0
### Instalation
Simply clone git and install npm.
```bash
  git clone https://github.com/panda7789/timestamp---microservice
  cd timestamp---microservice
  npm install
  node server.js
```
http://localhost:1234/December%2015,%202015