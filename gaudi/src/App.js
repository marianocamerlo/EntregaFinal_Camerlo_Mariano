import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from 'bootstrap';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos!'}/>
    </div>
  );
}

export default App;
