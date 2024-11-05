import React from "react";
import { Helmet } from "react-helmet";
import { useCookies } from '../contexts/CookieContekst';

import "../styles/pages/PrivacyPolicyPage.css";

const PrivacyPolicyPage = () => {
  const { cookiesAccepted, acceptCookies } = useCookies();

  return (
    <div className="privacy-Policy-Page">
      <Helmet>
        <title>Privacy Policy</title>
        <meta name="description" content="Our privacy policy" />
      </Helmet>
      <main className="main-privacy-Policy-Page">
        <div className="main-privacy-Policy-Page-title">
          <h2>Izjava o zaštiti privatnosti</h2>
          {!cookiesAccepted && (
        <div style={styles.buttonContainer}>
          <button style={styles.acceptButton} onClick={acceptCookies}>
            Prihvaćam kolačiće
          </button>
        </div>
      )}
          <p>
            Ovom se izjavom obvezujemo štititi privatnost korisnika i
            posjetitelja naših mrežnih stranica <a href="http://https://in3m-interijeri.web.app/">https://in3m-interijeri.web.app/</a> uz
            sigurnost osobnih podataka primljenih u interakciji bilo kakve
            vrste.
          </p>
          <p>
            Ova obavijest opisuje vrstu informacija koje možemo prikupiti od vas
            kada posjetite i koristite naše mrežne stranice, objašnjava kako
            upotrebljavamo te podatke i korake koje poduzimamo da bismo ih
            zaštitili. Obavijest također opisuje izbore koje imate u vezi s
            prikupljanjem i korištenjem vaših podataka prilikom posjete našim
            mrežnim stranicama.
          </p>
          <p>
            Općenito, naše mrežne stranice možete posjetiti bez otkrivanja
            osobnih podataka o sebi <strong>prihvaćanja kolačića ili upisivanja svojih
            podataka u obrasce.</strong> Prilikom vašeg posjeta našim mrežnim stranicama
            ne prikupljaju se osobni podaci o vama kao što su vaše ime i
            pojedinosti o kontaktu, osim ako dobrovoljno ne pošaljete podatke o
            sebi kontaktnim obrascem i time date privolu da vam odgovorimo na
            vašu e-adresu.
          </p>
          <p>
            Svi osobni podaci koriste se isključivo u svrhe radi koje su
            prikupljeni i za koje je dana privola. Privolu za obradu osobnih
            podataka mogu dati osobe s navršenih 16 godina ili više, dok za
            osobe mlađe od 16 privolu može dati roditelj ili skrbnik.
            Prikupljene podatke nećemo ni na koji način učiniti dostupnima
            neovlaštenim trećim osobama, osim u zakonom propisanu svrhu. Svi
            podaci se brišu nakon prestanka svrhe za koju su prikupljeni, a
            najkasnije po isteku svih zakonskih obveza povezanih s čuvanjem
            osobnih podataka.
          </p>
          <p>
            U nastavku navodimo vrste podataka koje prikupljamo i dodatne
            okolnosti u kojima ćemo Vaše informacije podijeliti sa ovlaštenim
            trećim stranama i dodatne svrhe za koje koristimo Vaše podatke.
          </p>
          <h2>Koje informacije prikupljamo o vama i kako ih koristimo?</h2>
          <p>
            Automatski ili uz privolu korisnika i posjetitelja naših mrežnih
            stranica, naši mrežni poslužitelji i davatelji internetskih usluga
            koje koristimo prikupljaju niz podataka o aktivnostima posjetitelja
            i korisnika naših mrežnih stranica, a u određenim slučajevima (kada
            šalju e-poruke kontaktnim obrascem npr.) i njihove osobne podatke.
            Podaci koji se ne prikupljaju automatski bilježe se na uređaj s
            kojeg ste pristupili našim mrežnim stranicama pomoću tzv. kolačića
            (engl. cookies). Neki od tih kolačića automatski se brišu nakon što
            napustite naše mrežne stranice, a neki, ako je tako podešen vaš
            preglednik i ako ste za to dali svoju privolu, ostaju zabilježeni na
            vašem računalu, tabletu ili mobitelu.
          </p>
          <h2>Što je kolačić?</h2>
          <p>
            Kolačić je informacija spremljena na Vaše računalo od strane web
            stranice koju posjetite. Kolačići obično spremaju Vaše postavke,
            postavke za web stranicu, kao što su preferirani jezik ili adresa.
            Kasnije, kada opet otvorite istu web stranicu internet preglednik
            šalje natrag kolačiće koji pripadaju toj stranici. Ovo omogućava
            stranici da prikaže informacije prilagođene Vašim potrebama.
          </p>
          <p>
            Kolačići mogu spremati širok pojas informacija uključujući osobne
            informacije (kao što je Vaše ime ili e-mail adresa). Ipak, ova
            informacija može biti spremljena jedino ako Vi to omogućite – web
            stranice ne mogu dobiti pristup informacijama koji im Vi niste dali
            i ne mogu pristupiti drugim datotekama na Vašem računalu. Zadane
            aktivnosti spremanja i slanja kolačića Vama nisu vidljive. Ipak,
            možete promjeniti Vaše postavke internet preglednika da možete sami
            birati hoćete li zahtjeve za spremanje kolačića odobriti ili odbiti,
            pobrišete spremljene kolačiće automatski pri zatvaranju internet
            preglednika i slično.
          </p>
          <h2>Kako onemogućiti kolačiće?</h2>
          <p>
            Isključivanjem kolačića odlučujete da li hoćete dopustiti
            pohranjivanje kolačića na vašem računalu. Cookie postavke mogu se
            kontrolirati i konfigurirati u vašem web pregledniku. Za informacije
            o postavkama kolačića, odaberite web-preglednik koji koristite.
          </p>
          <ul>
            <li>
              Firefox:{" "}
              <a
                title="novi tab"
                href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                target="_blank"
                rel="noopener noreferrer"
              >
                Upravljanje kolačićima
              </a>
            </li>
            <li>
              Internet Explorer:{" "}
              <a
                title="novi tab"
                href="http://windows.microsoft.com/is-is/internet-explorer/delete-manage-cookies#ie=ie-10"
                target="_blank"
                rel="noopener noreferrer"
              >
                Upravljanje kolačićima
              </a>
            </li>
            <li>
              Google Chrome:{" "}
              <a
                title="novi tab"
                href="https://support.google.com/chrome/answer/95647?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Upravljanje kolačićima
              </a>
            </li>
            <li>
              Opera:{" "}
              <a
                title="novi tab"
                href="https://www.opera.com/help/tutorials/security/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Upravljanje kolačićima
              </a>
            </li>
            <li>
              Za ostale{" "}
              <a
                title="novi tab"
                href="http://www.aboutcookies.org/page-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                web preglednike
              </a>
            </li>
          </ul>
          <p>
            Ako onemogućite kolačiće, nećete moći koristiti neke od
            funkcionalnosti na web stranicama.
          </p>
          <h2>Što su privremeni kolačići?</h2>
          <p>
            Privremeni kolačići ili kolačići sesije uklanjaju se s računala po
            zatvaranju internet preglednika. Pomoću njih web-mjesta pohranjuju
            privremene podatke, poput stavki u košarici za kupnju.
          </p>
          <h2>Što su stalni kolačići?</h2>
          <p>
            Stalni ili spremljeni kolačići ostaju na računalu nakon zatvaranja
            programa internet preglednika. Pomoću njih web-mjesta pohranjuju
            podatke, kao što su ime za prijavu i lozinka, tako da se ne morate
            prijavljivati prilikom svakog posjeta određenom mjestu. Stalni
            kolačići ostat će na računalu danima, mjesecima, čak i godinama.
          </p>
          <h2>Što su kolačići od prve strane?</h2>
          <p>
            Kolačići od prve strane dolaze s web-mjesta koje gledate, a mogu
            biti stalni ili privremeni. Pomoću tih kolačića web-mjesta mogu
            pohraniti podatke koje će ponovo koristiti prilikom sljedećeg
            posjeta tom web-mjestu.
          </p>
          <h2>Što su kolačići od treće strane?</h2>
          <p>
            Kolačići treće strane dolaze s reklama drugih web-mjesta (kao što su
            skočne ili druge reklame) koje se nalaze na web-mjestu koje gledate.
            Pomoću tih kolačića web-mjesta mogu pratiti korištenje Interneta u
            marketinške svrhe.
          </p>
          <h2>Dodatne informacije oko isključivanja kolačića</h2>
          <p>
            Ako želite onemogućiti da vam navedeni servisi spremaju kolačiće,
            možete zabraniti za svaki servis na sljedećim linkovima:
          </p>
          <p>
            Google Analytics –{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://tools.google.com/ dlpage/gaoptout
            </a>
          </p>
          <p>
            Gemius –{" "}
            <a
              href="http://optout.hit.gemius.pl/removeEN.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://optout.hit.gemius.pl/ removeEN.php
            </a>
          </p>
          <p>
            Xiti –{" "}
            <a
              href="http://www.xiti.com/en/optout.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.xiti.com/en/optout. aspx
            </a>
          </p>
          <p>
            Responsive –{" "}
            <a
              href="http://www.responsive.la/postavke/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.responsive.la/postavke
            </a>
           
          </p>
          <p>
            Trenutno postoji nekoliko web stranica za isključivanje
            pohranjivanja kolačića za različite servise.
          </p>
          <p>Više se možete informirati na sljedećim linkovima:</p>
          <p><a href="http://www.allaboutcookies.org/">http://www.allaboutcookies.org/</a> </p>
          <p> <a href="http://www.youronlinechoices.eu/">http://www.youronlinechoices.eu/</a></p>
          
          <h2>Kako postupamo s porukama e-pošte koje nam šaljete?</h2>
          <p>
            Na našim mrežnim stranicama dostupan je gumb „Kontakt”, na kojem se
            nalazi odgovarajući obrazac za slanje e-poruka. Njega pokreće
            softver za slanje e-pošte koji vam omogućuje slanje upita,
            prijedloga ili komentara na zajedničku adresu e-pošte tvrtke 
            <strong> In-3m Interijeri.</strong>
          </p>
          <p>
            Podatke koje prenosite o sebi korištenjem obrazaca za slanje
            e-poruka koristimo kako bismo vam mogli odgovoriti na vaše upite i
            voditi zapisnik o vašim mišljenjima, primjedbama i prijedlozima.
            Kada šaljete takve poruke, zahtijevaju se vaši osobni podaci samo u
            mjeri u kojoj je to potrebno za odgovor. Ako službene osobe koje
            odgovaraju na poruke upućene na zajedničku adresu e-pošte tvrtke
            <strong> In-3m Interijeri</strong> ne mogu odgovoriti na vaše pitanje, mogu ga
            proslijediti drugoj osobi koja aktivno sudjeluje u radu tvrtke
            <strong> In-3m Interijeri.</strong> U tom slučaju odgovor ćete primiti od osobe
            kojoj je proslijeđen vaš upit.
          </p>
          <h2>Pristup i ažuriranje vaših osobnih podataka</h2>
          <p>
            Korisnici naših mrežnih stranica u svakom trenutku imaju sljedeća
            prava:
          </p>
          <p>
            pravo na uvid u podatke;
            <br />
            pravo na informiranost o obradi osobnih podataka;
            <br />
            pravo na prenosivost podataka;
            <br />
            pravo na povlačenje privole;
            <br />
            pravo na podnošenje prigovora;
            <br />
            pravo na ispravak i promjenu osobnih podataka u slučaju ako su
            podaci nepotpuni ili netočni;
            <br />
            pravo na brisanje u slučajevima kao što su prestanak svrhe obrade,
            povlačenje privole ili u slučaju podnošenja prigovora.
            <br />
            <br />
            Ako želite ostvariti neko od navedenih prava, kontaktirajte nas
            putem obrasca za kontaktili slanjem pošte na našu adresu koja je
            navedena na našoj mrežnoj stranici. Na vaše upite odgovorit ćemo u
            roku od 30 dana.
          </p>
          <h2>Sigurnost vaših osobnih podataka</h2>
          <p>
            Predani smo poduzimanju odgovarajućih tehničkih i organizacijskih
            mjera za zaštitu vaših osobnih podataka od neovlaštenog ili
            nezakonitog postupanja s njima i od njihovog slučajnog gubitka,
            uništenja ili oštećenja. Prilikom davanja vaših osobnih podataka
            putem naših mrežnih stranica, ove se informacije šalju putem
            interneta sigurno pomoću visokokvalitetnih šifriranja i spremaju na
            sigurne poslužitelje koji se nalaze u Europi i Sjedinjenim Američkim
            državama (kod tvrtki koje su uskladile svoje usluge s EU GDPR
            propisima i EU-US štitom privatnosti).
          </p>
          <h2>Pravo na pritužbu nadzornom tijelu</h2>
          <p>
            Ako smatrate da je obrada Vaših osobnih podataka u suprotnosti s
            Općom uredbom o zaštiti podataka, imate pravo podnijeti prigovor
            nadležnom nadzornom tijelu. Za područje Republike Hrvatske nadzorno
            je tijelo Agencija za zaštitu osobnih podataka, sa sjedištem na
            adresi: Martićeva ulica 14, 10000 Zagreb, Hrvatska, tel.: +385 1
            4609 000.
          </p>
          <h2>Pravo na povlačenje privole</h2>
          <p>
            Ako se obrada Vaših osobnih podataka temelji na privoli, imate je
            pravo u bilo kojem trenutku povući, bez ikakvih posljedica.
            Ispunjenje navedenih prava možete zahtijevati:
          </p>
          <ul>
            <li>Preporučenim pismom</li>
            <li>Putem e-mail adrese: <a href="mailto:info.in3m@gmail.com">info.in3m@gmail.com</a></li>
          </ul>
          <p>
            <strong>
              <br />
              Napomena
            </strong>{" "}
            – pri postavljanju zahtjeva nužna je identifikacija podnositelja
            zahtjeva.
          </p>
          <p>
            Šaljete li nam zahtjev pismom ili e-mailom, molimo priložite
            čitljivu kopiju važeće osobne iskaznice ili valjanu punomoć. Zbog
            zaštite Vas kao vlasnika svojih osobnih podataka nužna je
            indentifikacija.
          </p>
          <h2>Izmjena Izjave o privatnosti</h2>
          <p>
            Ovu Izjavu o privatnosti <strong> In-3m Interijeri</strong> može izmijeniti u
            bilo kojem trenutku objavljivanjem izmijenjenog teksta Izjave o
            privatnosti na našim internet stranicama. Zato Vas pozivamo da
            povremeno pregledate ovu Izjavu o privatnosti na kojoj će biti
            označene nove izmjene, ako ih je u prethodnom periodu bilo. Ako se
            Korisnik ne slaže s ovom Izjavom o privatnosti, upućujemo Korisnika
            da napusti te ne pristupa i ne koristi Internetske stranice tvrtke <strong> In-3m Interijeri. </strong>
             Izmjena izjave o privatnosti stupa na snagu odmah
            nakon objave na Internetskoj stranici tvrtke <strong> In-3m Interijeri. </strong>
            Nakon što izmjene stupe na snagu – nastavak uporabe Internetskih
            stranica <strong> In-3m Interijeri </strong> podrazumijeva da Korisnik potvrđuje i
            prihvaća iste.
          </p>
          <p><a href="http://in-3minterijeri.com">http://in-3minterijeri.com</a></p>
          <p>
          <strong> In-3m Interijeri.</strong>          </p>
          <p>
            OIB: 16367764959</p>
            <br />
            <address>
           Gornje Selo 32
            <br />
            44317 Osekovo – Hrvatska
            </address>
          
          <p>
            mob: <a href="tel:+ 385 91 7208379">+ 385 91 720 8379</a>
            <br />
            e-mail: <a href="mailto:info.in3m@gmail.com">info.in3m@gmail.com</a>
          </p>
          <p>Osekovo, 15.10.2024 </p>
        </div>
      </main>
    </div>
  );
};
const styles = {
  buttonContainer: {
    marginTop: '20px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'start',
  },
  acceptButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};
export default PrivacyPolicyPage;
