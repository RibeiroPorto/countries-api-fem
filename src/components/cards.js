import './cards.css'

function Card({ flag, flagAlt, name, population, region, captal }) {


    return (
        <div className='card'>
            <img src={flag} alt={flagAlt}></img>
            <div>
                <p className='name'> {name}</p>
                <p className='population'> <span>Population : </span><number>{population}</number></p>
                <p className='region'> <span>Region : </span>{region}</p>
                <p className='captal'> <span>capital : </span>{captal}</p>


            </div>
        </div>
    )
}
export default Card