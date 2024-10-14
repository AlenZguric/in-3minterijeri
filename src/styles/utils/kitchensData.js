const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  };
  
  const images = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_1', false, /\.(png|jpe?g|svg|webp)$/));
  const thumbnails = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_1', false, /\.(png|jpe?g|svg|jpg)$/));

  const images2 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_2', false, /\.(png|jpe?g|svg|webp)$/));
 const thumbnails2 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_2', false, /\.(png|jpe?g|svg|jpg)$/));
  
  export const kitchensData = [
      {
        name: "Mona Liza",
        material: "Drvo",
        hardware: "Blum okovi",
        images: [
          { src: images['IMG_5748.webp'], thumb: images['IMG_5748.webp'], width: 1440, height: 1080 },
          { src: images['IMG_5749.webp'], thumb: images['IMG_5749.webp'], width: 1440, height: 1080 },
          { src: images['IMG_5750.webp'], thumb: images['IMG_5750.webp'], width: 1440, height: 1080 },
          { src: images['IMG_5751.webp'], thumb: images['IMG_5751.webp'], width: 1440, height: 1080 },
          { src: images['IMG_5756.webp'], thumb: images['IMG_5756.webp'], width: 810, height: 1080 },
          { src: images['IMG_5757.webp'], thumb: images['IMG_5757.webp'], width: 810, height: 1080 },
          { src: images['IMG_5759.webp'], thumb: images['IMG_5759.webp'], width: 810, height: 1080 },
          { src: images['IMG_5760.webp'], thumb: images['IMG_5760.webp'], width: 810, height: 1080 },
          { src: images['IMG_5761.webp'], thumb: images['IMG_5761.webp'], width: 810, height: 1080 },
          { src: images['IMG_5762.webp'], thumb: images['IMG_5762.webp'], width: 1440, height: 1080 },
          { src: images['IMG_5763.webp'], thumb: images['IMG_5763.webp'], width: 810, height: 1080 },
          { src: images['IMG_5765.webp'], thumb: images['IMG_5765.webp'], width: 810, height: 1080 },
        ],
      },
      {
        name: "Kuhinja 2",
        material: "MDF",
        hardware: "Hettich okovi",
        images: [
          { src: images2['IMG_5499.webp'], thumb: images2['IMG_5499.webp'], width: 1440, height: 1080 },
          { src: images2['IMG_5500.webp'], thumb: images2['IMG_5500.webp'], width: 1440, height: 1080 },
          { src: images2['IMG_5501.webp'], thumb: images2['IMG_5501.webp'], width: 1440, height: 1080 },
          { src: images2['IMG_5502.webp'], thumb: images2['IMG_5502.webp'], width: 1440, height: 1080 },
          { src: images2['IMG_5503.webp'], thumb: images2['IMG_5503.webp'], width: 1440, height: 1080 },
          { src: images2['IMG_5504.webp'], thumb: images2['IMG_5504.webp'], width: 1440, height: 1080 },
          { src: images2['IMG_5505.webp'], thumb: images2['IMG_5505.webp'], width: 1440, height: 1080 },
          { src: images2['IMG_5506.webp'], thumb: images2['IMG_5506.webp'], width: 1440, height: 1080 },
          { src: images2['IMG_5507.webp'], thumb: images2['IMG_5507.webp'], width: 1440, height: 1080 },
          { src: images2['IMG_5510.webp'], thumb: images2['IMG_5510.webp'], width: 1440, height: 1080 },
          { src: images2['IMG_5511.webp'], thumb: images2['IMG_5511.webp'], width: 1440, height: 1080 },
          { src: images2['IMG_5512.webp'], thumb: images2['IMG_5512.webp'], width: 1440, height: 1080 },
          { src: images2['IMG_5513.webp'], thumb: images2['IMG_5513.webp'], width: 1440, height: 1080 },
          { src: images2['IMG_5514.webp'], thumb: images2['IMG_5514.webp'], width: 1440, height: 1080 },
          { src: images2['IMG_5515.webp'], thumb: images2['IMG_5515.webp'], width: 1440, height: 1080 },
          { src: images2['IMG_5516.webp'], thumb: images2['IMG_5516.webp'], width: 1440, height: 1080 },
          { src: images2['IMG_5517.webp'], thumb: images2['IMG_5517.webp'], width: 1440, height: 1080 },
        ],
        
      },
      {
        name: "Kuhinja 3",
        material: "Laminat",
        hardware: "Grass okovi",
        images: [
          { src: images['kuhinja1.webp'], thumb: thumbnails['kuhinja1-small.jpg'], width: 3000, height: 2000 },
          { src: images['kuhinja12.webp'], thumb: thumbnails['kuhinja12-small.jpg'], width: 3000, height: 2000 },
          { src: images['kuhinja13.webp'], thumb: thumbnails['kuhinja13-small.jpg'], width: 3000, height: 2000 },
          { src: images['kuhinja14.webp'], thumb: thumbnails['kuhinja14-small.jpg'], width: 3000, height: 2000 },
          { src: images['kuhinja15.webp'], thumb: thumbnails['kuhinja15-small.jpg'], width: 3000, height: 2000 },
        ],
      },
      {
        name: "Kuhinja 4",
        material: "Staklo",
        hardware: "IKEA okovi",
        images: [
          { src: images['kuhinja16.webp'], thumb: thumbnails['kuhinja16-small.jpg'], width: 3000, height: 2000 },
          { src: images['kuhinja17.webp'], thumb: thumbnails['kuhinja17-small.jpg'], width: 3000, height: 2000 },
          { src: images['kuhinja18.webp'], thumb: thumbnails['kuhinja18-small.jpg'], width: 3000, height: 2000 },
          { src: images['kuhinja19.webp'], thumb: thumbnails['kuhinja19-small.jpg'], width: 3000, height: 2000 },
          { src: images['kuhinja20.webp'], thumb: thumbnails['kuhinja20-small.jpg'], width: 3000, height: 2000 },
        ],
      },
      {
        name: "Kuhinja 5",
        material: "Beton",
        hardware: "Bosch okovi",
        images: [
          { src: images['kuhinja21.webp'], thumb: thumbnails['kuhinja21-small.jpg'], width: 3000, height: 2000 },
          { src: images['kuhinja22.webp'], thumb: thumbnails['kuhinja22-small.jpg'], width: 3000, height: 2000 },
          { src: images['kuhinja23.webp'], thumb: thumbnails['kuhinja23-small.jpg'], width: 3000, height: 2000 },
          { src: images['kuhinja24.webp'], thumb: thumbnails['kuhinja24-small.jpg'], width: 3000, height: 2000 },
          { src: images['kuhinja25.webp'], thumb: thumbnails['kuhinja25-small.jpg'], width: 3000, height: 2000 },
        ],
      },
  ];
  