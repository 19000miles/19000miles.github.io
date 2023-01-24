import './ContactUs.css'
import imghome from '../Background5.jpg';

export const ContactUs = () => {
  return( 
  
        <div className='ContactUsMain' style={{backgroundImage:`url(${imghome})`}}>
            
            <div className='ContactUs'>
            <h2>Contacts</h2>
            <h3>Have a question or want to learn more about our adventures? We'd love to hear from you!</h3>
            <p >We are always looking for new sponsorships and partnerships to help us continue exploring and sharing our adventures. If you are interested in working with us, please don't hesitate to reach out via e-mail or use our social media links bellow. We look forward to connecting with you!</p>
            <a href= "mailto:19thousandmiles@gmail.com"  ><button className=' button-white' > Contact us</button></a>
            </div>
        </div>
        
    
  );

}