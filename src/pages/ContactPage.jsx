import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../components/ContactForm";

import "../styles/pages/ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Helmet></Helmet>
      <main>
        <section>
          <div className="title-contact-page">
            <div className="title-box1">
              <h2>Kontakt</h2>
              <h1>In-3m Interijeri</h1>
            </div>
            <div className="title-box2">
              <p>
                OIB: <span>12345678901</span>
              </p>
              <p>
                MB: <span>12345678901</span>
              </p>
              <p>
                IBAN: <span>hr467467412345678901</span>
              </p>
              <br />
              <p>TEL:
                <span> <a href="tel:+385917208379"title="Klik za poziv">+385 91 720 8379</a></span>
              </p>
             
              <div className="button">
                <button>
                  <Link to="/proizvodi">
                    Proizvodi <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
        <ContactForm />
      </main>
    </div>
  );
};

export default ContactPage;
