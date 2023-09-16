// const axios = require('axios');

const options = {
  method: 'GET',
  url: proces.env.CakeURL,
  headers: {
    'X-RapidAPI-Key': process.env.XRapidAPIKey,
    'X-RapidAPI-Host': process.env.XRapidAPIHost
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