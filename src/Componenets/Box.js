import React from 'react'
import moment from 'moment'
import './box.css';

export default function Box({wdata}) {
  console.log("wdata",wdata)
  return (
    //  <div className='row ' id='card123'>
    // <center>
    <div id='card1'> 
        {/* <div  class="container py-50">
  <div class="d-flex justify-content-center">
    <div class="col-15">
      <div class="row row-cols-1 row-cols-md-5 g-5">
        {wdata.map(fdata=>(      
  <div className='col-mt-3' id='card12' >
  <div class="card-body">
  <h1 class="card-title" id='h1'>{moment(fdata.dt_txt).format('dddd')}</h1>
  <p>pressure: {fdata.main.pressure}</p>
    <h6>temp:{Math.floor(fdata.main.temp-273)}°C </h6>
    <p> {moment(fdata.dt_txt).format("MMM Do YY")}</p>
    <p>{fdata.weather[0].description} </p>
    </div>
  </div>
  ))} 
  
  </div>
  </div>
        </div>
      </div> */}
        {wdata.map(fdata=>(      
      <div class="card" id='card12'>
  <div class="card-body">
    <h5 class="card-title" id='h1'>{moment(fdata.dt_txt).format('dddd')}</h5>
    <p class="card-text"> pressure: {fdata.main.pressure}</p>
    <h6>temp:{Math.floor(fdata.main.temp-273)}°C </h6>
    <p> {moment(fdata.dt_txt).format("MMM Do YY")}</p>
    <p>{fdata.weather[0].description} </p>
   
  </div>
</div>
 ))} 
    </div>
    // </center>
  
 
  
 


  )
}
