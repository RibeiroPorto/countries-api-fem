import './cardsPainel.css'
import SearchBar from './serachBar';
import { useEffect, useState } from 'react';
import Card from './cards';

function CardsPanel() {
    const [data, setData] = useState(null)
    const [loading, setloading] = useState(true)
    const [filteredRegion, setFilterRegion]=useState(null)
    
    const [filteredCountry, setFilterCountry]=useState(null)

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
    
    function filterRegion( region){
        if(region==='Filter by Region'){
            setFilterRegion(null)
        }else{
        setFilterRegion(region)
        }
    }
    function SearchForaCountry( name){
        console.log(name)
        setFilterCountry(name)
    }
    if (loading) {
        return <p>loading</p>
    } else {




        return (
            <div className='cardsContainer'>
                <SearchBar funcRegion={filterRegion} funcName={SearchForaCountry}></SearchBar>
                <div>
                    {
                        Object.values(data).map((element, index) => {
                            let name = element.name.common
                            let population = element.population
                            let formatForPopulation = new Intl.NumberFormat('de-DE')
                            let formatedPopulation = formatForPopulation.format(population)
                            let region = element.region
                            let captal = element.capital
                            let flag = element.flags
                        
                            let nativeName = element.name.nativeName
                            let subRegion =element.subregion
                            let domain = element.tld
                            let currencie = element.currencies
                            let languages = element.languages
                            let BorderCountries=''
                            if(filteredRegion !== null){
                                if(region !== filteredRegion){
                                    return <></>
                                }
                            }
                            if(filteredCountry !== null){
                                if( !name.includes(filteredCountry)){
                                    return <></>
                                }
                            }
                            return (
                                <Card
                                    key={index}
                                    flag={flag.png}
                                    flagAlt={flag.alt}
                                    name={name}
                                    population={formatedPopulation}
                                    region={region}
                                    captal={captal}
                                    link={"/countries/"+name}
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