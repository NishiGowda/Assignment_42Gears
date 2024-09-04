import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faChartBar, faQrcode } from '@fortawesome/free-solid-svg-icons';
import './Layout.css';

const Sidebar = () => (
    <div className="sidebar">
        {/* <div className="logo">42GEARS</div> */}
        <ul className="menu">
            <li><Link to="/menu1"><FontAwesomeIcon icon={faLayerGroup} /> Menu 1</Link></li>
            <li><Link to="/menu2"><FontAwesomeIcon icon={faChartBar} /> Menu 2</Link></li>
            <li><Link to="/menu3"><FontAwesomeIcon icon={faQrcode} /> Menu 3</Link></li>
        </ul>
    </div>
);

export default Sidebar;