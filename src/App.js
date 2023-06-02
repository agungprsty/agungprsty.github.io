import Timer from './components/Countdown/Timer';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-wrapper">
        <h3 className="App-header">Coming Soon!</h3>
        <p className="App-text">
          Lorem ipsum dolor sit amet consectetur <br />
          adipisicing elit sed eiu sit amet consectetur adipisicing
        </p>
        <Timer />
        <Footer />
        <Preloader />
      </header>
    </div>
  );
}

export default App;
