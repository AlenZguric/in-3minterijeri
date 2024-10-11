import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import WhyChooseUs from "../components/WhyChooseUs ";
import OurProducts from "../components/OurProducts";
import Questions from "../components/Questions";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { scrollAnimations } from "../styles/utils/animations/animations";
import OurBusiness from "../components/OurBusiness";
import ScrollingText from "../components/ScrollingText";

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
        <meta name="author" content="Alen Zgurić" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="In-3M Interijeri" />
        <meta
          property="og:description"
          content="Personaliziran namještaj po mjeri za dom ili ured. Pogledajte našu ponudu i radove."
        />
        <meta property="og:image" content="URL_OG_IMAGE" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://in3m-interijeri.web.app" />
        <link rel="canonical" href="https://in3m-interijeri.web.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="In-3M Interijeri" />
        <meta
          name="twitter:description"
          content="Najbolji namještaj po mjeri za dom i ured."
        />
        <meta name="twitter:image" content="URL_TWITTER_IMAGE" />
      </Helmet>
      <header>
        <NavBar />
      </header>

      <main>
        <motion.section
          initial="hidden"
          whileInView="show"
          //variants={scrollAnimations.fadeInDownRight}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Header />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          variants={scrollAnimations.fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
        >
          <OurBusiness />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          variants={scrollAnimations.fadeInUp}
          viewport={{ once: true, amount: 0.3 }}
        >
          <WhyChooseUs />
        </motion.section>
<ScrollingText/>
        <motion.section
          initial="hidden"
          whileInView="show"
          variants={scrollAnimations.bounceUp}
          viewport={{ once: true, amount: 0.2 }}
        >
          <OurProducts />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          variants={scrollAnimations.scaleUp}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Questions />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          variants={scrollAnimations.scaleUp}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ContactForm />
        </motion.section>
      </main>
    </div>
  );
};

export default HomePage;
