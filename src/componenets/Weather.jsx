import React, { useEffect, useRef, useState } from 'react'
import './Weather.css' 


import clouds from '../assets/cloudy.png'
import humidity from '../assets/humidity.png'
import searchImage from '../assets/search.png'
// import search from '../assets/search.png'
 import rainy from '../assets/rainy.png'
import snow from '../assets/snow.png'
import drizzle from '../assets/drizzle.png'
import sun from '../assets/sun.png'
import wind from '../assets/wind.png'
import cloudy from '../assets/cloudy.png'
import animation from '../assets/animation.png'


const Weather = () => {


    const inputref = useRef()

    
    const [city,setCity] = useState("");

    const [weatherdata, setweatherdata] = useState({});
    const [icons,setIcons] = useState(clouds);

    const allIcons={
      "01d":sun,
      "01n":sun,
      "02d":clouds,
      "02n":clouds,
      "03d":cloudy,
      "03n":cloudy,
      "04d":drizzle,
      "04n":drizzle,
      "09d":rainy,
      "09n":rainy,
      "10d":rainy,
      "10n":rainy,
      "13d":snow,
      "13n":snow,
    }
   
   
    const search = async ()=> {

     try {
      if(city == ""){
        alert("enter city name");
        return;
      }
      

        const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
          
              const response = await fetch(url);
                const data= await response.json();
                if (!response.ok){
                  alert(data.message);
                  return;
                  
                }
                console.log(data);
               console.log(allIcons[data.weather[0].icon]);
               
                setIcons(allIcons[data.weather[0].icon] || clouds); 

                setweatherdata(data)
                // setweatherdata({
                //   humidity:data.main.humidity,
                //   wind:data.wind.speed,
                //   temprature:math.floor(data.main.temp),
                //   location:data.name,
                //   icon:icon,
                // })

  }
   catch (error) {
        setweatherdata("false");
        console.error("error in fetching weather data");
      }
       
     }



  return (
  
    <div className="container">
        <div className="input-bar">
            <input ref={inputref} onChange={(e)=>setCity(e.target.value)} type="text" placeholder='entre'/>
     
            <img src={searchImage} alt="Logo" style={{ width: '25px', height: '25px' }} onClick={()=>search()} />
        </div>
      
        <img src={icons} alt="" className='weather-icon'/>
        <p className='temprature'>{weatherdata.main?.temp}</p>
        <p className='location'>{weatherdata.name}</p>
        <div className="weather-data">
        <div className="col">
            <img src={humidity} alt="" />
            <div>
              <p>{weatherdata.main?.humidity}</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="col">
            <img src={wind} alt="" />
            <div>
              <p>{weatherdata.wind?.speed}</p>
              <span>WindSpeed</span>
            </div>
          </div>
        </div> 
      
        
    </div>
    
  )
}

export default Weather