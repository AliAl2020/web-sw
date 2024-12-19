import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { FaHome, FaBriefcase, FaUsers, FaArchive, FaSignOutAlt } from 'react-icons/fa';
import Overview from './overview/Overview';
import Employer from './employer/Employer';
import Employee from './employee/Employee';
import Archiv from './archiv/Archiv';
import Logout from './logout/Logout';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            {/* Main Content */}
            <div className="content">
                <Routes>
                    <Route path="/" element={<Navigate to="/dashboard/overview" />} /> {/* Default route */}
                    <Route path="overview" element={<Overview />} />
                    <Route path="employer" element={<Employer />} />
                    <Route path="employee" element={<Employee />} />
                    <Route path="archiv" element={<Archiv />} />
                    <Route path="logout" element={<Logout />} />
                    <Route path="*" element={<Navigate to="/dashboard/overview" />} />
                </Routes>
            </div>

            {/* Bottom Navigation */}
            <nav className="bottom-nav">
                <NavLink to="/dashboard/overview" className="bottom-nav-item">
                    <FaHome className="nav-icon" />
                    <span>Übersicht</span>
                </NavLink>
                <NavLink to="/dashboard/employer" className="bottom-nav-item">
                    <FaBriefcase className="nav-icon" />
                    <span>Gewerbe</span>
                </NavLink>
                <NavLink to="/dashboard/employee" className="bottom-nav-item">
                    <FaUsers className="nav-icon" />
                    <span>Mitarbeiter</span>
                </NavLink>
                <NavLink to="/dashboard/archiv" className="bottom-nav-item">
                    <FaArchive className="nav-icon" />
                    <span>Archiv</span>
                </NavLink>
                <NavLink to="/dashboard/logout" className="bottom-nav-item">
                    <FaSignOutAlt className="nav-icon" />
                    <span>Abmeldung</span>
                </NavLink>
            </nav>
        </div>
    );
};

export default Dashboard;
