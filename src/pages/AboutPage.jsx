import React from "react";
import { Helmet } from "react-helmet";

import "../styles/pages/aboutPage.css";

const AboutPage = () => {
  return (
    <div className="aboutUs-page">
      <Helmet></Helmet>
      <main>
        <section>
          <article>
            <div className="title-aboutus">
              <h2>O nama</h2>
            </div>

            <div className="descriprion">
              <p>
                <strong>In-3M interijeri</strong> osnovani 2022. godine. <br />
                Mlada smo firma suočena sa velikim izazovima današnjice ali naša
                ustrajnost, ciljevi, vizije, zadovoljstvo i ljubav prema poslu koji
                radimo, te u konačnici zadovoljni klijenti motiv su za naše
                daljnje napredovanje i uspješno rješavanje izazova koji su pred
                nama. To opravdavamo dobivenim povjerenjem naših dosadašnjih
                klijenata. <br />
                Zadovoljstvo klijenata dokazuje da je način na koji poslujemo u
                potpunosti pouzdan i siguran za svakoga tko želi svoj
                interijer, dom ili poslovni prostor učiniti ljepšim, modernijim
                ili ga upotpuniti sa komadom namještaja za uređenje i
                funkcionalnost prostora.
              </p>
              <p>
                Firma smo koja ne prepoznaje serijsku proizvodnju, stoga je svaki
                naš projekt jedinstven, unikatan i napravljen baš po mjeri
                prostora i želji klijenta. Naravno, sve uz pravila struke, jer nam
                je osim izgleda izuzetno važna kvaliteta proizvoda. <br /> Zato u
                suradnji s našim partnerima u proizvodnji koristimo samo visoko
                kvalitetne i izdržljive materijale čime osiguravamo trajnost i
                funkcionalnost svakog komada namještaja. Želimo naglasiti da
                materijale nemamo na zalihama-nabavljamo ih tek kada sa
                klijentima dogovorimo detaljan plan izrade i suradnje. <br /> Time
                osiguravamo da svaki klijent dobija svoj novi materijal i ne
                radimo namještaj od <strong>"ostataka"</strong>. U potpunosti smo posvećeni
                stvaranju prilagođenih rješenja kuhinja, ormara, dječijih
                soba, kupaonskog namještaja, hodnika itd. koja odražavaju
                jedinstveni stil naših klijenata. <br /> Svjesni smo moći vizualizacije
                i koliko je ona važna klijentima u stvaranju te upravo zbog toga
                nastojimo maksimalno iskoristiti 3D prikaz kako bi klijentima
                prikazali u digitalnom konceptu njihove ideje i želje. Ono što
                posebno cijenimo prilikom izrade 3D prikaza je doprinos
                klijenata da nas upute u stvari koje žele, detalje koji im se
                sviđaju i ne sviđaju, stil, boje, dekore i materijale koji
                odgovaraju njihovom ukusu koje mogu izabrati iz naše široke
                palete ponude.
              </p>
              <p>
                Zajedno s Vama želimo ostati autentični i prenijeti naš trud za
                Vaš namještaj u Vaše zadovoljstvo. Stoga Vas pozivamo da nam se obratite
                sa povjerenjem i stavite pred nas još jedan izazov.
                Stojimo Vam na raspolaganju. <br /><br />
              <span> <strong>Kreirajmo interijer zajedno!</strong> </span> 
              </p>
            </div>
          </article>
        </section>
        <section>
          <article></article>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
