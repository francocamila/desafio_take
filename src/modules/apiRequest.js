const axios = require('axios').default;

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

module.exports = obj;
