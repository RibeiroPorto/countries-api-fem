import React from "react";
import BigCardPanel from "../components/bigCardPainel";
import { json, useParams } from "react-router-dom";

import { useEffect, useState } from 'react';

function Country() {
  let { country } = useParams();
  const [countrydata, setcountrydata] = useState(null)

  useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/name/${country}`).then((response) => {
      console.log(response)
      return response.json()
    }).then((data)=>{
      console.log(data)
      setcountrydata(data)
    }).then(()=>{
      return(<p>{countrydata[0].name.common}</p>)
    })
  },[]);

  return(
    <div>
      <p>{country}</p>
      
    </div>
  )
}

export default Country;
