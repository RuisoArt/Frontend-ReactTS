import './App.css';
import {AddForm} from './components/AddForm';
import { Header } from './components/Header';

function App() {
  return (
    <div className="container">
      <div className=""><Header/></div>
      <div className="container "><AddForm/></div>
    </div>   
  );
}

export default App;
