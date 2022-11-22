import React from 'react'
import Box from './Box';
import './design.css';
import { useEffect, useState } from 'react';


export default function Design () {
  const [weather,setWeather]=useState([])
    
  useEffect(()=>{

    fetch("http://api.openweathermap.org/data/2.5/forecast?q=calicut&appid=3ef9508ade9f84ce48b23a883f7d96c6")
    .then(resp=>resp.json())
    .then(response=>{
        console.log("response==>",response)
    //   const filtered=response.list.filter(item=>{
    //     return item.dt_txt.includes("09:00:00")
    //   })
      setWeather(response.list.filter(item=>{
        return item.dt_txt.includes("09:00:00")
      }))

    })

     



    

  },[])
  
  
  

  return (
    <div>
        <div id='head1'> 
          <center>
            <h1 id='heading'> Day Forcast</h1>
            <p id='sub'> Calicut</p>
            <hr/>
            </center>
           

        </div>
        
      
      
      
   
        <Box wdata={weather}/>
        
        
    </div>
 
  )
    
}
