import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from './Provider'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import './App.css';

function App() {

  // ----- JSX RENDER SIDE ----- //

  return (
    <Router>
      <Provider>
        <div className="App">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/">
              <Header />
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