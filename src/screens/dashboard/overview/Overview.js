import MainTemplate from '../templates/maintamplate/MainTemplate.js';
import  {getUserInfo}  from '../graphql/getUserInfo';
import React, {  useContext, useEffect, useState   } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import { useLocation   } from 'react-router-dom';
const Overview = () => {
        const [email, setEmail] = useState('');
        const [userToken, setuserToken] = useState('');
        const [taxId, settaxId] = useState('');
    const [userInfo, setUserInfo] = useState(null);
    const location = useLocation();
    const { globalState, setGlobalState } = useContext(GlobalContext);
    const fetchUserData = async () => {
        console.log("you are now in fetchuser");
        try {
            setuserToken(globalState.token);
            setEmail(globalState.email);
            settaxId(globalState.taxId);

          if (globalState.email && globalState.token) {
            const data = await getUserInfo(globalState.email, globalState.token);
            //const address= await getAddresses(taxId, userToken);
            console.log('Benutzerdaten:', data);
            setUserInfo({ steuer_id: data.steuer_id, vorname: data.vorname, nachname: data.nachname });
            //setUserAddress(address);
          } else {
            //console.log('Email oder Token nicht verfügbar data is ',data);
            setUserInfo({ steuer_id: ' ', vorname: '', nachname: '' });
          }
        } catch (error) {
          console.error('Fehler beim Abrufen der Benutzerdaten:', error.message);
          setUserInfo({ steuer_id: 'Fehler', vorname: '', nachname: '' });
        } finally {
         // setLoading(false);
        }
      };
    //const [userAddress, setUserAddress] = useState(null); // Benutzerinfo-Status
   
    useEffect(() => {
      
  
      fetchUserData();
    }, [location.key]);

    return(<MainTemplate>

userInfo is: {JSON.stringify(userInfo, null, 2)}
    </MainTemplate>)
        
    }
    
    
    
    
    
    export default Overview