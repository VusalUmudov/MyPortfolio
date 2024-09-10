import './App.css';
import Navbar from './Components/Navbar';
import Main from './Pages/Main';
import Footer from './Components/Footer';
import MyWork from './Pages/MyWork';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Main/>
    <About/>
    <MyWork/>
    <Contact/>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
