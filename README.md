angular-lqfb-redesign
=====================

angular frontend for Liquid Feedback (core+pgrest)

Installation
```
$ npm i
```
Start Server
```
$ npm start
```

By now the REST call is just a call to a local json file.

Translate
======================

using lazy.js

translate 
Pirate Feedback: frontend / locale / *.lua
to
app / locale / *.json

#How to use
```
$ node ./lua2json.js translations.zh-TW.lua
```
it will generate translations.zh-TW.json

Next
using angular-translate
https://github.com/PascalPrecht/angular-translate

We can have an i18n version redesign


