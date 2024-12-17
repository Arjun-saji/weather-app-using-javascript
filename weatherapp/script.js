const cityinput = document.getElementById("city");
const search = document.getElementById("getWeather");
const weatherinfo = document.getElementById("weatherResult");

const API_KEY = "4d8fb5b93d4af21d66a2948710284366";
search.addEventListener("click",getweather);
async function getweather(){
	let city= cityinput.value.trim();
	console.log(city)

	if(!city){
		alert("Please enter the city..!")
		return;
	}

	try{

	 const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
     const data= await response.json()
     
     if (data.cod==='404'){
     	weatherinfo.innerHTML="city is invalid";
        return;
     }

     weatherinfo.innerHTML =`
     <div class="weather-data">

        <h2> Weather in ${data.name}</h2>
        <p><strong>Temperature : ${data.main.temp}C</strong></p>
        <p><strong>Weather : ${data.weather[0].description}</strong></p>
        <p><strong>Humidity : ${data.main.humidity}%</strong></p>
        <p><strong>Wind : ${data.wind.speed}m/s</strong></p>
        </div>`;
	}
	catch(error)
	{
		console.error("Error fetching weather data:",error);

		weatherinfo.innerHTML="An error occured while fetching the data please try again.."

	}
}

getweather();




