function city(){

    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=44.8333&lon=-0.6333&units=metric&appid=40c8d83dda5769debb80f7c1561756aa')
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        console.log(data);
        weather(data)
    })
    .catch(function(err) {
        console.log(err)
    });
}

function weather(w) {
    // declaration data
    var degree = w.current.temp
    var humidity = w.current.humidity;
    var wind = w.current.wind_speed;
    var day = w.daily;
    
    console.log(day)
    //dynamic data
    document.getElementById('degree').innerHTML = degree + '°';
    document.getElementById('humidity').innerHTML = humidity;
    document.getElementById('wind').innerHTML = wind;

    //wheater list
    var ul = document.getElementById('daylist');
    let dayName = ["LUNDI","MARDI","MERCREDI","JEUDI","VENDREDI"];
    for(let i = 0; i < 5; i++){
        var html = `
        <span>`+ dayName[i] +`</span><br>
        <img src="asset/img/sun.png" alt="">
        <strong>`+ day[i].temp.day +`°</strong>
        <span>Sunny</span>
    `

    var li= document.createElement("li");
    ul.append(li);
    li.innerHTML = html;
 
    }
}

window.onload = function(){
    city();
}

