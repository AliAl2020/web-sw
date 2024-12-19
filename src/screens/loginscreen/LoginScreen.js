import React, { useState } from 'react';
import './LoginScreen.css'; // Optional for custom styles
import Image1 from '../../assets/images/Image1.png';
import axios from 'axios';
import { Config} from '../../conf/Config';
import { jwtDecode }from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const handleLogin =async (e) => {

        e.preventDefault();

        try {
            const response = await axios.post(Config.LOGIN_URL, { email:email, password:password });
            console.log(response.data);
            const { token, message } = response.data;
      
            if (response.status === 200) {
              //Alert.alert('Erfolg', message);
              const decodedToken = jwtDecode(token);
              const expirationTime = decodedToken.exp;
              const taxId = decodedToken.steuer_id;
              const email = decodedToken.email;
              console.log(expirationTime.toString());
              console.log(taxId.toString());
              console.log(email.toString());
              navigate('/web/dashboard');

            } else {
                setError('Fehler', message || 'Unbekannter Fehler');
            }
          } catch (error) {
            console.error('Login-Fehler:', error);
            setError('Fehler', 'Anmeldung fehlgeschlagen. Bitte versuchen Sie es erneut.');
          } finally {
            
          }
          console.log("click on login");
          
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100 bg-dark">
            {/* Logo and Title */}
            <div className="text-center mb-4 justify-content-center">
                <img
                    src={Image1} // Replace with your app logo URL
                    alt="App Logo"
                    className="responsive-logo"
                    
                />
                <h1 className="text-light">Meine Steuerwelt</h1>
            </div>

            {/* Login Card */}
            <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleLogin}>
                <div className="form-floating mb-3">
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <label htmlFor="email">Email</label>
            </div>

            <div className="form-floating mb-3">
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Passwort</label>
            </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Einloggen
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginScreen;
