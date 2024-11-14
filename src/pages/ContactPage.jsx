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
<Helmet>
  {/* Osnovni meta tagovi za SEO */}
  <title>Kontakt - In-3m Interijeri</title>
  <meta name="description" content="Kontaktirajte nas za sve informacije o proizvodima i uslugama tvrtke In-3M Interijeri. Ovdje smo za sve vaše upite!" />
  <meta name="keywords" content="kontakt, In-3M Interijeri, namještaj, prilagođeni namještaj, interijeri" />
  <meta name="robots" content="index, follow" /> {/* Preporučuje se za bolje SEO indeksiranje */}

  {/* Open Graph za društvene mreže */}
  <meta property="og:title" content="Kontakt - In-3M Interijeri" />
  <meta property="og:description" content="Kontaktirajte nas za sve informacije o proizvodima i uslugama tvrtke In-3M Interijeri." />
  <meta property="og:url" content="https://in-3minterijeri.com/kontakt" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="%PUBLIC_URL%/social.webp" /> {/* Zamijenite s pravom URL adresom slike */}

  {/* Twitter Card za dijeljenje na Twitteru */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Kontakt - In-3M Interijeri" />
  <meta name="twitter:description" content="Kontaktirajte nas za sve informacije o proizvodima i uslugama tvrtke In-3M Interijeri." />
  <meta name="twitter:image" content="%PUBLIC_URL%/social.webp" /> {/* Zamijenite s pravom URL adresom slike */}

  {/* Kanonska veza za izbjegavanje dupliciranog sadržaja */}
  <link rel="canonical" href="https://in-3minterijeri.com/kontakt" />

  {/* Dodatni meta tag za jezik */}
  <meta http-equiv="Content-Language" content="hr" /> {/* Ovisno o jeziku stranice */}
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
                "item": "https://in-3minterijeri.com/kontakt"
              }
        
            ]
          })}
        </script>
</Helmet>

      <main>
        <section>
          <div className="title-contact-page">
            <div className="title-box1">
              <h2>Kontakt</h2>
              <h1>In-3m Interijeri</h1>
            </div>
            <div className="title-box2">
              <p>
                OIB: <span>01482090940</span>
              </p>
              <p>
                MBO: <span>98471236</span>
              </p>
              <p>
                IBAN: <span>HR9123400091160694286</span>
              </p>
              <br />
              <p>TEL:
                <span> <a href="tel:+385917208379"title="Klik za poziv">+385 91 720 8379</a></span>
              </p>
      <p>
      <address>
           Gornje Selo 32
            <br />
            44317 Osekovo – Hrvatska
            </address>
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
