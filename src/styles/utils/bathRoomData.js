const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  };

  const images = importAll(require.context('../../assets/images/fullsize/kupaonice', false, /\.(png|jpe?g|svg|webp)$/));

  export const bathRoomData = {
    images: [
        { src: images['1.webp'], thumb: images['1.webp'], width: 810, height: 1080 },
        { src: images['2.webp'], thumb: images['2.webp'], width: 810, height: 1080 },
        { src: images['3.webp'], thumb: images['3.webp'], width: 810, height: 1080 },
        { src: images['4.webp'], thumb: images['4.webp'], width: 810, height: 1080 },
        { src: images['5.webp'], thumb: images['5.webp'], width: 810, height: 1080 },
        { src: images['6.webp'], thumb: images['6.webp'], width: 810, height: 1080 },
        { src: images['7.webp'], thumb: images['7.webp'], width: 810, height: 1080 },
        { src: images['8.webp'], thumb: images['8.webp'], width: 810, height: 1080 },
        { src: images['9.webp'], thumb: images['9.webp'], width: 810, height: 1080 },
        { src: images['10.webp'], thumb: images['10.webp'], width: 810, height: 1080 },
        { src: images['11.webp'], thumb: images['11.webp'], width: 810, height: 1080 },
        { src: images['12.webp'], thumb: images['12.webp'], width: 810, height: 1080 },
        { src: images['13.webp'], thumb: images['13.webp'], width: 810, height: 1080 },
        { src: images['14.webp'], thumb: images['14.webp'], width: 810, height: 1080 },
        { src: images['15.webp'], thumb: images['15.webp'], width: 810, height: 1080 },
        { src: images['16.webp'], thumb: images['16.webp'], width: 810, height: 1080 },
        { src: images['17.webp'], thumb: images['17.webp'], width: 810, height: 1080 },
        { src: images['18.webp'], thumb: images['18.webp'], width: 810, height: 1080 },
        { src: images['19.webp'], thumb: images['19.webp'], width: 810, height: 1080 },
        { src: images['20.webp'], thumb: images['20.webp'], width: 810, height: 1080 },
        { src: images['21.webp'], thumb: images['21.webp'], width: 1440, height: 1080 },
        { src: images['22.webp'], thumb: images['22.webp'], width: 810, height: 1080 },
        { src: images['23.webp'], thumb: images['23.webp'], width: 810, height: 1080 },
        { src: images['24.webp'], thumb: images['24.webp'], width: 810, height: 1080 },
    ]
};
