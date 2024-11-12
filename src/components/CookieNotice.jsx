import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from '../contexts/CookieContekst';

const CookieNotice = () => {
  const { cookiesAccepted, acceptCookies } = useCookies();

  useEffect(() => {
    if (!cookiesAccepted) {
      window.scrollTo(0, 0); // Pomak na vrh stranice kada se komponenta učita
    }
  }, [cookiesAccepted]);

  if (cookiesAccepted) return null;


  return (
    <div style={styles.overlay}>
      <div style={styles.cookieContainer}>
        <p>Ova stranica koristi kolačiće kako bi osigurala najbolje iskustvo na našoj web stranici. Više informacija na <Link to="/politika-privatnosti" >
              Politika privatnosti
            </Link>.</p>
        <div style={styles.buttonContainer}>
          <button style={styles.acceptButton} onClick={acceptCookies}>
            Razumijem
          </button>
            
        </div>
        
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Dodajte za vertikalno centriranje
    zIndex: 1001,
  },
  
  cookieContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '500px',
    height: '200px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    position: 'fixed',
    top: '0', // Dodajte ovaj red
    bottom: '0', // Ostavite ovo kako biste postigli centriranje
    zIndex: 1002,
    margin: 'auto', // Za centriranje po vertikali i horizontali
  },
  
  buttonContainer: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-around',
  },
  acceptButton: {
    backgroundColor: '#1c5b1e',
    color: 'white',
    border: 'none',
    padding: '12px 24px', // povećano padding za veći dodirni cilj
    cursor: 'pointer',
    borderRadius: '5px',
    //marginRight: '10px',
    fontSize: '16px', // povećan font za bolju čitljivost
    minWidth: '150px',
    height:'3rem', // osigurava minimalnu širinu gumba
    justifyContent: 'center',
    marginTop: '2rem', 
  },
  privacyLink: {
    color: 'white',
    textDecoration: 'none',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '14px', // manji font za poveznicu
    display: 'block', // omogućava lakše ciljanje i klikabilnost
    //marginTop: '10px', // dodan razmak između gumba i poveznice
  },
};


export default CookieNotice;
