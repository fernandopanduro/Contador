import './App.css';
import './css/Normalize.css';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [numClick, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClick + 1);
  };


  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">

      <div className='contenedor-margen contenedor-principal'>

        <h1 className='title'>Contador De Clicks</h1>

        <Counter 
        numCounter={numClick} />

        <div className='btns'>
          <Button
          text='Click'
          btn={true}
          onClick={manejarClick} />
          <Button
          text='Restart'
          btn={true}
          onClick={reiniciarContador} />
        </div>

      </div>
        
    </div>
  );

}

export default App;
