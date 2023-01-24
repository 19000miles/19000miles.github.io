import { NavBar } from './components/NavBar.js';
import { Footer } from './components/Footer.js';
import { ContactUs } from './components/ContactUs.js';
import imghome from './snow-img.jpg';
import './Home.css'
function Snow() {
  return (
    
    <div className="Home">
      
      <NavBar />
      <header className="Home-header Home-img" style={{backgroundImage:`url(${imghome})`}} >
        <h1> Comming soon...</h1>
      </header>
    
      
      <Footer/>
    </div>
  );
}

export default Snow;
