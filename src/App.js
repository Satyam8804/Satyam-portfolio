import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Projects from './Pages/Projects/Project';
import Contacts from './Pages/Contact/Contacts.js';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills.js';
import Loader from './Components/Loader/Loader';

function App() {
  
  return (
    <>
       <Loader/>
      <Router>
      <Navigation/>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/skills" Component={Skills}></Route>
        <Route path="/projects" Component={Projects}></Route>
        <Route path="/contact" Component={Contacts}></Route>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
