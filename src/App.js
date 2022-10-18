import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { About } from './components/About';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    {/* <Navbar title ="Text Util"/>  
          <TextForm heading="Write your text below"/> */}
            <Navbar title="Text Util"/>
          <Router>
          <Routes>
          <Route path='/' element={<TextForm heading="Write your text below"/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/about' element={<About/>}/>
            
        
          
         
        </Routes>
        </Router>
    </>

    
        
  );
}


export default App;
