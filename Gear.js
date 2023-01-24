import { NavBar } from './components/NavBar.js';
import { Footer } from './components/Footer.js';
import { ContactUs } from './components/ContactUs.js';
import imghome from './cameras.jpg';
import './Gear.css';

function Gear() {
  return (
    
    <div className="Home">
      
      <NavBar />
      <header className="Home-header  Gearheader" style={{backgroundImage:`url(${imghome})`}} >
        
        
      <h1> Cameras on road...</h1>
      </header>
      <div className='TextGear'>
        <h3 >Camera insta360 X2 ONE</h3>
Use our link with PROMO code that offers X2 ONE -Free Invisible Stick + Free Leens guards:
<a className='LinkPromo' href="https://www.insta360.com/sal/one_x2?insrc=INR83KS">Insta360 store</a>

<h3>Camera insta360 X3</h3>
Use our link with PROMO code that offers insta360 X3 -Free Invisible Stick + Free Leens guards:
<a className='LinkPromo' href="https://www.insta360.com/sal/x3?insrc=INR83KS">Insta360 store</a>


<h3>Camera Accessories(Premium Lens Guards) </h3>
Check more accessories to use with the camera, kits for ski, bike, creator, motorcycle, etc. using our code:
<a className='LinkPromo' href="https://store.insta360.com/accessory?insrc=INR83KS">Insta360 store</a>
 
        </div>
      
      <Footer/>
    </div>
  );
}

export default Gear;
