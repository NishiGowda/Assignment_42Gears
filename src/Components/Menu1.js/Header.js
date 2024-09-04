import React from 'react';
import './Layout.css';
import logo from '../../assests/42Gears Logo.png';
import { FaArrowRightLong, FaAngleDown } from 'react-icons/fa6'; // Make sure the path is correct

const Header = () => (
    <div className="header">
        <div className="logo">
            <img src={logo} alt="42Gears Logo" />
        </div>
        <div className="user-info">
            <span>Test User <FaAngleDown /></span>
            <button>
                Logout <FaArrowRightLong />
                {/* <img src={require('../../assests/Logout_Arrow.svg')} alt="Logout Arrow" className="logout-icon" /> */}
            </button>
        </div>
    </div>
);

export default Header;