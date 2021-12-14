
import './App.css';
import { Route } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import HeaderComponent from './components/Header/HeaderComponent';
import WelcomeComponent from './components/WelcomePageComponent/WellcomeComponent';
import LoginForm from './components/LoginComponent/LoginComponent';
import RegisterComponent from './components/RegisterComponent/RegisterComponent';
import AllItems from './components/AllItems/AllItems';
import CreateItem from './components/CreateItem/CreateItem';
import MyProfileComponent from './components/MyProfile/MyProfileComponent';
import DetailsItemComponent from './components/DetailsItemComponent/DetailsItemComponent';
import { authContext } from './contexts/authContext.js'
function App() {
  let [userLog, setUser] = useState({})
  let onLogin = (user) => {
    setUser(user)
    console.log(user)
    console.log('done')
  }
  return (
    <authContext.Provider value={userLog}>
      <div className="App">
        <header>
          <HeaderComponent/>
        </header>
        <main>
          <Route path="/" exact component={WelcomeComponent}></Route>
          <Route path="/users/login" component={() => <LoginForm onLogin={onLogin} />}></Route>
          <Route path="/users/register" component={() => <RegisterComponent onLogin={onLogin} />}></Route>
          <Route path="/items/newest-items" component={() => <AllItems />}></Route>
          <Route path="/items/create-item" component={() => <CreateItem />}></Route>
          <Route path="/users/my-profile/:username" component={() => <MyProfileComponent/>}></Route>
          <Route path="/items/:itemId/details" component={() => <DetailsItemComponent />}></Route>
        </main>
      </div>
    </authContext.Provider>
  );
}

export default App;
