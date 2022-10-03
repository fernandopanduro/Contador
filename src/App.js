import './App.css';
import './css/Normalize.css';
import Button from './components/Button';

function App() {

  return (
    <div className="App">

      <h1>Contador De Clicks</h1>

      <div className='btns'>
        <Button
        text='Click'
        btn={true} />
        <Button
        text='Restart'
        btn={true} />
      </div>
        
    </div>
  );

}

export default App;
