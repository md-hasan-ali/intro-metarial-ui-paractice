import { Button } from '@mui/material';
import './App.css';
import Newspaper from './components/Newspaper/Newspaper';

function App() {
  return (
    <div className="App">
      <Button variant='contained'>click me</Button>
      <Newspaper></Newspaper>
    </div>
  );
}

export default App;
