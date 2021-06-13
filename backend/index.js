const axios = require('axios');

    const getTempDataForecast = async () => {
        try {
            const weather = await axios.get('https://api.openweathermap.org/data/2.5/forecast?units=metric&q=Vienna&APPID=5dba23245d2e80d7bb7a49cc82c47cda');
            //temperature
            //icons
            //city
        } catch (err) {
            console.error(err);
        }
    };

    module.exports={
        getTempDataForecast
    }
            //*************************************/
            //endpoint getCurrentWeather (OneCall)
            //*************************************/
            //filter to return 
            //temperature - Min 
            //temperature - Max
            //temperature - current
            //temperature Feels - Like 
            //City
            //Wind
            //Humidity
            //icons

            //*************************************/
            //endpoint derStandard RSS Feed
            //*************************************/
            //rss to json parser 


            //*************************************/
            //endpoint Covid or Covid Map
            //*************************************/
            //