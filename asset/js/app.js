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

// Date
function getTodayDate() {
  var tdate = new Date();
  var dd = tdate.getDate(); 
  var MM = tdate.getMonth(); 
  var yyyy = tdate.getFullYear();
  var todayDate = dd + "-" + (MM + 1) + "-" + yyyy;
  document.getElementById("Date").innerHTML = todayDate;
}

function weather(w) {

    // declaration data
    var weather = w.current.weather[0].main;
    var degree = w.current.temp
    var humidity = w.current.humidity;
    var wind = w.current.wind_speed;
    var day = w.daily;
    
    console.log(day)
    //dynamic data
    document.getElementById('degree').innerHTML = degree + '°';
    document.getElementById('weather').innerHTML = weather;
    document.getElementById('humidity').innerHTML = humidity;
    document.getElementById('wind').innerHTML = wind;

    //wheater list
    var ul = document.getElementById('daylist');
    let dayName = ["LUNDI","MARDI","MERCREDI","JEUDI","VENDREDI"];
    
    for(let i = 0; i < 5; i++){
        if(day[i].weather[0].main == "Rain" ){
            var link = 'src="asset/img/rain.png"';
        }else if(day[i].weather[0].main = "Clounds" ){
            var link = 'src="asset/img/clounds.png"';
        }else if(day[i].weather[0].main = "Clear" ){
            var link = 'src="asset/img/sun.png"';
        };
        var html = `
        <span>`+ dayName[i] +`</span><br>
        <img  `+ link +`  alt="logo">
        <strong>`+ day[i].temp.day +`°</strong>
        <span>` + day[i].weather[0].main+ `</span>
    `

    var li= document.createElement("li");
    ul.append(li);
    li.innerHTML = html;
 
    }
}

window.onload = function(){
    city();
    getTodayDate()
}

