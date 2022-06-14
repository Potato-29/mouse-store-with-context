import logo from './logo.svg';
import './App.css';
import Homescreen from './Screens/Homescreen';
import Nav from './Components/Nav';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Cart/>
      <Homescreen />
    </div>
  );
}

export default App;
