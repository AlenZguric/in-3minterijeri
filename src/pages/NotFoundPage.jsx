import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
 <div className='not-found'>
        <div className="not-found-content">

        <p>Stranica koju tražite nije pronađena.</p>
        <Link to="/" title='Vrati se na Naslovnicu'>Vrati se na početnu stranicu</Link>
        </div>

    </div>
    </div>
   
  )
}

export default NotFoundPage