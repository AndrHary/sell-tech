
import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import WelcomeComponent from './components/WelcomePageComponent/WellcomeComponent';
function App() {
  return (
    <div className="App">
      <header>
        <HeaderComponent />
      </header>
      <main>
        <WelcomeComponent></WelcomeComponent>
      </main>
    </div>
  );
}

export default App;
