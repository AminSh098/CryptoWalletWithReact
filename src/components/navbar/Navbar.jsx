import {useState} from 'react';
import './navbar.css';
import Button from '../button/Button';
import { Menu } from '../../assets/index';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='CW__navbar'>
            <div class="CW__navbar-logo">
                <h1>B<span>.</span>Th</h1>
            </div>
            <div className="CW__navbar_container">
                <ul className="CW__navbar_container-list">
                    <li><a id="special-a" href="#">About Us</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">How it works</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>
            <div className='button'>
                <Button title='Download' />
            </div>
            <div className='CW__navbar_onSmallDevices'>
                {!isMenuOpen && (
                    <img src={Menu} alt="Menu" onClick={() => setIsMenuOpen(true)} />
                )}
                {isMenuOpen && (
                    <div className='CW__Menu'>
                        <img src={Menu} alt="CloseMenu" onClick={() => setIsMenuOpen(false)}/>
                        <ul className="CW__navbar_container_list-smallScreen">
                            <li><a id="special-a" href="#">About Us</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">How it works</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
  )
}

export default Navbar