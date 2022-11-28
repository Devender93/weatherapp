import React from 'react'

function Result({weatherData}) {
    if(weatherData.length !== 0)
        
        {
      
        
    var timestamps = weatherData.sys.sunrise * 1000;
    var sunrise= new Date(timestamps).toLocaleTimeString();
    var changesunset=weatherData.sys.sunset * 1000;
    var sunset= new Date(changesunset).toLocaleTimeString();
}
    
  return (
   
  <>
    {
        
    weatherData.length !== 0
   // var time= new Date((weatherData.sys.sunrise + weatherData.timezone) * 1000);
    ?
    
   
 
    <>
   
    <h1>{weatherData.name}</h1>
    <div> Temp:{weatherData.main.temp}</div>
    <div> Min.Temp:{weatherData.main.temp_min}</div>
    <div>Max. Temp:{weatherData.main.temp_max}</div>
    <div>Sunrise: {sunrise} </div>
    <div>Sunset: {sunset}</div>
   </>
   :
   <>
    <h3>Please Enter the City name</h3>
   </>
    }
    </>
  )
}

export default Result