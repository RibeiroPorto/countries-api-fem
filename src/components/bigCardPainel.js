

function BigCardPanel({flag, flagAlt,name, nativeName, population, region, subRegion,captal,domain,currencies, languages, borderCountries }){

    return (
        <div className="bigCard">
            <img scr={flag} alt={flagAlt}></img>
            <div className="countryInfo">
                <h1>{name}</h1>
                <div>
                    <p><span>Native Name: </span>{nativeName }</p>
                    <p><span>Population: </span>{population }</p>
                    <p><span>Region: </span>{ region}</p>
                    <p><span>Sub Region: </span>{subRegion }</p>
                    <p><span>Capital: </span>{captal }</p>
                    <p><span>Top Level Domain: </span>{ domain}</p>
                    <p><span>Currencies: </span>{currencies }</p>
                    <p><span>Languages: </span>{languages }</p>
                </div>
                <div>
                    <p>Border Countries</p>
                    {borderCountries }
                </div>
            </div>

        </div>
    )


}

export default BigCardPanel