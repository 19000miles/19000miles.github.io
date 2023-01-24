import logo from './logo.svg';
import imghome from './img-home.jpg';
import roadimg from './road-img.jpg';
import snowimg from './snow-img.jpg';
import campimg from './camping-img.jpg';
import './Home.css';
import { Link } from 'react-router-dom';
import { NavBar } from './components/NavBar.js';
import { Footer } from './components/Footer.js';
import { ContactUs } from './components/ContactUs.js';
function Home() {
  return (
    
    <div className="Home">
      <NavBar />
      <header className="Home-header Home-img" style={{backgroundImage:`url(${imghome})`}} >
        <h1> Welcome to 19 Thousand Miles</h1>
      </header>
      <div className="AboutUsHeader"> 
        <h2>About Us</h2>
      </div> 
      <div className='Home-section2'>
      
        <div className='section2-img' style={{backgroundImage:`url(${roadimg})`}}>
        
        <Link to={'/roadtrip'}><button className='img-button button-white'>Road trip</button></Link>
        </div>
        <div className='section2-img' style={{backgroundImage:`url(${campimg})`}}>
        
        <Link to={'/camping'}><button className='img-button button-white'>Camping</button></Link>  
        </div>
        <div className='section2-img' style={{backgroundImage:`url(${snowimg})`}}>
        
        <Link to={'/snow'}><button className='img-button button-white'>Snow</button></Link>
        </div>
      </div>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default Home
