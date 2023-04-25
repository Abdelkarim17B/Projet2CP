const axios = require('axios');

async function getBankLocation(addresse,key) 
{
    try
    {
        const urladress = encodeURIComponent(addresse)
        console.log("---------------------------------" , urladress);
        const response = await axios.get(`https://api.tomtom.com/search/2/geocode/${encodeURIComponent(addresse)}.json?key=${key}`);
        const { lat, lon } = response.data.results[0].position;
        const coordinates = [lat , lon]
        console.log("This is the latitude : " , coordinates[0] , " and this is the longitude : "  , coordinates[1])
        return coordinates;

    }
    catch(err) {
        console.log(err);
        res.status(500).send('Error searching for address')
        
    }

}

module.exports = {getBankLocation};