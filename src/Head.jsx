import React from 'react';
 function Head(data){
  return(
    <div className= " w-full h-10 flex space between bg-white">
    <img className= "w-24" src={data.photo}/>
      
    </div>
  );
}



export default Head;