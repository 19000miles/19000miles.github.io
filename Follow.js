import { NavBar } from './components/NavBar.js';
import { Footer } from './components/Footer.js';
import imghome from './img-home.jpg';
import './Home.css'
import './Follow.css'
import IS from './IS2.png';
import TIK from './Tik2.png';
import TWIT from './Twit2.png';
import YOUT from './youtube2.png';

function Follow() {
  return (
    
    <div className="Home">
      
      <NavBar />
      <header className="FollowBody Home-img" style={{backgroundImage:`url(${imghome})`}} >
      <div className="FollowLogos">
      <a href="https://www.instagram.com/19000miles"><img src={IS} className="social-logo2" alt="19thousandmilesInstagram"  /></a>
            <a href="https://www.tiktok.com/@19000miles"><img src={TIK} className="social-logo2" alt="19thousandmilesTikTok" /></a>
            <a href="https://www.twitter.com/19000miles"><img src={TWIT} className="social-logo2" alt="19thousandmilesTwitter" /></a>
            <a href="https://www.youtube.com/@19000miles"><img src={YOUT} className="social-logo2" alt="19thousandmilesYoutube" /></a>
            
      </div>
        
      </header>
      <Footer/>
    </div>
  );
}

export default Follow;
