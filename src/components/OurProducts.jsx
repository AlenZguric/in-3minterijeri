import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/components/OurProducts.css';
import Kuhinja from '../assets/images/fullsize/kuhinja/kuhinja_26/1.webp';
import ZidneObloge from '../assets/images/fullsize/Paneli/9.webp';
import HodniciiPredsoblja from '../assets/images/fullsize/predsoblje/9.webp';
import Ormari from '../assets/images/fullsize/ormari/12.webp'
import Kupaonice from '../assets/images/smallsize/kupaonice-img.jpg';
import OrmariKlizni from '../assets/images/fullsize/klizni ormari/7.webp';
import Ostali from '../assets/images/smallsize/ostali namješta-img.jpg';

const categories = [
  {
    title: 'Kuhinje po mjeri',
    image: Kuhinja,
    description: 'Kuhinje po mjeri koje savršeno odgovaraju vašem prostoru',
    url: '/kuhinje'
  },
  {
    title: 'Zidne obloge',
    image: ZidneObloge,
    description: 'Moderne zidne obloge za stylish izgled',
    url: '/zidne-obloge'
  },
  {
    title: 'Hodnici i predsoblja',
    image: HodniciiPredsoblja,
    description: 'Namještaj za hodnike i predsoblja koji donosi udobnost i stil',
    url: '/hodnici-i-predsoblja'
  },
  {

    title: 'Ormari',
    image: Ormari,
    description: 'Ormari koji iskoriste svaki kutak Vaše prostorije',
    url: '/ormari'
  },
  {
    title: 'Kupaonice',
    image: Kupaonice,
    description: 'Elegantni namještaj za kupaonice po vašim potrebama',
    url: '/kupaonice'
  },
  {
    title: 'Ugradbeni ormari',
    image: OrmariKlizni,
    description:'Ugradbeni ormari prilagođeni vašem prostoru',
    url: '/ugradbeni-ormari'
  },
  {
    title: 'Dječje sobe',
    image: Ostali,
    description: 'Napravite Vašim mališanima sobu za odmor i igru',
    url: '/djecje-sobe'
  }
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const FurnitureCarousel = () => {
  const handleCategoryClick = (url) => {
    window.location.href = url; // Preusmjerava na zadani URL
  };

  return (
    <div className="carousel-container">  
      <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3500}  showDots rtl={true} >
        {categories.map((category, index) => (
          <div
            key={index}
            className="carousel-item"
            onClick={() => handleCategoryClick(category.url)} // Dodaj onClick
            style={{ cursor: 'pointer' }} // Pokazuje da je element klikabilan
          >
            <img src={category.image} alt={category.title} className="carousel-image" />
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FurnitureCarousel;
