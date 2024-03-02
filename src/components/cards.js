import './cards.css'

function Card({link, flag, flagAlt, name, population, region, captal }) {


    return (
        
        <div className='card'>
            <a href={link}>
            <img src={flag} alt={flagAlt}></img>
            <div>
                <p className='name'> {name}</p>
                <p className='population'> <span>Population : </span>{population}</p>
                <p className='region'> <span>Region : </span>{region}</p>
                <p className='captal'> <span>capital : </span>{captal}</p>
                


            </div>
            </a>
        </div>
        
    )
}
export default Card