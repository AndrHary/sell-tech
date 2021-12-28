
import './App.css';
import { Route, useHistory, Switch } from 'react-router-dom';
import { useState} from "react";
import HeaderComponent from './components/Header/HeaderComponent';
import WelcomeComponent from './components/WelcomePageComponent/WellcomeComponent';
import LoginForm from './components/LoginComponent/LoginComponent';
import RegisterComponent from './components/RegisterComponent/RegisterComponent';
import AllItems from './components/AllItems/AllItems';
import CreateItem from './components/CreateItem/CreateItem';
import MyProfileComponent from './components/MyProfile/MyProfileComponent';
import DetailsItemComponent from './components/DetailsItemComponent/DetailsItemComponent';
import AllItemsByCategoryComponent from './components/AllItemsByCategory/AllItemsByCategoryComponent';
import { authContext } from './contexts/authContext.js'
import isAuth from './HOC/authHOC';
import EditComponent from './components/EditComponent/EditComponent';
import FavouriteComponent from './components/FavouriteComponent/FavouriteComponent';
import ErrorPageComponent from './components/ErrorPageComponent/ErrorPageComponent';
function App() {
  let history = useHistory()
  let [userLog, setUser] = useState({})
  let onLogin = (user) => {
    setUser(user)
  }
  let onLogout = () => {
    setUser({})
    history.push('/')
  }
  return (
    <authContext.Provider value={userLog}>
      <div className="App">
        <header>
          <HeaderComponent/>
        </header>
        <main>
          <Switch>
          <Route path="/" exact component={WelcomeComponent}></Route>
          <Route path="/users/login" component={() => <LoginForm onLogin={onLogin} />}></Route>
          <Route path="/users/register" component={() => <RegisterComponent onLogin={onLogin} />}></Route>
          <Route path="/items/newest-items" component={() => <AllItems />}></Route>
          <Route path="/items/create-item" component={isAuth(CreateItem)}></Route>
          <Route path="/users/:username/profile" component={() => <MyProfileComponent onLogout={onLogout}/>}></Route>
          <Route path="/items/:itemId/details" component={() => <DetailsItemComponent />}></Route>
          <Route path="/items/all-items/category/:category" component={() => <AllItemsByCategoryComponent />}></Route>
          <Route path="/items/:itemId/edit" component={() => <EditComponent />}></Route>
          <Route path="/items/:username/favourite" component={() => <FavouriteComponent />}></Route>
          <Route path='*' component={ErrorPageComponent}></Route>
          </Switch>
        </main>
      </div>
    </authContext.Provider>
  );
}

export default App;
