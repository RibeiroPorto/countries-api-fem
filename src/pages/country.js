
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import BigCardPanel from "../components/bigCardPainel";

function Country() {
  let { country } = useParams();
  const [countrydata, setCountryData] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          setCountryData(data[0]);
          const borderPromises = data[0].borders.map((border) =>
            fetch(`https://restcountries.com/v3.1/alpha/${border}`)
              .then((response) => response.json())
              .then((borderData) => borderData[0].name.common)
          );

          Promise.all(borderPromises)
            .then((borders) => setBorderCountries(borders))
            .catch((error) => console.error('Error fetching border countries:', error))
            .finally(() => setLoading(false));
        } else {
          setLoading(false)
        }
      })
      .catch((error) => {
        console.error('Error fetching country data:', error);
        setLoading(false);
      });

  }, [country])
  if (loading) {
    return <div>Loading...</div>;
  } else if (countrydata) {
    console.log(borderCountries)
    let flag = countrydata.flags.png
    let flagAlt = countrydata.flags.alt
    let name = countrydata.name.common
    let nativeNameKey = Object.keys(countrydata.name.nativeName)[0]
    let nativeName = countrydata.name.nativeName[nativeNameKey].common
    let population = countrydata.population
    let formatForPopulation = new Intl.NumberFormat('de-DE')
    let formatedPopulation = formatForPopulation.format(population)
    let region = countrydata.region
    let subRegion = countrydata.subregion
    let captal = countrydata.capital
    let domain = countrydata.tld[0]
    let currencieKey = Object.keys(countrydata.currencies)[0]
    let currencies = countrydata.currencies[currencieKey].name
    let languages = ''
    
    
    Object.keys(countrydata.languages).forEach((lang, index) => {
      if (index > 0) {
        languages += ", "
      }
      languages += countrydata.languages[lang]
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
        borderCountries={borderCountries}
      ></BigCardPanel>
    </div>)

  }


}

export default Country
