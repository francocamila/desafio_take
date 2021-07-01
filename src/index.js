const express = require('express');
var body_parser = require('body-parser');
const api = express();
const routes = require('./routes/index');
const PORT = process.env.PORT || 3333

//api.use(express.static(__dirname));
api.use(body_parser.json());
api.use(routes);
api.listen(PORT, () => console.log(`Port: ${PORT}`));