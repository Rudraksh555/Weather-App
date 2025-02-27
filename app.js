const apiKey = "146e9a5406f12f891905015dd6b468b9";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unite=matric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeathwr(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if(response.status == 404) {
                document.querySelector(".error").style.display = "block";
            }
            else {
                var data = await response.json();

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

if(data.weather[0].main == "Clouds"){
    weatherIcon.scr = "image/clouds.png";
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "image/rain.png";
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "image/drizzle.png";
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "image/mist.png";
}

document.querySelector(".weather").style.display =  "block";
document.querySelector(".error").style.display = "block";

}
            }

           

        searchBtn.addEventListener("click", () => {
            const city = searchBox.value;
            checkWeathwr(city);
        });
