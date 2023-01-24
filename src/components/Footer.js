import './Footer.css'
import IS from '../IS2.png';
import TIK from '../Tik2.png';
import TWIT from '../Twit2.png';
import YOUT from '../youtube2.png';
export const Footer = () => {
  return( 
  
        <div className='Footer'>
            <h5>Copyright © 2023 19ThousandMiles - All rights reserved.</h5>
            <div className='social-logo-div'>
            <a href="https://www.instagram.com/19000miles"><img src={IS} className="social-logo" alt="19thousandmilesInstagram"  /></a>
            <a href="https://www.tiktok.com/@19000miles"><img src={TIK} className="social-logo" alt="19thousandmilesTikTok" /></a>
            <a href="https://www.twitter.com/19000miles"><img src={TWIT} className="social-logo" alt="19thousandmilesTwitter" /></a>
            <a href="https://www.youtube.com/@19000miles"><img src={YOUT} className="social-logo" alt="19thousandmilesYoutube" /></a>   
            </div>
        </div>
        
    
  );

}