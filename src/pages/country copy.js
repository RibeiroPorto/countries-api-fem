import React from "react";
import BigCardPanel from "../components/bigCardPainel";
import { json, useParams } from "react-router-dom";

import { useEffect, useState } from 'react';

function Country() {

  const [data, setData] = useState(null)
  const [loading, setloading] = useState(true)
  const [bordercountries, setbordercountries] = useState(null)

  let { country } = useParams();
  var lista = []
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)

        const jsonData = await response.json()
        setData(jsonData)

        jsonData[0].borders.forEach(async (code) => {
          try {
            const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${code},${code},${code}`)
            const jsonData = await response.json()
            lista.push(jsonData[0].name.common)
          } catch (error) {

          }

        })
        setbordercountries(lista)
        if (lista !== null) {
          setloading(false)
        }

      } catch (error) {
      }
    }
    fetchData()
  }, [])
  if (loading) {
    return (
      <div className="Country">

        <h1>{country}</h1>

      </div>
    );
  } else {
    let flag = data[0].flags.png
    let flagAlt = data[0].flags.alt
    let name = data[0].name.common
    let nativeNameKey = Object.keys(data[0].name.nativeName)[0]
    let nativeName = data[0].name.nativeName[nativeNameKey].common
    let population = data[0].population
    let formatForPopulation = new Intl.NumberFormat('de-DE')
    let formatedPopulation = formatForPopulation.format(population)
    let region = data[0].region
    let subRegion = data[0].subregion
    let captal = data[0].capital
    let domain = data[0].tld[0]
    let currencieKey = Object.keys(data[0].currencies)[0]
    let currencies = data[0].currencies[currencieKey].name
    let languages = ''
    console.log(lista
    )
    Object.keys(data[0].languages).forEach((lang, index) => {
      if (index > 0) {
        languages += ", "
      }
      languages += data[0].languages[lang]
    })
    


    return (<div>
      <BigCardPanel
        flag={flag}
        flagAlt={flagAlt}
        name={name}
        nativeName={nativeName}
        population={formatedPopulation}
        region={region}
        subRegion={subRegion}
        captal={captal}
        domain={domain}
        currencies={currencies}
        languages={languages}
        borderCountries={lista}
      ></BigCardPanel>
    </div>)
  }
}

export default Country;
