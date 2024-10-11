import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/components/OurProducts.css';
import Kuhinja from '../assets/images/smallsize/kuhinja-po-mjeri-img.jpg';
import ZidneObloge from '../assets/images/smallsize/kuhinja/kuhinja-small.jpg';
import Dnevni from '../assets/images/smallsize/dnevni- boravak-img.jpg';
import DekorativniPaneli from '../assets/images/smallsize/dekorativni-paneli-img.png';
import Hodnik from '../assets/images/smallsize/hodnici-predsoblje-img.jpg';
import Kupaonice from '../assets/images/smallsize/kupaonice-img.jpg';
import Ormari from '../assets/images/smallsize/ormari-img.jpg';
import Ostali from '../assets/images/smallsize/ostali namješta-img.jpg';

const categories = [
  {
    title: 'Kuhinje po mjeri',
    image: Kuhinja,
    description: 'Kuhinje po mjeri koje savršeno odgovaraju vašem prostoru.',
    url: '/kuhinje'
  },
  {
    title: 'Zidne obloge',
    image: ZidneObloge,
    description: 'Moderne zidne obloge za stylish izgled.',
    url: '/zidne-obloge'
  },
  {
    title: 'Dnevni boravci',
    image: Dnevni,
    description: 'Namještaj za dnevne boravke koji donosi udobnost i stil.',
    url: '/dnevni-boravci'
  },
  {
    title: 'Dekorativni paneli',
    image: DekorativniPaneli,
    description: 'Dekorativni paneli za poboljšanje vašeg interijera.',
    url: '/dekorativni-paneli'
  },
  {
    title: 'Hodnici predsoblja',
    image: Hodnik,
    description: 'Kustomizirani hodnici i ulazi.',
    url: '/hodnici'
  },
  {
    title: 'Kupaonice',
    image: Kupaonice,
    description: 'Elegantni namještaj za kupaonice po vašim potrebama.',
    url: '/kupaonice'
  },
  {
    title: 'Ugradbeni ormari',
    image: Ormari,
    description: 'Ugradbeni ormari prilagođeni vašem prostoru.',
    url: '/ormari'
  },
  {
    title: 'Ostali namještaj',
    image: Ostali,
    description: 'Različiti drugi komadi namještaja po mjeri.',
    url: '/ostali-namjestaj'
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
      <h2>Naš namještaj po mjeri</h2>
      <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000} showDots rtl={true}>
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
