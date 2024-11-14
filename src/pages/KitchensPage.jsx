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
        <title>Kuhinje po mjeri | In3m Interijeri | kuhinje po mjeri suvremenog dizajna</title>
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
        <meta property="og:url" content="https://in-3minterijeri.com/kuhinje" />

        {/* Twitter Card metatagi */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kuhinje po mjeri | In3em Interijeri" />
        <meta
          name="twitter:description"
          content="Pogledajte našu kolekciju kuhinja po mjeri, s modernim dizajnom i vrhunskom izradom. Naše kuhinje su prilagođene vašim potrebama i prostoru."
        />
        <meta name="twitter:url" content="https://in-3minterijeri.com/kuhinje" />
        <meta name="twitter:image" content="%PUBLIC_URL%/social.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Naslovnica",
                "item": "https://in-3minterijeri.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Kuhinje",
                "item": "https://in-3minterijeri.com/kuhinje"
              }
            ]
          })}
        </script>
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
