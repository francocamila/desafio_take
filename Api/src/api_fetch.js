const axios = require('axios').default;

axios.get('https://api.github.com/users/takenet/repos?sort=created&direction=asc')
    .then(response => {
        for (var k in response.data){
            if (response.data[k].language == 'C#')
                console.log(response.data[k])}
    })
    .catch(error => console.error(error));