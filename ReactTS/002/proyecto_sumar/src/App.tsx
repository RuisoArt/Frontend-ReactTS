import './App.css';
import {AddForm} from './componets/addForm';
import { Header } from './componets/header';

function App() {
  return (
    <div className="container">
      <Header/>
      <div className="container "><AddForm/></div>
    </div>   
  );
}

export default App;
