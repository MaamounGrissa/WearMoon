import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Boutique from './Components/Boutique';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Route exact path="/" component={ Home } />
        <Route path="/boutique" component={ Boutique } />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
