//import logo from './logo.svg';
import './App.css';
import LoginScreen from './screens/loginscreen/LoginScreen';
import Dashboard from './screens/dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/web/login" element={<LoginScreen />} />
                <Route path="/web/dashboard/*" element={<Dashboard />} />
                <Route path="/web/*" element={<Navigate to="/web/login" />} />

            </Routes>
        </Router>
      
    </div>
  );
}

export default App;
