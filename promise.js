
function wheatherData(){
let promise =new Promise((res,rej)=>{
    var request=new XMLHttpRequest();
    const cityname=document.getElementById("input1").value
    console.log(cityname)
    request.open('GET',`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=e3ca132ba5646dfc625ec5b7d81e5307`)
    request.send();
    request.onload=function(){
        if(request.status==200){
            var data=JSON.parse(request.response)
            res(data)
        }
        else{
            rej("some error occured")
        }
    }
})

promise.then((data)=>{console.log(data)

let weather=document.getElementById("weather");
weather.innerHTML=`<div class="card" style="width: 18rem;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxzPvFa4K3UK07r2Frx-NTr6qBiNvKyecPpA&usqp=CAU" 
    class="card-img-top" alt="Weather Image">
    <div class="card-body">
  <h5 class="card-title">Weather Data of ${document.getElementById("input1").value}</h5>
  <p class="card-text">Temperature ${data.main.temp}</p>
  <p class="card-text">WindSpeed: ${data.wind.speed}</p>
    </div>
    </div>`

})
promise.catch((err)=>{console.log(err)})
}