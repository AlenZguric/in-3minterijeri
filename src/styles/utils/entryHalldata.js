const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
};

const images = importAll(require.context('../../assets/images/fullsize/predsoblje', false, /\.(png|jpe?g|svg|webp)$/));

export const entryHallData = {
    images: [
        { src: images['1.webp'], thumb: images['1.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 1' },
        { src: images['3.webp'], thumb: images['3.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 2' },
        { src: images['6.webp'], thumb: images['6.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 3' },
        { src: images['9.webp'], thumb: images['9.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 4' },
        { src: images['10.webp'], thumb: images['10.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 5' },
        { src: images['11.webp'], thumb: images['11.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 6' },
        { src: images['12.webp'], thumb: images['12.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 7' },
        { src: images['13.webp'], thumb: images['13.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 8' },
        { src: images['14.webp'], thumb: images['14.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 9' },
        { src: images['15.webp'], thumb: images['15.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 10' },
        { src: images['16.webp'], thumb: images['16.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 11' },
        { src: images['17.webp'], thumb: images['17.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 12' },
        { src: images['18.webp'], thumb: images['18.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 13' },
        { src: images['19.webp'], thumb: images['19.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 14' },
        { src: images['20.webp'], thumb: images['20.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 15' },
        { src: images['21.webp'], thumb: images['21.webp'], width: 1440, height: 1080, alt: 'Slika predsoblja 16' },
        { src: images['22.webp'], thumb: images['22.webp'], width: 1440, height: 1080, alt: 'Slika predsoblja 17' },
        { src: images['23.webp'], thumb: images['23.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 18' },
        { src: images['24.webp'], thumb: images['24.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 19' },
        { src: images['25.webp'], thumb: images['25.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 20' },
        { src: images['26.webp'], thumb: images['26.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 21' },
        { src: images['27.webp'], thumb: images['27.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 22' },
        { src: images['28.webp'], thumb: images['28.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 23' },
        { src: images['29.webp'], thumb: images['29.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 24' },
        { src: images['30.webp'], thumb: images['30.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 25' },
        { src: images['31.webp'], thumb: images['31.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 26' },
        { src: images['32.webp'], thumb: images['32.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 27' },
        { src: images['33.webp'], thumb: images['33.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 28' },
        { src: images['34.webp'], thumb: images['34.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 29' },
        { src: images['35.webp'], thumb: images['35.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 30' },
        { src: images['36.webp'], thumb: images['36.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 31' },
        { src: images['37.webp'], thumb: images['37.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 32' },
        { src: images['38.webp'], thumb: images['38.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 33' },
        { src: images['39.webp'], thumb: images['39.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 34' },
        { src: images['41.webp'], thumb: images['41.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 35' },
        { src: images['42.webp'], thumb: images['42.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 36' },
        { src: images['45.webp'], thumb: images['45.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 37' },
        { src: images['48.webp'], thumb: images['48.webp'], width: 810, height: 1080, alt: 'Slika predsoblja 38' }
    ]
};
