// const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://the-birthday-cake-db.p.rapidapi.com/60',
  headers: {
    'X-RapidAPI-Key': '08e24492d2msha556b2fd85c2a89p19a46fjsn47cb164a3796',
    'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
  }
};

try {
	
    const rapidApi = async () => {
        const response = await fetch(options.url, options);
        const data = await response.json()
        console.log(data)
    }

    // rapidApi()

} catch (error) {
	console.error(error);
}