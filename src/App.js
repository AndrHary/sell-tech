
import './App.css';
import { Route } from 'react-router-dom';
import {useState, useEffect} from "react";
import HeaderComponent from './components/Header/HeaderComponent';
import WelcomeComponent from './components/WelcomePageComponent/WellcomeComponent';
import LoginForm from './components/RegisterForm/LoginComponent';
function App() {
  let [user, setUser] = useState({isAuthenticated: false, email: undefined})
  useEffect(() => {
    let email = localStorage.getItem('email')
    setUser({isAuthenticated: Boolean(email), email: email})
  }, [])
  let onLogin = (email) => {
     localStorage.setItem('email', email)
     setUser({isAuthenticated: Boolean(email), email: email})
  }
  return (
    <div className="App">
      <header>
        <HeaderComponent {...user}/>
      </header>
      <main>
        <Route path="/" exact component={WelcomeComponent}></Route>
        <Route path="/users/login" component={() => <LoginForm onLogin={onLogin}/>}></Route>
      </main>
    </div>
  );
}

export default App;
