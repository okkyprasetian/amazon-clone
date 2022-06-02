import { useEffect, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { StateContext } from './Provider'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import Payment from './Payment'
import { auth } from './firebase'
import './App.css';

function App() {

  const { setUser } = useContext(StateContext)

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('The user is ', authUser)
      if (authUser) {
        // User Logged In
        setUser(authUser)
      } else {
        // User Logged Out
        setUser(null)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// Menggunakan convention penamaan BEM