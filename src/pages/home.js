import { Link } from 'react-router-dom';
import CardsPanel from '../components/cardsPainel';

function Home() {
    
  return (
    <div className="Main">
{/*       
      <Link to='/countries/10'>country</Link> */}
     <CardsPanel></CardsPanel>

    </div>
  );
 


}

export default Home;
