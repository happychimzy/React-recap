// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Mytabs from './components/Mytabs';
import Mycard from './components/Mycard';

function App() {
  return (
    <div>
       <Header/>
       <Searchbar/>
       <Mytabs/>
       <Mycard/>
    </div>
  
  );
}

export default App;
