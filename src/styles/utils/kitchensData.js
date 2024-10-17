
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
  const images7 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_7', false, /\.(png|jpe?g|svg|webp)$/));
  const images8 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_8', false, /\.(png|jpe?g|svg|webp)$/));
  const images9 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_9', false, /\.(png|jpe?g|svg|webp)$/));
  const images10 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_10', false, /\.(png|jpe?g|svg|webp)$/));
  const images11 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_11', false, /\.(png|jpe?g|svg|webp)$/));
  const images13 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_13', false, /\.(png|jpe?g|svg|webp)$/));

  const images14 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_14', false, /\.(png|jpe?g|svg|webp)$/));
  const images15 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_15', false, /\.(png|jpe?g|svg|webp)$/));
  const images16 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_16', false, /\.(png|jpe?g|svg|webp)$/));
  const images17 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_17', false, /\.(png|jpe?g|svg|webp)$/));
  const images18 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_18', false, /\.(png|jpe?g|svg|webp)$/));
  const images19 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_19', false, /\.(png|jpe?g|svg|webp)$/));
  const images20 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_20', false, /\.(png|jpe?g|svg|webp)$/));
  const images21 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_21', false, /\.(png|jpe?g|svg|webp)$/));
  const images22 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_22', false, /\.(png|jpe?g|svg|webp)$/));
  const images23 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_23', false, /\.(png|jpe?g|svg|webp)$/));
  const images24 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_24', false, /\.(png|jpe?g|svg|webp)$/));
  const images25 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_25', false, /\.(png|jpe?g|svg|webp)$/));



  
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
        images: [
          { src: images7['2.webp'], thumb: images7['2.webp'], width: 1440, height: 1080 },

          { src: images7['1.webp'], thumb: images7['1.webp'], width: 810, height: 1080 },
          { src: images7['3.webp'], thumb: images7['3.webp'], width: 810, height: 1080 },
          { src: images7['4.webp'], thumb: images7['4.webp'], width: 810, height: 1080 },
          { src: images7['5.webp'], thumb: images7['5.webp'], width: 810, height: 1080 },
          { src: images7['6.webp'], thumb: images7['6.webp'], width: 810, height: 1080 },
          { src: images7['7.webp'], thumb: images7['7.webp'], width: 810, height: 1080 },
          { src: images7['8.webp'], thumb: images7['8.webp'], width: 810, height: 1080 },
          { src: images7['9.webp'], thumb: images7['9.webp'], width: 810, height: 1080 },
          { src: images7['10.webp'], thumb: images7['10.webp'], width:810, height: 1080 },
        ],
      },
      
      {
        name: "Kuhinja 8",
        material: "Beton",
        hardware: okovi.Grass,
        images: [
          { src: images8['5.webp'], thumb: images8['5.webp'], width: 1440, height: 1080 },
          { src: images8['2.webp'], thumb: images8['2.webp'], width: 810, height: 1080 },
          { src: images8['3.webp'], thumb: images8['3.webp'], width: 810, height: 1080 },
          { src: images8['4.webp'], thumb: images8['4.webp'], width: 810, height: 1080 },
          { src: images8['6.webp'], thumb: images8['6.webp'], width: 810, height: 1080 },
          { src: images8['7.webp'], thumb: images8['7.webp'], width: 810, height: 1080 },
          { src: images8['8.webp'], thumb: images8['8.webp'], width: 810, height: 1080 },
          { src: images8['9.webp'], thumb: images8['9.webp'], width: 810, height: 1080 },
          { src: images8['10.webp'], thumb: images8['10.webp'], width: 810, height: 1080 },
          { src: images8['11.webp'], thumb: images8['11.webp'], width: 1440, height: 1080 },
          { src: images8['12.webp'], thumb: images8['12.webp'], width: 810, height: 1080 },
        ],
      },
      {
        name: "Kuhinja 9",
        material: "Beton",
        hardware: okovi.Grass,
        images: [
          { src: images9['2.webp'], thumb: images9['2.webp'], width: 1440, height: 1080 },
          { src: images9['1.webp'], thumb: images9['1.webp'], width: 810, height: 1080 },
          { src: images9['3.webp'], thumb: images9['3.webp'], width: 810, height: 1080 },
          { src: images9['4.webp'], thumb: images9['4.webp'], width: 810, height: 1080 },
          { src: images9['5.webp'], thumb: images9['5.webp'], width: 1440, height: 1080 },
          { src: images9['6.webp'], thumb: images9['6.webp'], width: 810, height: 1080 },
          { src: images9['7.webp'], thumb: images9['7.webp'], width: 1440, height: 1080 },
          { src: images9['8.webp'], thumb: images9['8.webp'], width: 1440, height: 1080 },
        ],
      },
      
      {
        name: "Kuhinja 10",
        material: "Beton",
        hardware: okovi.Grass,
        images: [
          { src: images10['1.webp'], thumb: images10['1.webp'], width: 810, height: 1080 },
          { src: images10['2.webp'], thumb: images10['2.webp'], width: 810, height: 1080 },
          { src: images10['3.webp'], thumb: images10['3.webp'], width: 810, height: 1080 },
          { src: images10['4.webp'], thumb: images10['4.webp'], width: 810, height: 1080 },
          { src: images10['5.webp'], thumb: images10['5.webp'], width: 810, height: 1080 },
          { src: images10['6.webp'], thumb: images10['6.webp'], width: 810, height: 1080 },
        ],
      },
      
      {
        name: "Kuhinja 11",
        material: "Beton",
        hardware: okovi.Grass,
        images: [
          { src: images11['6.webp'], thumb: images11['6.webp'], width: 1440, height: 1080 },
          { src: images11['1.webp'], thumb: images11['1.webp'], width: 810, height: 1080 },
          { src: images11['2.webp'], thumb: images11['2.webp'], width: 810, height: 1080 },
          { src: images11['3.webp'], thumb: images11['3.webp'], width: 810, height: 1080 },
          { src: images11['4.webp'], thumb: images11['4.webp'], width: 810, height: 1080 },
          { src: images11['5.webp'], thumb: images11['5.webp'], width: 810, height: 1080 },
          { src: images11['7.webp'], thumb: images11['7.webp'], width: 810, height: 1080 },
          { src: images11['8.webp'], thumb: images11['8.webp'], width: 810, height: 1080 },
          { src: images11['9.webp'], thumb: images11['9.webp'], width: 810, height: 1080 },
          { src: images11['10.webp'], thumb: images11['10.webp'], width: 810, height: 1080 },
          { src: images11['11.webp'], thumb: images11['11.webp'], width: 810, height: 1080 },
          { src: images11['12.webp'], thumb: images11['12.webp'], width: 810, height: 1080 },
          { src: images11['13.webp'], thumb: images11['13.webp'], width: 810, height: 1080 },
          { src: images11['14.webp'], thumb: images11['14.webp'], width: 810, height: 1080 },
          { src: images11['15.webp'], thumb: images11['15.webp'], width: 810, height: 1080 },
          { src: images11['16.webp'], thumb: images11['16.webp'], width: 810, height: 1080 },
          { src: images11['17.webp'], thumb: images11['17.webp'], width: 810, height: 1080 },
          { src: images11['18.webp'], thumb: images11['18.webp'], width: 810, height: 1080 },
        ],
      },

        {
  name: "Kuhinja 13",
  material: "Beton",
  hardware: okovi.Grass,
  images: [
    { src: images13['7.webp'], thumb: images13['7.webp'], width: 1440, height: 1080 },

    { src: images13['1.webp'], thumb: images13['1.webp'], width: 810, height: 1080 },
    { src: images13['2.webp'], thumb: images13['2.webp'], width: 810, height: 1080 },
    { src: images13['3.webp'], thumb: images13['3.webp'], width: 810, height: 1080 },
    { src: images13['4.webp'], thumb: images13['4.webp'], width: 810, height: 1080 },
    { src: images13['5.webp'], thumb: images13['5.webp'], width: 810, height: 1080 },
    { src: images13['6.webp'], thumb: images13['6.webp'], width: 810, height: 1080 },
    { src: images13['8.webp'], thumb: images13['8.webp'], width: 810, height: 1080 },
    { src: images13['9.webp'], thumb: images13['9.webp'], width: 810, height: 1080 },
    { src: images13['10.webp'], thumb: images13['10.webp'], width: 810, height: 1080 },
    { src: images13['11.webp'], thumb: images13['11.webp'], width: 810, height: 1080 },
    { src: images13['12.webp'], thumb: images13['12.webp'], width: 810, height: 1080 },
    { src: images13['13.webp'], thumb: images13['13.webp'], width: 810, height: 1080 },
    { src: images13['14.webp'], thumb: images13['14.webp'], width: 810, height: 1080 },
  ],
},
{
  name: "Kuhinja 14",
  material: "Beton",
  hardware: okovi.Grass,
  images: [
    { src: images14['1.webp'], thumb: images14['1.webp'], width: 810, height: 1080 },
    { src: images14['2.webp'], thumb: images14['2.webp'], width: 810, height: 1080 },
    { src: images14['3.webp'], thumb: images14['3.webp'], width: 810, height: 1080 },
    { src: images14['4.webp'], thumb: images14['4.webp'], width: 810, height: 1080 },
    { src: images14['5.webp'], thumb: images14['5.webp'], width: 810, height: 1080 },
    { src: images14['6.webp'], thumb: images14['6.webp'], width: 810, height: 1080 },
    { src: images14['7.webp'], thumb: images14['7.webp'], width: 810, height: 1080 },
  ],
},
{
  name: "Kuhinja 15",
  material: "Beton",
  hardware: okovi.Grass,
  images: [
    { src: images15['6.webp'], thumb: images15['6.webp'], width: 1440, height: 1080 },
    { src: images15['1.webp'], thumb: images15['1.webp'], width: 810, height: 1080 },
    { src: images15['2.webp'], thumb: images15['2.webp'], width: 810, height: 1080 },
    { src: images15['3.webp'], thumb: images15['3.webp'], width: 1440, height: 1080 },
    { src: images15['4.webp'], thumb: images15['4.webp'], width: 810, height: 1080 },
    { src: images15['5.webp'], thumb: images15['5.webp'], width: 810, height: 1080 },
    { src: images15['7.webp'], thumb: images15['7.webp'], width: 810, height: 1080 },
    { src: images15['8.webp'], thumb: images15['8.webp'], width: 810, height: 1080 },
  ],
},
{
  name: "Kuhinja 16",
  material: "Beton",
  hardware: okovi.Grass,
  images: [
    { src: images16['11.webp'], thumb: images16['11.webp'], width: 810, height: 1080 },

    { src: images16['1.webp'], thumb: images16['1.webp'], width: 810, height: 1080 },
    { src: images16['2.webp'], thumb: images16['2.webp'], width: 810, height: 1080 },
    { src: images16['3.webp'], thumb: images16['3.webp'], width: 810, height: 1080 },
    { src: images16['4.webp'], thumb: images16['4.webp'], width: 810, height: 1080 },
    { src: images16['5.webp'], thumb: images16['5.webp'], width: 810, height: 1080 },
    { src: images16['6.webp'], thumb: images16['6.webp'], width: 810, height: 1080 },
    { src: images16['7.webp'], thumb: images16['7.webp'], width: 810, height: 1080 },
    { src: images16['8.webp'], thumb: images16['8.webp'], width: 810, height: 1080 },
    { src: images16['9.webp'], thumb: images16['9.webp'], width: 810, height: 1080 },
    { src: images16['10.webp'], thumb: images16['10.webp'], width: 810, height: 1080 },
  ],
},
{
  name: "Kuhinja 17",
  material: "Beton",
  hardware: okovi.Grass,
  images: [
    { src: images17['4.webp'], thumb: images17['4.webp'], width: 1440, height: 1080 },

    { src: images17['1.webp'], thumb: images17['1.webp'], width: 810, height: 1080 },
    { src: images17['2.webp'], thumb: images17['2.webp'], width: 810, height: 1080 },
    { src: images17['3.webp'], thumb: images17['3.webp'], width: 810, height: 1080 },
    { src: images17['5.webp'], thumb: images17['5.webp'], width: 1440, height: 1080 },
    { src: images17['6.webp'], thumb: images17['6.webp'], width: 1440, height: 1080 },
    { src: images17['7.webp'], thumb: images17['7.webp'], width: 810, height: 1080 },
    { src: images17['8.webp'], thumb: images17['8.webp'], width: 810, height: 1080 },
    { src: images17['9.webp'], thumb: images17['9.webp'], width: 810, height: 1080 },
    { src: images17['10.webp'], thumb: images17['10.webp'], width: 810, height: 1080 },
    { src: images17['11.webp'], thumb: images17['11.webp'], width: 810, height: 1080 },
    { src: images17['12.webp'], thumb: images17['12.webp'], width: 810, height: 1080 },
    { src: images17['13.webp'], thumb: images17['13.webp'], width: 810, height: 1080 },
    { src: images17['14.webp'], thumb: images17['14.webp'], width: 810, height: 1080 },
    { src: images17['15.webp'], thumb: images17['15.webp'], width: 810, height: 1080 },
    { src: images17['16.webp'], thumb: images17['16.webp'], width: 810, height: 1080 },
  ],
},
{
  name: "Kuhinja 18",
  material: "Beton",
  hardware: okovi.Grass,
  images: [
    { src: images18['6.webp'], thumb: images18['6.webp'], width: 1440, height: 1080 },
    { src: images18['1.webp'], thumb: images18['1.webp'], width: 810, height: 1080 },
    { src: images18['2.webp'], thumb: images18['2.webp'], width: 810, height: 1080 },
    { src: images18['3.webp'], thumb: images18['3.webp'], width: 810, height: 1080 },
    { src: images18['4.webp'], thumb: images18['4.webp'], width: 810, height: 1080 },
    { src: images18['5.webp'], thumb: images18['5.webp'], width: 810, height: 1080 },
    { src: images18['7.webp'], thumb: images18['7.webp'], width: 1440, height: 1080 },
    { src: images18['8.webp'], thumb: images18['8.webp'], width: 1440, height: 1080 },
    { src: images18['9.webp'], thumb: images18['9.webp'], width: 810, height: 1080 },
    { src: images18['10.webp'], thumb: images18['10.webp'], width: 810, height: 1080 },
    { src: images18['11.webp'], thumb: images18['11.webp'], width: 810, height: 1080 },
  ],
},

{
  name: "Kuhinja 19",
  material: "Beton",
  hardware: okovi.Grass,
  images: [
    { src: images19['1.webp'], thumb: images19['1.webp'], width: 810, height: 1080 },
    { src: images19['6.webp'], thumb: images19['6.webp'], width: 1440, height: 1080 },

    { src: images19['2.webp'], thumb: images19['2.webp'], width: 810, height: 1080 },
    { src: images19['3.webp'], thumb: images19['3.webp'], width: 810, height: 1080 },
    { src: images19['4.webp'], thumb: images19['4.webp'], width: 810, height: 1080 },
    { src: images19['5.webp'], thumb: images19['5.webp'], width: 810, height: 1080 },
    { src: images19['7.webp'], thumb: images19['7.webp'], width: 810, height: 1080 },
    { src: images19['8.webp'], thumb: images19['8.webp'], width: 810, height: 1080 },
    { src: images19['9.webp'], thumb: images19['9.webp'], width: 810, height: 1080 },
    { src: images19['10.webp'], thumb: images19['10.webp'], width: 810, height: 1080 },
  ],
},
{
  name: "Kuhinja 20",
  material: "Beton",
  hardware: okovi.Grass,
  images: [
    { src: images20['6.webp'], thumb: images20['6.webp'], width: 1440, height: 1080 },
    { src: images20['1.webp'], thumb: images20['1.webp'], width: 810, height: 1080 },
    { src: images20['2.webp'], thumb: images20['2.webp'], width: 810, height: 1080 },
    { src: images20['3.webp'], thumb: images20['3.webp'], width: 810, height: 1080 },
    { src: images20['4.webp'], thumb: images20['4.webp'], width: 810, height: 1080 },
    { src: images20['5.webp'], thumb: images20['5.webp'], width: 1440, height: 1080 },
    { src: images20['7.webp'], thumb: images20['7.webp'], width: 1440, height: 1080 },
    { src: images20['8.webp'], thumb: images20['8.webp'], width: 810, height: 1080 },
    { src: images20['9.webp'], thumb: images20['9.webp'], width: 1440, height: 1080 },
    { src: images20['10.webp'], thumb: images20['10.webp'], width: 1440, height: 1080 },
    { src: images20['11.webp'], thumb: images20['11.webp'], width: 810, height: 1080 },
    { src: images20['12.webp'], thumb: images20['12.webp'], width: 810, height: 1080 },
    { src: images20['13.webp'], thumb: images20['13.webp'], width: 810, height: 1080 },
  ],
},
{
  name: "Kuhinja 21",
  material: "Beton",
  hardware: okovi.Grass,
  images: [
    { src: images21['8.webp'], thumb: images21['8.webp'], width: 1440, height: 1080 },
    { src: images21['1.webp'], thumb: images21['1.webp'], width: 810, height: 1080 },
    { src: images21['2.webp'], thumb: images21['2.webp'], width: 1440, height: 1080 },
    { src: images21['3.webp'], thumb: images21['3.webp'], width: 1440, height: 1080 },
    { src: images21['4.webp'], thumb: images21['4.webp'], width: 810, height: 1080 },
    { src: images21['5.webp'], thumb: images21['5.webp'], width: 1440, height: 1080 },
    { src: images21['6.webp'], thumb: images21['6.webp'], width: 810, height: 1080 },
    { src: images21['7.webp'], thumb: images21['7.webp'], width: 1440, height: 1080 },
  ],
},
{
  name: "Kuhinja 22",
  material: "Beton",
  hardware: okovi.Grass,
  images: [
    { src: images22['10.webp'], thumb: images22['10.webp'], width: 1440, height: 1080 },
    { src: images22['7.webp'], thumb: images22['7.webp'], width: 1080, height: 1080 },
    { src: images22['1.webp'], thumb: images22['1.webp'], width: 810, height: 1080 },
    { src: images22['2.webp'], thumb: images22['2.webp'], width: 810, height: 1080 },
    { src: images22['3.webp'], thumb: images22['3.webp'], width: 810, height: 1080 },
    { src: images22['4.webp'], thumb: images22['4.webp'], width: 810, height: 1080 },
    { src: images22['5.webp'], thumb: images22['5.webp'], width: 1440, height: 1080 },
    { src: images22['6.webp'], thumb: images22['6.webp'], width: 810, height: 1080 },
    { src: images22['8.webp'], thumb: images22['8.webp'], width: 810, height: 1080 },
    { src: images22['9.webp'], thumb: images22['9.webp'], width: 810, height: 1080 },
    { src: images22['11.webp'], thumb: images22['11.webp'], width: 810, height: 1080 },
    { src: images22['12.webp'], thumb: images22['12.webp'], width: 810, height: 1080 },
    { src: images22['13.webp'], thumb: images22['13.webp'], width: 810, height: 1080 },
    { src: images22['14.webp'], thumb: images22['14.webp'], width: 810, height: 1080 },
  ],
},
{
  name: "Kuhinja 23",
  material: "Beton",
  hardware: okovi.Grass,
  images: [
    { src: images23['2.webp'], thumb: images23['2.webp'], width: 1440, height: 1080 },
    { src: images23['1.webp'], thumb: images23['1.webp'], width: 810, height: 1080 },
    { src: images23['3.webp'], thumb: images23['3.webp'], width: 810, height: 1080 },
    { src: images23['4.webp'], thumb: images23['4.webp'], width: 810, height: 1080 },
    { src: images23['5.webp'], thumb: images23['5.webp'], width: 1440, height: 1080 },
    { src: images23['6.webp'], thumb: images23['6.webp'], width: 810, height: 1080 },
    { src: images23['7.webp'], thumb: images23['7.webp'], width: 810, height: 1080 },
    { src: images23['8.webp'], thumb: images23['8.webp'], width: 810, height: 1080 },
    { src: images23['9.webp'], thumb: images23['9.webp'], width: 810, height: 1080 },
  ],
},
{
  name: "Kuhinja 24",
  material: "Beton",
  hardware: okovi.Grass,
  images: [
    { src: images24['7.webp'], thumb: images24['7.webp'], width: 1440, height: 1080 },
    { src: images24['1.webp'], thumb: images24['1.webp'], width: 810, height: 1080 },
    { src: images24['2.webp'], thumb: images24['2.webp'], width: 810, height: 1080 },
    { src: images24['3.webp'], thumb: images24['3.webp'], width: 810, height: 1080 },
    { src: images24['4.webp'], thumb: images24['4.webp'], width: 810, height: 1080 },
    { src: images24['5.webp'], thumb: images24['5.webp'], width: 810, height: 1080 },
    { src: images24['6.webp'], thumb: images24['6.webp'], width: 810, height: 1080 },
    { src: images24['8.webp'], thumb: images24['8.webp'], width: 810, height: 1080 },
    { src: images24['9.webp'], thumb: images24['9.webp'], width: 810, height: 1080 },
    { src: images24['10.webp'], thumb: images24['10.webp'], width: 810, height: 1080 },
    { src: images24['11.webp'], thumb: images24['11.webp'], width: 810, height: 1080 },
    { src: images24['12.webp'], thumb: images24['12.webp'], width: 810, height: 1080 },
  ],
},

{
  name: "Kuhinja 25",
  material: "Beton",
  hardware: okovi.Grass,
  images: [
    { src: images25['6.webp'], thumb: images25['6.webp'], width: 1440, height: 1080 },
    { src: images25['1.webp'], thumb: images25['1.webp'], width: 810, height: 1080 },
    { src: images25['2.webp'], thumb: images25['2.webp'], width: 810, height: 1080 },
    { src: images25['3.webp'], thumb: images25['3.webp'], width: 810, height: 1080 },
    { src: images25['4.webp'], thumb: images25['4.webp'], width: 1440, height: 1080 },
    { src: images25['5.webp'], thumb: images25['5.webp'], width: 1440, height: 1080 },
    { src: images25['7.webp'], thumb: images25['7.webp'], width: 810, height: 1080 },
    { src: images25['8.webp'], thumb: images25['8.webp'], width: 810, height: 1080 },
    { src: images25['9.webp'], thumb: images25['9.webp'], width: 810, height: 1080 },
    { src: images25['10.webp'], thumb: images25['10.webp'], width: 810, height: 1080 },
    { src: images25['11.webp'], thumb: images25['11.webp'], width: 810, height: 1080 },
    { src: images25['12.webp'], thumb: images25['12.webp'], width: 810, height: 1080 },
  ],
},

  ];
  