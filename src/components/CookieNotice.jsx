import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from '../contexts/CookieContekst';

const CookieNotice = () => {
  const { cookiesAccepted, acceptCookies } = useCookies();

  if (cookiesAccepted) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.cookieContainer}>
        <p>Ova stranica koristi kolačiće kako bi osigurala najbolje iskustvo na našoj web stranici.</p>
        <div style={styles.buttonContainer}>
          <button style={styles.acceptButton} onClick={acceptCookies}>
            Slažem se
          </button>
          <Link to="/politika-privatnosti" style={styles.privacyLink}>
            Politika privatnosti
          </Link>
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
      width: '1000px',
      justifyContent: 'center',
    },
    buttonContainer: {
      marginTop: '10px',

    },
    acceptButton: {
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
      borderRadius: '5px',
      marginRight: '10px',
    },
    privacyLink: {
      color: '#0000EE',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  };

export default CookieNotice;
