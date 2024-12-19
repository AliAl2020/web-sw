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
                <Route path="/screens/loginscreen/LoginScreen.js" element={<LoginScreen />} />
                <Route path="/screens/dashboard/Dashboard.js" element={<Dashboard />} />
                <Route path="*" element={<Dashboard />} />
                <Route path="/"  element={<Dashboard />} />

            </Routes>
        </Router>
      
    </div>
  );
}

export default App;
