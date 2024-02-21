import './cardsPainel.css'
import SearchBar from './serachBar';
import { useEffect, useState } from 'react';
import Card from './cards';

function CardsPanel() {
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




        return (
            <div className='cardsContainer'>
                <SearchBar></SearchBar>
                <div>
                    {
                        Object.values(data).map((element, index) => {
                            let name = element.name.common
                            let population = element.population
                            let region = element.region
                            let captal = element.capital
                            let flag = element.flags

                            return (
                                <Card
                                    key={index}
                                    flag={flag.png}
                                    flagAlt={flag.alt}
                                    name={name}
                                    population={population}
                                    region={region}
                                    captal={captal}
                                >

                                </Card>
                            )
                        })
                    }

                </div>
            </div>
        )
    }


}

export default CardsPanel