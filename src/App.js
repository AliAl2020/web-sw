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
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="*" element={<Navigate to="/login" />} />

            </Routes>
        </Router>
      
    </div>
  );
}

export default App;
