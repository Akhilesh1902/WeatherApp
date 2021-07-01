// console.log("uosjf");
let weather = {
    apiKey : "51147ce8e369eb234ad7e52e15a363e4",
    
    fetchWeather : function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+ this.apiKey)
        .then(response => response.json())
        .then(data => this.displayWeather(data));
    },

    displayWeather : function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main; 
        const {speed } = data.wind;
        console.log(name, icon, description,temp,humidity,speed);

        document.querySelector(".city").innerText = "Weather in " + name;
        // document.querySelector(".icon").
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText ="Temp : " + temp;
        document.querySelector(".humidity").innerText = "Humidity : "+humidity;
        document.querySelector(".wind").innerText = "Wind Speed : " + speed;
        document.querySelector(".weather").classList.remove("loading");
    },
    search : function(){
        this.fetchWeather(document.querySelector(".textBox").value)
        
    }
};

document.querySelector(".searchButton").addEventListener("click",function(){
    weather.search();
});

document.querySelector(".textBox").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
    }
})

weather.fetchWeather("denver");
