import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Camping  from './Camping.js';
import  Roadtrip  from './Roadtrip.js';
import  Snow  from './Snow.js';
import  Home  from './Home.js'
import  Follow  from './Follow.js'
import  GiveAway  from './Giveaway.js'
import  Gear  from './Gear.js'
import './App.css';

function App() {
  
    return (
      <div className="App">
        
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/> 
            <Route path="/roadtrip" element={<Roadtrip />}/> 
            <Route path="/camping" element={<Camping />}/>
            <Route path="/snow" element={<Snow />}/>
            <Route path="/follow" element={<Follow />}/>
            <Route path="/giveaway" element={<GiveAway />}/>
            <Route path="/gear" element={<Gear />}/>
          </Routes>
        </Router>
        
      </div>
    );
  }
  
  export default App;
  