import React from 'react'; 
import CountUp from 'react-countup';   

const countup = ()=> { 

  return ( 

    <div className="App"> 

      <h1>GEEKSFORGEEKS</h1> 

      <div style={{fontSize:'150px' }}> 

        <CountUp 

          start={0} 

          end={100000} 

          duration={3} 

        />     

      </div> 

    </div> 

  ); 
} 

  

export default countup;