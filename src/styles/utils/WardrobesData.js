const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
};

const images = importAll(require.context('../../assets/images/fullsize/ormari', false, /\.(png|jpe?g|svg|webp)$/));

export const wardrobesData = {
    images: [
        { src: images['1.webp'], thumb: images['1.webp'], width: 810, height: 1080, alt: 'Wardrobe 1' },
        { src: images['2.webp'], thumb: images['2.webp'], width: 810, height: 1080, alt: 'Wardrobe 2' },
        { src: images['3.webp'], thumb: images['3.webp'], width: 810, height: 1080, alt: 'Wardrobe 3' },
        { src: images['4.webp'], thumb: images['4.webp'], width: 810, height: 1080, alt: 'Wardrobe 4' },
        { src: images['5.webp'], thumb: images['5.webp'], width: 810, height: 1080, alt: 'Wardrobe 5' },
        { src: images['6.webp'], thumb: images['6.webp'], width: 810, height: 1080, alt: 'Wardrobe 6' },
        { src: images['7.webp'], thumb: images['7.webp'], width: 810, height: 1080, alt: 'Wardrobe 7' },
        { src: images['8.webp'], thumb: images['8.webp'], width: 810, height: 1080, alt: 'Wardrobe 8' },
        { src: images['9.webp'], thumb: images['9.webp'], width: 810, height: 1080, alt: 'Wardrobe 9' },
        { src: images['10.webp'], thumb: images['10.webp'], width: 810, height: 1080, alt: 'Wardrobe 10' },
        { src: images['11.webp'], thumb: images['11.webp'], width: 810, height: 1080, alt: 'Wardrobe 11' },
        { src: images['12.webp'], thumb: images['12.webp'], width: 810, height: 1080, alt: 'Wardrobe 12' },
        { src: images['13.webp'], thumb: images['13.webp'], width: 810, height: 1080, alt: 'Wardrobe 13' },
        { src: images['14.webp'], thumb: images['14.webp'], width: 810, height: 1080, alt: 'Wardrobe 14' },
        { src: images['15.webp'], thumb: images['15.webp'], width: 810, height: 1080, alt: 'Wardrobe 15' },
        { src: images['16.webp'], thumb: images['16.webp'], width: 810, height: 1080, alt: 'Wardrobe 16' },
        { src: images['17.webp'], thumb: images['17.webp'], width: 810, height: 1080, alt: 'Wardrobe 17' },
        { src: images['18.webp'], thumb: images['18.webp'], width: 810, height: 1080, alt: 'Wardrobe 18' },
        { src: images['19.webp'], thumb: images['19.webp'], width: 810, height: 1080, alt: 'Wardrobe 19' },
        { src: images['20.webp'], thumb: images['20.webp'], width: 810, height: 1080, alt: 'Wardrobe 20' },
        { src: images['21.webp'], thumb: images['21.webp'], width: 810, height: 1080, alt: 'Wardrobe 21' },
        { src: images['22.webp'], thumb: images['22.webp'], width: 810, height: 1080, alt: 'Wardrobe 22' },
        { src: images['23.webp'], thumb: images['23.webp'], width: 810, height: 1080, alt: 'Wardrobe 23' },
        { src: images['24.webp'], thumb: images['24.webp'], width: 810, height: 1080, alt: 'Wardrobe 24' },
        { src: images['25.webp'], thumb: images['25.webp'], width: 810, height: 1080, alt: 'Wardrobe 25' },
        { src: images['26.webp'], thumb: images['26.webp'], width: 810, height: 1080, alt: 'Wardrobe 26' },
        { src: images['27.webp'], thumb: images['27.webp'], width: 810, height: 1080, alt: 'Wardrobe 27' },
        { src: images['28.webp'], thumb: images['28.webp'], width: 810, height: 1080, alt: 'Wardrobe 28' },
        { src: images['29.webp'], thumb: images['29.webp'], width: 810, height: 1080, alt: 'Wardrobe 29' },
        { src: images['30.webp'], thumb: images['30.webp'], width: 810, height: 1080, alt: 'Wardrobe 30' },
        { src: images['31.webp'], thumb: images['31.webp'], width: 810, height: 1080, alt: 'Wardrobe 31' },
        { src: images['32.webp'], thumb: images['32.webp'], width: 810, height: 1080, alt: 'Wardrobe 32' },
        { src: images['33.webp'], thumb: images['33.webp'], width: 810, height: 1080, alt: 'Wardrobe 33' },
        { src: images['34.webp'], thumb: images['34.webp'], width: 810, height: 1080, alt: 'Wardrobe 34' },
        { src: images['35.webp'], thumb: images['35.webp'], width: 810, height: 1080, alt: 'Wardrobe 35' },
        { src: images['36.webp'], thumb: images['36.webp'], width: 810, height: 1080, alt: 'Wardrobe 36' },
        { src: images['37.webp'], thumb: images['37.webp'], width: 810, height: 1080, alt: 'Wardrobe 37' },
        { src: images['38.webp'], thumb: images['38.webp'], width: 810, height: 1080, alt: 'Wardrobe 38' },
        { src: images['39.webp'], thumb: images['39.webp'], width: 810, height: 1080, alt: 'Wardrobe 39' },
        { src: images['40.webp'], thumb: images['40.webp'], width: 810, height: 1080, alt: 'Wardrobe 40' },
        { src: images['41.webp'], thumb: images['41.webp'], width: 810, height: 1080, alt: 'Wardrobe 41' },
        { src: images['42.webp'], thumb: images['42.webp'], width: 810, height: 1080, alt: 'Wardrobe 42' },
        { src: images['43.webp'], thumb: images['43.webp'], width: 810, height: 1080, alt: 'Wardrobe 43' },
        { src: images['44.webp'], thumb: images['44.webp'], width: 810, height: 1080, alt: 'Wardrobe 44' },
        { src: images['45.webp'], thumb: images['45.webp'], width: 810, height: 1080, alt: 'Wardrobe 45' },
        { src: images['46.webp'], thumb: images['46.webp'], width: 810, height: 1080, alt: 'Wardrobe 46' },
        { src: images['47.webp'], thumb: images['47.webp'], width: 810, height: 1080, alt: 'Wardrobe 47' },
        { src: images['48.webp'], thumb: images['48.webp'], width: 810, height: 1080, alt: 'Wardrobe 48' },
        { src: images['49.webp'], thumb: images['49.webp'], width: 810, height: 1080, alt: 'Wardrobe 49' },
        { src: images['50.webp'], thumb: images['50.webp'], width: 810, height: 1080, alt: 'Wardrobe 50' },
        { src: images['51.webp'], thumb: images['51.webp'], width: 810, height: 1080, alt: 'Wardrobe 51' },
        { src: images['52.webp'], thumb: images['52.webp'], width: 810, height: 1080, alt: 'Wardrobe 52' },
        { src: images['53.webp'], thumb: images['53.webp'], width: 810, height: 1080, alt: 'Wardrobe 53' },
        { src: images['54.webp'], thumb: images['54.webp'], width: 810, height: 1080, alt: 'Wardrobe 54' },
        { src: images['55.webp'], thumb: images['55.webp'], width: 810, height: 1080, alt: 'Wardrobe 55' }
    ]
};
