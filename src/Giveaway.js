import { NavBar } from './components/NavBar.js';
import { Footer } from './components/Footer.js';
import { ContactUs } from './components/ContactUs.js';
import imghome from './img-home.jpg';
import './Guiveaway.css'
import IS from './IS2.png';
import TIK from './Tik.png';
import TWIT from './Twit.png';
import YOUT from './youtube.png';

function GuiveAway() {
  return (
    
    <div className="Home">
      
      <NavBar />
      <header className="FollowBody Home-img" style={{backgroundImage:`url(${imghome})`}} >
      <div className="FollowLogos">
        <h1>Check the most recent Giveaway at our instagram:</h1>
      <a href="https://www.instagram.com/19000miles"><img src={IS} className="social-logo2" alt="19thousandmilesInstagram"  /></a>
        <h3>Terms and conditions bellow:</h3>
      </div>
      </header>
      <div className='Terms'>
  <h2>Terms and Conditions</h2>
  <ol>
    <li>
      <p>Eligibility: This giveaway is open to individuals who are 18 years or older.</p>
    </li>
    <li>
      <p>How to Enter: To enter the giveaway, participants must do the following:</p>
      <ul>
        <li>Follow @19000miles on Instagram.</li>
        <li>Comment on the giveaway post on Instagram, identifying one friend or more(each comment increases the probability) that would also like a pair of skis.</li>
        <li>Like the giveaway post on Instagram.</li>
      </ul>
    </li>
    <li>
      <p>Winner Selection: The winner of the giveaway will be selected at random from all eligible entries received. The winner will be contacted by direct message on Instagram within few days after the giveaway closes. If the winner does not respond to the notification within 5 days, a new winner will be selected.</p>
    </li>
    <li>
      <p>Prize: The prize is one pair of skis. The prize is non-transferable and no cash alternative will be offered.</p>
    </li>
    <li>
      <p>General Terms: By participating in this giveaway, participants agree to be bound by these terms and conditions and the decisions of 19ThousandMiles, which are final and binding in all respects. [Insert company name] reserves the right to disqualify any participant who does not comply with these terms and conditions. [Insert company name] also reserves the right to cancel, modify or suspend the giveaway if, in its sole discretion, it determines that the giveaway is not capable of being conducted as planned or if any fraud or other problem corrupts the administration, security, fairness or integrity of the giveaway.</p>
    </li>
    <li>
      <p>Release and Limitations of Liability: By participating in the giveaway, participants agree to release and hold harmless 19ThousandMiles and its affiliates, and their respective directors, officers, employees and agents from any and all liability for any injuries, loss or damage of any kind arising from or in connection with the giveaway or receipt or use of the prize.</p>
    </li>
    <li>
      <p>Personal Information: By participating in the giveaway, participants agree to the collection, use, and sharing of their personal information as set out in 19ThousandMiles privacy policy.</p>
    </li>
  </ol>
</div>
      
      <Footer/>
    </div>
  );
}

export default GuiveAway;
