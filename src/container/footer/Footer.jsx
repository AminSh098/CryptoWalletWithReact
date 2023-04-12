import { Facebook, Instagram, Twitter } from "../../assets";
import './footer.css';

const Footer = () => {
  return (
    <div className="CW__footer">
      <div className="CW__footer-container">
        <div className="CW__footer-topBar">
          <div className="CW__footer_topBar-aboutCompany">
            <div className="CW__footer_topBar_aboutCompany-content">
              <h1>B<span>.</span>Th</h1>
              <p>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard.</p>
            </div>
            <div className="CW__footer_topBar_aboutCompany-img">
            <img src={Facebook} alt="Facebook" /> 
            <img src={Twitter} alt="Twitter" /> 
            <img src={Instagram} alt="Instagram" /> 
            </div>
          </div>
          <div className="CW__footer_topBar-contactWays">
            <div className="CW__footer_topBar-aboutUs">
              <ul>
                <li><h3>About Us</h3></li>
                <li><a href="#">Whitepaper</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Activity</a></li>
              </ul>
            </div>
            <div className="CW__footer_topBar-support">
              <ul>
                <li><h3>Support</h3></li>
                <li><a href="#">Help & Support</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Author Profile</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="CW__footer-rights">
          <p>All rights reserved@2021</p>
        </div>
      </div>
    </div>
  )
}

export default Footer