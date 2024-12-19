

import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Archiv  from './archiv/Archiv.js';
import Employee from './employee/Employee';
import Employer from './employer/Employer';
import Logout from './logout/Logout';
import Overview from './overview/Overview';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            
            {/* Tab Navigation */}
            <nav>
                <NavLink to="/dashboard/overview" className="tab" activeClassName="active-tab">
                    Übersicht
                </NavLink>
                <NavLink to="/dashboard/employer" className="tab" activeClassName="active-tab">
                    Gewerbebereich
                </NavLink>
                <NavLink to="/dashboard/employee" className="tab" activeClassName="active-tab">
                    Mitarbeiter
                </NavLink>
                <NavLink to="/dashboard/archiv" className="tab" activeClassName="active-tab">
                    Archiv
                </NavLink>
                <NavLink to="/dashboard/logout" className="tab" activeClassName="active-tab">
                    Logout
                </NavLink>
            </nav>
            
            {/* Tab Content */}
            <Routes>
                <Route path="/dashboard/overview" element={<Overview />} />
                <Route path="/dashboard/employer" element={<Employer />} />
                <Route path="/dashboard/employee" element={<Employee />} />
                <Route path="/dashboard/archiv" element={<Archiv />} />
                <Route path="/dashboard/logout" element={<Logout />} /> 
                <Route path="*" element={<Overview />}/> 
            </Routes>
        </div>
    );
};

export default Dashboard;
