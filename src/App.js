import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './Components/Menu1.js/Sidebar';
import Header from './Components/Menu1.js/Header';
import Menu1 from './Components/Menu1.js/Menu'; // Corrected import for Menu1
import Menu2 from './Components/Menu2.js/Menu2'; // Make sure this component exists
import Menu3 from './Components/Menu3.js/Menu3'; // Make sure this component exists
import './Components/Menu1.js/Layout.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <div className="main-content">
                    <Header />
                    <Routes>
                        <Route path="/menu1" element={<Menu1 />} />
                        <Route path="/menu2" element={<Menu2 />} />
                        <Route path="/menu3" element={<Menu3 />} />
                        <Route path="/" element={<Navigate to="/menu1" />} />
                        {/* Default route for unmatched paths */}
                        <Route path="*" element={<Navigate to="/menu1" />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
