import React from "react";

import {  useParams } from "react-router-dom";

function Country( ) {
    let { country } = useParams();

    console.log(country)
    
  return (
    <div className="Country">
        
      <h1>{country} asdf</h1>
      <p>asdf fda qewrt  ytrew</p>
      
    </div>
  );
}

export default Country;
