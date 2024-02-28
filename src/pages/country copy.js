import React from "react";

import { useParams } from "react-router-dom";

import { useEffect, useState } from 'react';

function Country() {

  const [data, setData] = useState(null)
  const [loading, setloading] = useState(true)
  
  let { country } = useParams();
  console.log(data)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all')
        console.log(response)
        const jsonData = await response.json()
        setData(jsonData)
        console.log(jsonData)
        setloading(false)
      } catch (error) {
        setloading(false); // Atualiza o estado de carregamento para false
      }
    }
    fetchData()
  }, [])
  if (loading) {
    return (
      <div className="Country">

        <h1>{country} asdf</h1>
        <p>asdf fda qewrt  ytrew</p>

      </div>
    );
  } else {
    console.log("data", data)
    return (<div>
      {<><p></p>
      <button onClick={console.log('a')}>qwerqwer</button></>
      }
    </div>)
  }
}

export default Country;
