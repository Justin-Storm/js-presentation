import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Learn from './components/Learn';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Learn />
    </div>
  );
}

export default App;
