import React from 'react';
import classes from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.links}>
        <div className={classes.link}>
          <Link to="/about"><h3 className={classes['link-heading']}>About</h3></Link>
          <ul>
            <li><a>Contact Us</a></li>
            <li><a>About Us</a></li>
            <li><a>Careers</a></li>
            <li><a>Press</a></li>
            <li><a>Corporate Information</a></li>
          </ul>
        </div>
        <div className={classes.link}>
          <Link to="/help"><h3 className={classes['link-heading']}>Help</h3></Link>
          <ul>
            <li><a>Payments</a></li>
            <li><a>Cancellation Policy</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>
        <div className={classes.link}>
          <Link to="/consumer"><h3 className={classes['link-heading']}>Consumer Policy</h3></Link>
          <ul>
            <li><a>Cancellation Policy</a></li>
            <li><a>Terms of Use</a></li>
            <li><a>Privacy</a></li>
            <li><a>Security</a></li>
          </ul>
        </div>
        <div className={classes.link}>
          <Link to="/social"><h3 className={classes['link-heading']}>Social</h3></Link>
          <ul>
            <li><a>Facebook</a></li>
            <li><a>Instagram</a></li>
            <li><a>Twitter</a></li>
          </ul>
        </div>
        <div className={classes.link}>
          <div className={classes.vl}></div>
        </div>
        <div className={classes.link}>
          <h3 className={classes['link-heading']}>Write to Us</h3>
          <p>rathin.bhatt2027@webkitURL.food.in</p>
        </div>
        <div className={classes.link}>
          <h3 className={classes['link-heading']}>Address</h3>
          <p>Jl. Juanda No. 88, Jember, YO 04889Suite 255 Jl<br />Diponegoro No. 41, Lhokseumawe, NT 99765Suite 786 49695<br /> Dario Valley, Corkeryshire, MN 91575</p>
        </div>
      </div>
      <div className={classes.hl}></div>
      <div className={classes.options}>
        <div className={classes.option}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={classes['option-icon']}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
        </svg>
          <span>Become A Partner</span></div>
        <div className={classes.option}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={classes['option-icon']}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
          <span>Adevertise</span></div>
        <div className={classes.option}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={classes['option-icon']}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
          <span>Voucher</span></div>
        <div className={classes.option}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={classes['option-icon']}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
        </svg>
          <span>Support</span></div>
        <div><span>&#169;Copyright2023</span></div>
      </div>
    </div>
  );
}

export default Footer;