import React from "react";

import { useParams } from "react-router-dom";

import { useEffect, useState } from 'react';

function Country() {

  const [data, setData] = useState(null)
  const [loading, setloading] = useState(true)
  
  let { country } = useParams();
  console.log(data)
  function show(){
    console.log('a')
  }
  return(
    <>
    <p>{country}</p>
    <button onClick={show}>asdf</button>
    </>
  )
}

export default Country;
