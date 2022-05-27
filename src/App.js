import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from './Provider'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import './App.css';

function App() {

  // ----- JSX RENDER SIDE ----- //

  return (
    <Router>
      <Provider>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;

// Menggunakan convention penamaan BEM

// ERROR

// STATE PROVIDER DAN SELURUH ALLY NYA YG MEMBUAT RENDER ERROR