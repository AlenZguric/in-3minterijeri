import React, { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../styles/components/Questions.css";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "Koliko traje izrada namještaja po mjeri?",
      answer:
        "Vrijeme izrade ovisi o složenosti projekta. Prosječno trajanje je između 4 do 6 tjedana.",
    },
    {
      question: "Kako se vrši mjerenje prostora?",
      answer:
        "Naš tim dolazi na lokaciju i precizno mjeri prostor kako bi osigurali savršeno prilagođen namještaj.",
    },
    {
      question: "Koji materijali su dostupni?",
      answer:
        "Nudimo širok raspon materijala, uključujući drvo, MDF, iveral, metal, staklo i još mnogo toga.",
    },
    {
      question: "Nudite li montažu namještaja?",
      answer:
        "Da, naš tim osigurava profesionalnu montažu namještaja kod vas u domu ili uredu.",
    },
    {
      question: "Možemo li vidjeti uzorke materijala prije narudžbe?",
      answer:
        "Da, uzorke materijala možete vidjeti u našem izložbenom prostoru ili ćemo ih donijeti prilikom mjerenja.",
    },
    {
      question: "Nudite li garanciju na proizvode?",
      answer:
        "Da, svi naši proizvodi dolaze s jamstvom na kvalitetu materijala i izrade.",
    },
    {
      question: "Koje su mogućnosti plaćanja?",
      answer:
        "Prihvaćamo gotovinu, kartice i bankovne prijenose. Također nudimo mogućnosti plaćanja u ratama.",
    },
    {
      question: "Mogu li naručiti dizajn po vlastitoj ideji?",
      answer:
        "Naravno! Radimo prilagođene dizajne prema vašim željama i potrebama.",
    },
    {
      question: "Kako mogu održavati namještaj po mjeri?",
      answer:
        "Redovito brisanje površina i izbjegavanje jakih kemikalija održat će vaš namještaj dugotrajnim i sjajnim.",
    },
    {
      question: "Što ako želim izmjene nakon narudžbe?",
      answer:
        "Promjene su moguće do određenog stupnja izrade. Preporučujemo da nas kontaktirate što prije.",
    },
  ];

  return (
    <div className="faq-component">
      <h2>Česta Pitanja</h2>
      <div className="faq-list">
        {questions.map((q, index) => (
          <div key={index} className="faq-item" onClick={() => toggleAnswer(index)}>
            <div className="faq-question">
              <h3>{q.question}</h3>
              <ExpandMoreIcon className={`arrow-icon ${openIndex === index ? 'rotate' : ''}`} /> {/* Arrow Icon */}
            </div>
            {openIndex === index && <p>{q.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
