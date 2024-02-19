import { Link } from 'react-router-dom';
import Card from '../components/countryCard';

function Home() {
    
  return (
    <div className="Main">
      
      <Link to='/countries/10'>country</Link>
     <Card></Card>

    </div>
  );
 


}

export default Home;
