import React, { createContext, useState, useEffect, useContext } from 'react';

const CookieContext = createContext();

export const useCookies = () => useContext(CookieContext);

export const CookieProvider = ({ children }) => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (accepted) {
      setCookiesAccepted(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setCookiesAccepted(true);
  };

  return (
    <CookieContext.Provider value={{ cookiesAccepted, acceptCookies }}>
      {children}
    </CookieContext.Provider>
  );
};
