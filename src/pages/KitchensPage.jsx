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
        <title>Kuhinje po mjeri</title>
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
