
let cityName = document.querySelector('.location');
let button = document.querySelector('#mytext');
let temperature = document.querySelector('.temp'); 
let status = document.querySelector('.status');


window.addEventListener('load', () => {

    let lon;
    let lat;
    const apiKey = '581cf680a71e49ade585e4a95a704343';
   
    let url = `https://api.openweathermap.org/data/2.5/weather?q=`;
    
   
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
         lon = position.coords.longitude;
         lat = position.coords.latitude;
         
         let currentPosition = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKey}`;
        //  cityName.textContent = currentPosition.name;
            console.log(cityName);
            myInfo(currentPosition);
           
            
        })
    }

    button.addEventListener('click', event => {
        event.preventDefault();
        let input = document.querySelector('#town')
        let city = input.value;
        
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
        console.log(city);
        
        myInfo(url);
        
    });

    function myInfo(url){

        return fetch(url)
        .then(data =>{
            return data.json();
        })
        .then(data => {
            const town = data.name;
            const time = data.weather[0];
            const temp = Math.round(data.main.temp);
            console.log(data);
            status.textContent = time.main;
            temperature.textContent = temp;
            cityName.textContent = town;
            getIcon(time.icon);
            
        })
    }
    
    function getIcon(icona) {
        
        console.log(icona);
        let icons = document.querySelector('.ico');
        switch (icona) {
            case '01d':
            icons.setAttribute('src', 'img/ico_img/iconfinder_forecast_sun_weather_3763531.svg');
            break;
            case '01n':
            icons.setAttribute('src', 'img/ico_img/iconfinder_moon_3763541.svg');
            break;
            case '02d':
            icons.setAttribute('src', 'img/ico_img/iconfinder_Cloud_cloudy_forecast_sun_weather_3763533.svg');
            break;
            case '02n':
            icons.setAttribute('src', 'img/ico_img/iconfinder_Cloud_forecast_moon_night_weather_3763543.svg');
            break;
            case '03d':
            icons.setAttribute('src', 'img/ico_img/iconfinder_Cloud_cloudy_forecast_weather_3763532.svg');
            break;
            case '03n':
            icons.setAttribute('src', 'img/ico_img/iconfinder_Cloud_lightening_storm_thunder_weather_3763534.svg');
            break;
            case '04d':
            icons.setAttribute('src', 'img/ico_img/iconfinder_Cloud_lightening_storm_thunder_weather_3763534.svg');
            break;
            case '04n':
            icons.setAttribute('src', 'img/ico_img/iconfinder_Cloud_lightening_storm_thunder_weather_3763534.svg');
            break;
            case '50d':
            icons.setAttribute('src', 'img/ico_img/iconfinder_Cloud_lightening_storm_thunder_weather_2_3763542.svg');
            break;
            case '13d':
            icons.setAttribute('src', 'img/ico_img/iconfinder_Christmas_cold_forecast_snow_snowflake_weather_winter_xmas_3763549.svg');
            break;
            case '10d':
            icons.setAttribute('src', 'img/ico_img/iconfinder_Cloud_day_forecast_rain_shine_sun_weather_3763538.svg');
            break;
            case '09d':
            icons.setAttribute('src', 'img/ico_img/iconfinder_Cloud_lightening_storm_thunder_weather_1_3763535.svg');
            break;
            case '09n':
            icons.setAttribute('src', 'img/ico_img/iconfinder_Cloud_lightening_storm_thunder_weather_1_3763535.svg');
            break;
            case '10n':
            icons.setAttribute('src', 'img/ico_img/iconfinder_0ABolt_cloud_forecast_lightning_moon_night_storm_weather_1_3763546.svg');
            break;
        } 
    }      
});
