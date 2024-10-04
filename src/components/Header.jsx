import React from 'react'
import {motion} from "framer-motion";

import '../styles/components/Header.css';

const Header = () => {
  return (
   <div className="header-component">
       <motion.div
         className="box"
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
           duration: 0.3,
           ease: [0, 0.71, 0.2, 1.01],
           scale: {
             type: "spring",
             damping: 5,
             stiffness: 100,
             restDelta: 0.001
           }
         }}>
    <strong> <h1>Ne tražite namještaj</h1></strong>
     <h2>Izradite ga po mjeri Vašeg životnog prostora</h2>



         </motion.div>
    
     
  
   </div>
  )
}

export default Header