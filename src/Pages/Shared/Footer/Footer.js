import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
      <footer
      style={{background: `url(${footer})`,
      backgroundSize: 'cover'
      }}>
        <div className='footer pt-16 pb-28 '>
        <div >
        <span className="footer-title">Services</span> 
        <Link className="link link-hover">Emergency Checkup</Link>
        <Link className="link link-hover">Monthly Checkup</Link>
        <Link className="link link-hover">Weekly Checkup</Link>
        <Link className="link link-hover">Deep Checkup</Link>
      </div> 
      <div>
        <span className="footer-title">Oral Health</span> 
        <Link className="link link-hover">Fluoride Treatment</Link>
        <Link className="link link-hover">Cavity Filling</Link>
        <Link className="link link-hover">Teath Whitening</Link>
      </div> 
      <div>
        <span className="footer-title">Our Address</span> 
        <Link className="link link-hover">New York - 101010 Hudson</Link>
      </div>
      <div>
        </div>
     
      </div>
        <p className='text-center pb-5'>Copyright 2022 All Rights Reserved</p>
    </footer>
    );
};

export default Footer;