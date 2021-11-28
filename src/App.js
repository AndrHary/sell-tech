
import './App.css';
import { Route } from 'react-router-dom';
import {useState, useEffect} from "react";
import HeaderComponent from './components/Header/HeaderComponent';
import WelcomeComponent from './components/WelcomePageComponent/WellcomeComponent';
import LoginForm from './components/LoginComponent/LoginComponent';
import RegisterComponent from './components/RegisterComponent/RegisterComponent';
import AllItems from './components/AllItems/AllItems';
import CreateItem from './components/CreateItem/CreateItem';
import MyProfileComponent from './components/MyProfile/MyProfileComponent';
function App(){
  let [userLog, setUser] = useState({isAuthenticated: false, user : undefined})
  useEffect(() => {
    let user = localStorage.getItem('user')
    setUser({isAuthenticated: Boolean(user), user: user})
  }, [])
  let onLogin = (user) => {
     localStorage.setItem('username', user.username)
     localStorage.setItem('email', user.email)
     localStorage.setItem('profilePictureUrl', user.profilePictureUrl)
     localStorage.setItem('phone', user.phone)
     setUser({isAuthenticated: Boolean(user), user: user})
  }
  return (
    <div className="App">
      <header>
        <HeaderComponent {...userLog}/>
      </header>
      <main>
        <Route path="/" exact component={WelcomeComponent}></Route>
        <Route path="/users/login" component={() => <LoginForm onLogin={onLogin}/>}></Route>
        <Route path="/users/register" component={() => <RegisterComponent onRegister={onLogin} />}></Route>
        <Route path="/items/offers" component={() => <AllItems />}></Route>
        <Route path="/items/create-item" component={() => <CreateItem />}></Route>
        <Route path="/users/my-profile/:username" component={() => <MyProfileComponent user={userLog.user} />}></Route>
      </main>
    </div>
  );
}

export default App;
