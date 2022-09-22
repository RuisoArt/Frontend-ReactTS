import './App.css';
import { Father } from './componets/Father';
import { Header } from './componets/Header';

function App() {
  return (
    <div className="container-fluid">
      <Father>
        <Header/>
      </Father>
    </div>   
  );
}

export default App;
