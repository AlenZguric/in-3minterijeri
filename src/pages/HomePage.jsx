import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import WhyChooseUs from "../components/WhyChooseUs ";
import OurProducts from "../components/OurProducts";
import Questions from "../components/Questions";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

const scrollAnimation = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } }
};
const scrollAnimationDownRight = {
  hidden: { opacity: 0, x: 100, y: 100 }, 
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 1 } } 
};


const HomePage = () => {

useEffect(()=>{
  window.scrollTo(0,0);
},[])

  return (
    <div className="home-page">
      <Helmet>
        <title>Ne tražite namještaj - Izradite ga po mjeri</title>
        <meta
          name="description"
          content="Izradite namještaj po mjeri Vašeg životnog prostora. Pogledajte naše radove i inspiraciju."
        />
        <meta
          name="keywords"
          content="namještaj, izrada namještaja, interijeri, dizajn, izrada namještaja po mjeri, namještaj po mjeri, galerija kuhinja, kuhinje, kuhinje po mjeri"
        />
        <meta name="author" content="Alen Zgurić" />
      </Helmet>
      <header>
        <NavBar />
      </header>

      <main>
        <motion.section
          initial="hidden"
          whileInView="show"
          variants={scrollAnimation}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Header />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          variants={scrollAnimation}
          viewport={{ once: true, amount: 0.4 }}
        >
          <WhyChooseUs />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          variants={scrollAnimationDownRight}
          viewport={{ once: true, amount: 0.2 }}
        >
          <OurProducts />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          variants={scrollAnimation}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Questions />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          variants={scrollAnimation}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ContactForm />
        </motion.section>
      </main>
    </div>
  );
};

export default HomePage;