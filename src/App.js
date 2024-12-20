//import logo from './logo.svg';
import './App.css';
import LoginScreen from './screens/loginscreen/LoginScreen';
import Dashboard from './screens/dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <div className="App">
       <GlobalProvider>
        <Router>
            <Routes>
                <Route path="/web/login" element={<LoginScreen />} />
                <Route path="/web/dashboard/*" element={<Dashboard />} />
                <Route path="/web/*" element={<Navigate to="/web/login" />} />

            </Routes>
        </Router>
        </GlobalProvider>
    </div>
  );
}

export default App;
