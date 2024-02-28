
import './App.css';
import Rotas from './pages/routes';
import TopSection from './components/topComp';
import { useState } from 'react';


function App() {
  const [colorMode, setColorMode] = useState("white")
    
    function changeMode(){
        if(colorMode==="white"){
            setColorMode("dark")
        }else{
            setColorMode("white")
        }
        console.log(colorMode)
    }
  return (
    <div className={"App"+" "+colorMode} >
      <TopSection func={changeMode}></TopSection>
     <Rotas></Rotas>
      
    </div>
  );
}

export default App;
