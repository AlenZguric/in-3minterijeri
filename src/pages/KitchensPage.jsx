import React from 'react'
import { Helmet } from 'react-helmet'
import NavBar from '../components/NavBar'

const KitchensPage = () => {
  return (
    <div className='kitchens-page'>
        <Helmet>

        </Helmet>
        <NavBar/>
        <main style={{height: '100vh'}}>
            <h1>Kitchens</h1>

        </main>
        </div>
  )
}

export default KitchensPage;