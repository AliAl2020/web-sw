import React, { useContext , useEffect } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { FaHome, FaBriefcase, FaUsers, FaArchive, FaSignOutAlt } from 'react-icons/fa';
import Overview from './overview/Overview';
import Employer from './employer/Employer';
import Employee from './employee/Employee';
import Archiv from './archiv/Archiv';
import Logout from './logout/Logout';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
const Dashboard = () => {

    const { globalState } = useContext(GlobalContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        // Initialization and validation
        if (!globalState.token || globalState.status !== "200" || !globalState.email || !globalState.taxId ) {
            console.warn('Invalid token or status. Redirecting to login...');
            navigate('/web/login'); // Redirect to login if validation fails
            console.warn(globalState.taxId);
            console.warn(globalState.token);
            console.warn(globalState.email);
            console.warn(globalState.status);
        }
    }, [globalState, navigate]); 
    console.log('usecontext', globalState)
    return (
        <div className="dashboard-container">
            {/* Main Content */}
            <div className="content">
                <Routes>
                    <Route path="/" element={<Navigate to="/web/dashboard/overview" />} /> {/* Default route */}
                    <Route path="overview" element={<Overview />} />
                    <Route path="employer" element={<Employer />} />
                    <Route path="employee" element={<Employee />} />
                    <Route path="archiv" element={<Archiv />} />
                    <Route path="logout" element={<Logout />} />
                    <Route path="*" element={<Navigate to="/web/dashboard/overview" />} />
                </Routes>
            </div>

            {/* Bottom Navigation */}
            <nav className="bottom-nav">
                <NavLink to="/web/dashboard/overview" className="bottom-nav-item">
                    <FaHome className="nav-icon" />
                    <span>Übersicht</span>
                </NavLink>
                <NavLink to="/web/dashboard/employer" className="bottom-nav-item">
                    <FaBriefcase className="nav-icon" />
                    <span>Gewerbe</span>
                </NavLink>
                <NavLink to="/web/dashboard/employee" className="bottom-nav-item">
                    <FaUsers className="nav-icon" />
                    <span>Mitarbeiter</span>
                </NavLink>
                <NavLink to="/web/dashboard/archiv" className="bottom-nav-item">
                    <FaArchive className="nav-icon" />
                    <span>Archiv</span>
                </NavLink>
                <NavLink to="/web/dashboard/logout" className="bottom-nav-item">
                    <FaSignOutAlt className="nav-icon" />
                    <span>Abmeldung</span>
                </NavLink>
            </nav>
        </div>
    );
};

export default Dashboard;
