import React from 'react';
import '../styles/components/OurProducts.css';
import kupaoniceImg from "../assets/images/smallsize/kupaonica/kupaona-small.jpg";
import kuhinjaImg from "../assets/images/smallsize/kuhinja/kuhinja-small.jpg";
import ormarImg from "../assets/images/smallsize/ormar/ormar-small.jpg";
import predobljeImg from "../assets/images/smallsize//predsoblje/predoblje-small.jpg";
import { Helmet } from 'react-helmet';

const OurProducts = () => {
  const products = [
    { name: "Kupaonice", image: kupaoniceImg, description: "Elegantne i funkcionalne kupaonice po mjeri." },
    { name: "Kuhinje", image: kuhinjaImg, description: "Kuhinje vrhunskog dizajna i kvaliteta." },
    { name: "Ormari", image: ormarImg, description: "Ormari prilagođeni vašem prostoru." },
    { name: "Predsoblja", image: predobljeImg, description: "Stilizirana predsoblja po vašim željama." }
  ];

  return (
    <div className="our-products">
           <Helmet>
        <title>Naši proizvodi | In3m Interijeri</title>
        <meta name="description" content="Pogledajte našu ponudu vrhunskih proizvoda: elegantne kupaonice, dizajnerske kuhinje, ormari po mjeri, i stilizirana predsoblja." />
        <meta name="keywords" content="kupaonice, kuhinje, ormari, predsoblja, namještaj po mjeri, interijeri" />
        <meta name="author" content="Alen Zgurić" />
      </Helmet>
      <div className="title">
      <h2>Naši proizvodi</h2>

      </div>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
