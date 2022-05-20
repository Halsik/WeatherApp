
const search = document.querySelector(".search button");
const searchBar = document.querySelector(".search-bar");

let weather = {
    apiKey: "f15cc36c8d3d832462831640a072de89",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
            ).then ((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { humidity, temp } = data.main;
        const { speed } = data.wind;
       
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".description").innerHTML = description
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%"
        document.querySelector(".wind").innerHTML = "Wind speed: " + speed + " km/h"
        document.querySelector(".temp").innerHTML = temp + "°C"
        document.querySelector(".weather").classList.remove("loading")
        
        
    },
    search: function() {
        this.fetchWeather(searchBar.value)
    }
}

weather.fetchWeather("Kwidzyn");

search.addEventListener("click", function() {
    weather.search();
})

searchBar.addEventListener("keyup", function(event) {
    if(event.key == "Enter") {
        weather.search();
    }
})

