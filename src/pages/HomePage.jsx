import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import WhyChooseUs from "../components/WhyChooseUs ";
import OurProducts from "../components/OurProducts";
import Questions from "../components/Questions";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { scrollAnimations } from "../styles/utils/animations/animations";
import OurBusiness from "../components/OurBusiness";
import ScrollingText from "../components/ScrollingText";

import '../styles/pages/HomePage.css';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
 <Helmet>
        <title>In-3M Interijeri - Namještaj po mjeri za vaš dom</title>
        <meta
          name="description"
          content="Izradite namještaj po mjeri za svoj dom ili ured. Nudimo personalizirane kuhinje, kupaonice, ormare i predsoblja vrhunske kvalitete."
        />
        <meta
          name="keywords"
          content="namještaj po mjeri, kuhinje po mjeri, kupaonice, ormar, predsoblje, interijer, personalizirani namještaj"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph metatagi */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="In-3M Interijeri - Namještaj po mjeri za vaš dom" />
        <meta
          property="og:description"
          content="Izradite namještaj po mjeri za svoj dom ili ured. Nudimo personalizirane kuhinje, kupaonice, ormare i predsoblja vrhunske kvalitete."
        />
        <meta property="og:site_name" content="In-3m Interijeri"></meta>
        <meta property="og:image" content="URL_OG_IMAGE" />
        <meta property="og:url" content="https:/in3m-interijeri.web.app/" />

        {/* Twitter Card metatagi */}
        <meta name="twitter:card" content="https://in3m-interijeri.web.app/social.webp" />
        <meta name="twitter:title" content="In-3M Interijeri - Namještaj po mjeri za vaš dom" />
        <meta
          name="twitter:description"
          content="Izradite namještaj po mjeri za svoj dom ili ured. Nudimo personalizirane kuhinje, kupaonice, ormare i predsoblja vrhunske kvalitete."
        />
        <meta name="twitter:image" content="https://in3m-interijeri.web.app/social.webp" />
        <meta name="twitter:url" content="https:/in3m-interijeri.web.app/" />
      </Helmet>
      <main>
        <motion.section
         initial="hidden"
          whileInView="show"
          variants={scrollAnimations.bounceUp}
          viewport={{ once: true, amount: 0.05 }}
        >
          <Header />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          variants={scrollAnimations.bounceUp}
          viewport={{ once: true, amount: 0.05 }}
        >
          <OurBusiness />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          variants={scrollAnimations.bounceUp}
          viewport={{ once: true, amount: 0.05 }}
        >
          <WhyChooseUs />
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="show"
          variants={scrollAnimations.bounceUp}
          viewport={{ once: true, amount: 0.05 }}
        >
          <OurProducts />
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="show"
          variants={scrollAnimations.bounceUp}
          viewport={{ once: true, amount: 0.05 }}
        >
          <ScrollingText />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          variants={scrollAnimations.scaleUp}
          viewport={{ once: true, amount: 0.05 }}
        >
          <Questions />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          variants={scrollAnimations.scaleUp}
          viewport={{ once: true, amount: 0.05 }}
        >
          <ContactForm />
        </motion.section> 
      </main>
    </div>
  );
};

export default HomePage;
