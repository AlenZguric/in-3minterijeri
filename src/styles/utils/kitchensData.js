
const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  };
  const okovi = {
    Grass: <a href="https://www.grass.eu" target="_blank" rel="noopener noreferrer">Grass</a>,
    Blom : <a href="https://www.grass.eu" target="_blank" rel="noopener noreferrer">Blom</a>,
  }
  const images = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_1', false, /\.(png|jpe?g|svg|webp)$/));

  const images2 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_2', false, /\.(png|jpe?g|svg|webp)$/));
  const images4 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_4', false, /\.(png|jpe?g|svg|webp)$/));
  const images5 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_5', false, /\.(png|jpe?g|svg|webp)$/));
  const images6 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_6', false, /\.(png|jpe?g|svg|webp)$/));


  
  export const kitchensData = [
      {
        name: "Mona Liza",
        material: "Drvo",
        hardware: okovi.Grass,
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
        hardware: okovi.Grass,
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
        name: "Kuhinja 4",
        material: "Laminat",
        hardware: okovi.Grass,
                 images : [
          { src: images4['IMG_2837.webp'], thumb: images4['IMG_2837.webp'], width: 1440, height: 1080 },
          { src: images4['IMG_2834.webp'], thumb: images4['IMG_2834.webp'], width: 810, height: 1080 },
          { src: images4['IMG_2839.webp'], thumb: images4['IMG_2839.webp'], width: 810, height: 1080 },
          { src: images4['IMG_2841.webp'], thumb: images4['IMG_2841.webp'], width: 810, height: 1080 },
          { src: images4['IMG_2842.webp'], thumb: images4['IMG_2842.webp'], width: 810, height: 1080 },
          { src: images4['IMG_2843.webp'], thumb: images4['IMG_2843.webp'], width: 810, height: 1080 },
          { src: images4['IMG_2844.webp'], thumb: images4['IMG_2844.webp'], width: 1440, height: 1080 },
          { src: images4['IMG_2845.webp'], thumb: images4['IMG_2845.webp'], width: 810, height: 1080 },
          { src: images4['IMG_2848.webp'], thumb: images4['IMG_2848.webp'], width: 810, height: 1080 },
          { src: images4['IMG_2851.webp'], thumb: images4['IMG_2851.webp'], width: 1440, height: 1080 },
          { src: images4['IMG_2852.webp'], thumb: images4['IMG_2852.webp'], width: 1440, height: 1080 },
          { src: images4['IMG_2853.webp'], thumb: images4['IMG_2853.webp'], width: 810, height: 1080 },
        ],
        
        
      },
      {
        name: "Kuhinja 5",
        material: "Beton",
        hardware: okovi.Grass,
         images : [
          { src: images5['IMG_2614-2.webp'], thumb: images5['IMG_2614-2.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2615.webp'], thumb: images5['IMG_2615.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2616.webp'], thumb: images5['IMG_2616.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2617.webp'], thumb: images5['IMG_2617.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2619.webp'], thumb: images5['IMG_2619.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2621.webp'], thumb: images5['IMG_2621.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2622.webp'], thumb: images5['IMG_2622.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2623.webp'], thumb: images5['IMG_2623.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2624.webp'], thumb: images5['IMG_2624.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2625.webp'], thumb: images5['IMG_2625.webp'], width: 810, height: 1080 },
        ],
        
      },
      {
        name: "Kuhinja 6",
        material: "Beton",
        hardware: okovi.Grass,
         images:[
          { src: images6['IMG_4904 copy.webp'], thumb: images6['IMG_4904 copy.webp'], width: 1440, height: 1080 },
          { src: images6['IMG_4902 copy.webp'], thumb: images6['IMG_4902 copy.webp'], width: 810, height: 1080 },
          { src: images6['IMG_4903 copy.webp'], thumb: images6['IMG_4903 copy.webp'], width: 810, height: 1080 },
         { src: images6['IMG_4906 copy.webp'], thumb: images6['IMG_4906 copy.webp'], width: 810, height: 1080 },
          { src: images6['IMG_4908 copy.webp'], thumb: images6['IMG_4908 copy.webp'], width: 810, height: 1080 },
          { src: images6['IMG_4909 copy.webp'], thumb: images6['IMG_4909 copy.webp'], width: 810, height: 1080 },
          { src: images6['IMG_4912 copy.webp'], thumb: images6['IMG_4912 copy.webp'], width: 810, height: 1080 },
          { src: images6['IMG_4913 copy.webp'], thumb: images6['IMG_4913 copy.webp'], width: 810, height: 1080 },
        ],
        
        
      },
      {
        name: "Kuhinja 7",
        material: "Beton",
        hardware: okovi.Grass,
         images : [
          { src: images5['IMG_2614-2.webp'], thumb: images5['IMG_2614-2.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2615.webp'], thumb: images5['IMG_2615.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2616.webp'], thumb: images5['IMG_2616.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2617.webp'], thumb: images5['IMG_2617.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2619.webp'], thumb: images5['IMG_2619.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2621.webp'], thumb: images5['IMG_2621.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2622.webp'], thumb: images5['IMG_2622.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2623.webp'], thumb: images5['IMG_2623.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2624.webp'], thumb: images5['IMG_2624.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2625.webp'], thumb: images5['IMG_2625.webp'], width: 810, height: 1080 },
        ],
        
      },
      {
        name: "Kuhinja 5",
        material: "Beton",
        hardware: okovi.Grass,
         images : [
          { src: images5['IMG_2614-2.webp'], thumb: images5['IMG_2614-2.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2615.webp'], thumb: images5['IMG_2615.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2616.webp'], thumb: images5['IMG_2616.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2617.webp'], thumb: images5['IMG_2617.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2619.webp'], thumb: images5['IMG_2619.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2621.webp'], thumb: images5['IMG_2621.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2622.webp'], thumb: images5['IMG_2622.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2623.webp'], thumb: images5['IMG_2623.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2624.webp'], thumb: images5['IMG_2624.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2625.webp'], thumb: images5['IMG_2625.webp'], width: 810, height: 1080 },
        ],
        
      },
      {
        name: "Kuhinja 5",
        material: "Beton",
        hardware: okovi.Grass,
         images : [
          { src: images5['IMG_2614-2.webp'], thumb: images5['IMG_2614-2.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2615.webp'], thumb: images5['IMG_2615.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2616.webp'], thumb: images5['IMG_2616.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2617.webp'], thumb: images5['IMG_2617.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2619.webp'], thumb: images5['IMG_2619.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2621.webp'], thumb: images5['IMG_2621.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2622.webp'], thumb: images5['IMG_2622.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2623.webp'], thumb: images5['IMG_2623.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2624.webp'], thumb: images5['IMG_2624.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2625.webp'], thumb: images5['IMG_2625.webp'], width: 810, height: 1080 },
        ],
        
      },   {
        name: "Kuhinja 5",
        material: "Beton",
        hardware: okovi.Grass,
         images : [
          { src: images5['IMG_2614-2.webp'], thumb: images5['IMG_2614-2.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2615.webp'], thumb: images5['IMG_2615.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2616.webp'], thumb: images5['IMG_2616.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2617.webp'], thumb: images5['IMG_2617.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2619.webp'], thumb: images5['IMG_2619.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2621.webp'], thumb: images5['IMG_2621.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2622.webp'], thumb: images5['IMG_2622.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2623.webp'], thumb: images5['IMG_2623.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2624.webp'], thumb: images5['IMG_2624.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2625.webp'], thumb: images5['IMG_2625.webp'], width: 810, height: 1080 },
        ],
        
      },   {
        name: "Kuhinja 5",
        material: "Beton",
        hardware: okovi.Grass,
         images : [
          { src: images5['IMG_2614-2.webp'], thumb: images5['IMG_2614-2.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2615.webp'], thumb: images5['IMG_2615.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2616.webp'], thumb: images5['IMG_2616.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2617.webp'], thumb: images5['IMG_2617.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2619.webp'], thumb: images5['IMG_2619.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2621.webp'], thumb: images5['IMG_2621.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2622.webp'], thumb: images5['IMG_2622.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2623.webp'], thumb: images5['IMG_2623.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2624.webp'], thumb: images5['IMG_2624.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2625.webp'], thumb: images5['IMG_2625.webp'], width: 810, height: 1080 },
        ],
        
      },   {
        name: "Kuhinja 5",
        material: "Beton",
        hardware: okovi.Grass,
         images : [
          { src: images5['IMG_2614-2.webp'], thumb: images5['IMG_2614-2.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2615.webp'], thumb: images5['IMG_2615.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2616.webp'], thumb: images5['IMG_2616.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2617.webp'], thumb: images5['IMG_2617.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2619.webp'], thumb: images5['IMG_2619.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2621.webp'], thumb: images5['IMG_2621.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2622.webp'], thumb: images5['IMG_2622.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2623.webp'], thumb: images5['IMG_2623.webp'], width: 810, height: 1080 },
          { src: images5['IMG_2624.webp'], thumb: images5['IMG_2624.webp'], width: 1440, height: 1080 },
          { src: images5['IMG_2625.webp'], thumb: images5['IMG_2625.webp'], width: 810, height: 1080 },
        ],
        
      },
  ];
  