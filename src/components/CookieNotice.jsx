import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from '../contexts/CookieContekst';

const CookieNotice = () => {
  const { cookiesAccepted, acceptCookies } = useCookies();
  const navigate = useNavigate();

  if (cookiesAccepted) return null;

  const handlePrivacyClick = () => {
    navigate('/politika-privatnosti');
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.cookieContainer}>
        <p>Ova stranica koristi kolačiće kako bi osigurala najbolje iskustvo na našoj web stranici.</p>
        <div style={styles.buttonContainer}>
          <button style={styles.acceptButton} onClick={acceptCookies}>
            Slažem se
          </button>
          <button style={styles.acceptButton} onClick={handlePrivacyClick}>
            <Link to="/politika-privatnosti" style={styles.privacyLink}>
              Politika privatnosti
            </Link>
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
    alignItems: 'center',
    zIndex: 1000,
  },
  cookieContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    width: '80%', // prilagođeno za različite veličine ekrana
    maxWidth: '500px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  },
  buttonContainer: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
  },
  acceptButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginRight: '10px',
    textDecoration: 'none',
  },
  privacyLink: {
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer',
  },
};

export default CookieNotice;
