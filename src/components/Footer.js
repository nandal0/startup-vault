import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import {Link} from 'react-router-dom'

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <div>
        
  <footer class="footer">
  	 <div class="containner">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			{/* <h4>company</h4> */}
                   <div className="logoo">
                   {/* <div className="navbar-logo" > */}
<img src="https://uploads-ssl.webflow.com/60be6e42ecea08f815b762c3/60d63a5e002c46ace40429f6_logo.svg" width="120" alt="" />

                   </div>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
					   <Link  className="nav-links" to='/register'>	<li><a href="#">Register as dark store </a></li></Link>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			{/* <h4>get help</h4> */}
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			{/* <h4>online shop</h4> */}
  	 			<ul>
  	 				<li><a href="#">watch</a></li>
  	 				<li><a href="#">bag</a></li>
  	 				<li><a href="#">shoes</a></li>
  	 				<li><a href="#">dress</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				{/* <a href="#"><i class="fab fa-facebook-f"></i></a> */}
                       <FacebookIcon sx={{ fontSize: 40,paddingRight:2}}/>
  	 				{/* <a href="#"><i class="fab fa-twitter"></i></a> */}
                       <TwitterIcon sx={{ fontSize: 40,paddingRight:2}}/>
  	 				{/* <a href="#"><i class="fab fa-instagram"></i></a> */}
                       <InstagramIcon sx={{ fontSize: 40,paddingRight:2}}/>
  	 				{/* <a href="#"><i class="fab fa-linkedin-in"></i></a> */}
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </div>
  )
}

export default Footer