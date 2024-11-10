import React from "react";
import KitchenComponent from "../components/KitchenComponent";
import { kitchensData } from "../styles/utils/kitchensData";
import { Helmet } from "react-helmet";
import LazyLoad from "react-lazyload";
import { motion } from "framer-motion";
import { scrollAnimations } from "../styles/utils/animations/animations";

import "../styles/pages/KitchensPage.css";

const KitchensPage = () => {
  return (
    <div className="kitchens-page">
      <Helmet>
        <title>Kuhinje po mjeri | In3em Interijeri</title>
        <meta
          name="description"
          content="Pogledajte našu kolekciju kuhinja po mjeri, s modernim dizajnom i vrhunskom izradom. Naše kuhinje su prilagođene vašim potrebama i prostoru."
        />
        <meta
          name="keywords"
          content="kuhinje po mjeri, kuhinjski namještaj, moderni kuhinjski dizajn, personalizirane kuhinje, kuhinje po narudžbi"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph metatagi */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kuhinje po mjeri | In3em Interijeri" />
        <meta
          property="og:description"
          content="Pogledajte našu kolekciju kuhinja po mjeri, s modernim dizajnom i vrhunskom izradom. Naše kuhinje su prilagođene vašim potrebama i prostoru."
        />
        <meta property="og:url" content="https://www.in3em-interijeri.com/kuhinje" />

        {/* Twitter Card metatagi */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kuhinje po mjeri | In3em Interijeri" />
        <meta
          name="twitter:description"
          content="Pogledajte našu kolekciju kuhinja po mjeri, s modernim dizajnom i vrhunskom izradom. Naše kuhinje su prilagođene vašim potrebama i prostoru."
        />
        <meta name="twitter:url" content="https://www.in3em-interijeri.com/kuhinje" />
      </Helmet>
      <main>
        {kitchensData.slice().reverse().map((kitchen, index) => (
          <LazyLoad key={index} height={200} offset={100}>
            <motion.section
              initial="hidden"
              whileInView="show"
              variants={index % 2 === 0 ? scrollAnimations.bounceUp : scrollAnimations.fadeInUp}
              viewport={{ once: true, amount: .2 }}
            >
              <KitchenComponent kitchen={kitchen} />
            </motion.section>
          </LazyLoad>
        ))}
      </main>
    </div>
  );
};

export default KitchensPage;
