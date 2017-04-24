# apptest1be
Backend for apptest1 application

Install UI before run this service.
UI repo:
https://github.com/yuriy1teslenko/apptest1.git

### Install

NodeJS version 6.5.0
NPM version 3.10.3

```sh
git clone git@github.com/yuriy1teslenko/apptest1be.git
cd apptest1be
npm install
npm start
```

Put absolute path to the main UI directory in apptest1be/config/configApp.json "uiDirectory" property.

Then you can open the app in your browser (localhost:4450)

You can change port in configApp.json file or provide it via environment variable PORT
