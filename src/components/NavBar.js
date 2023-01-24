import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react'
import burguer from "../burguer.png";
import close from "../close.png";



import './NavBar.css';
import { Link } from 'react-router-dom';
export const NavBar = () => {
  const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
  
  return( 
  <Navbar expand="lg" className='nav-bar'>
        <div className="container33">
          <div className= "tab-navbar tab-navbar1">  </div>
          <div className= "tab-navbar tab-navbar2"> <Link to={'/roadtrip'} className="nav-link"> Road Trip </Link> </div>
          <div className= "tab-navbar tab-navbar3"> <Link to={'/camping'} className="nav-link"> Camping </Link> </div>
          <div className= "tab-navbar tab-navbar3"> <Link to={'/snow'} className="nav-link"> Snow </Link> </div>
        </div>
        <div className="container33 tab-navbar-center">
          <h1 href="/"><Link to={'/'} className="nav-link"> 19 Thousand Miles </Link></h1>
        </div>
        <div className="container33 tab-navbar-rigth"> 
          <div className= "tab-navbar tab-navbar4"> <Link to={'/follow'} className="nav-link"> Follow </Link> </div>
          <div className= "tab-navbar tab-navbar5"> <Link to={'/gear'} className="nav-link"> Gear </Link> </div>
          <div className= "tab-navbar tab-navbar3"> <Link to={'/giveaway'} className="nav-link"> GIVEAWAY </Link> </div>
        </div>

        <div className="navmobile" id={openLinks ? "open" : "close"}>
          
        <img src={close} className="iconclose" onClick={toggleNavbar} />
        <img src={burguer} className="iconreorder" onClick={toggleNavbar} />
        <div className="hiddenLinks">
        <div className="nav-link"><Link to={'/'} > Home </Link></div>
        
        <div className="nav-link"><Link to={'/roadtrip'} > Road Trip </Link></div>
        <div className="nav-link"><Link to={'/camping'}> Camping </Link></div>
        <div className="nav-link"><Link to={'/snow'} > Snow </Link></div>
        <div className="nav-link"><Link to={'/follow'} > Follow </Link></div>
        <div className="nav-link"><Link to={'/gear'} > Gear List </Link></div>
        <div className="nav-link link-giveaway"><Link to={'/giveaway'} > GIVEAWAY </Link></div>
        </div>
        
            
            
        </div>
    </Navbar>
  );

}