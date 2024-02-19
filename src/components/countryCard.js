import './countryCard.css'
import SearchBar from './serachBar';
import { useEffect, useState } from 'react';

function Card() {
    const [data, setData] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all')

                const jsonData = await response.json()
                setData(jsonData)
                setloading(false)
            } catch (error) {
                setloading(false); // Atualiza o estado de carregamento para false
            }
        }
        fetchData()
    }, [])

    if (loading) {
        return <p>loading</p>
    } else {




        return <div className='cardsContainer'>
            <SearchBar></SearchBar>
            {
                Object.values(data).map((element, index) => {
                    let name = element.name.common
                    let population = element.population
                    let region = element.region
                    let capital = element.capital
                    let flag = element.flags

                    return (<div key={index} className='card'>
                        <img src={flag.png} alt={flag.alt}></img>
                        <div>
                            <p className='name'> {name}</p>
                            <p className='population'> <span>Population : </span>{population}</p>
                            <p className='region'> <span>Region : </span>{region}</p>
                            <p className='capital'> <span>capital : </span>{capital}</p>


                        </div>
                    </div>)
                })
            }

        </div>
    }


}

export default Card