import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState('light')
  return (
    <div className="App">
      <h3>Current theme is {theme} </h3>
      {/* <Button variant={`bordered`}>Click Me</Button> */}
      
      <Button clickHandler={()=> {
        setTheme(theme == 'light' ? 'dark' : 'light')
      }}>Toggle</Button>
    </div>
  );
}

export default App;
