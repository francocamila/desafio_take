const express = require('express');
const axios = require('axios').default;
var body_parser = require('body-parser');

const api = express();
api.use(express.static(__dirname));
api.use(body_parser.json());
var obj =[] ;
axios.get('https://api.github.com/users/takenet/repos?sort=created&direction=asc')
    .then(response => {
        response.data.slice(0,6).forEach(res => {
            if (res.language == 'C#'){
                obj.push({
                        "full_name": res.full_name,
                        "text": res.description,
                        "avatar_url": res.owner.avatar_url
                    })
            }
        })
    })
    .catch(error => console.error(error));
api.listen(3000, () => {
    console.log('Hello!');
})
api.get('/', (req, res) => {
    console.log(req);
    res.send('This API is up and running.');
})
api.get('/repos', (req, res) => {
    console.log(req);
    res.json(obj);
})