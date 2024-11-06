
const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  };
  const okovi = {
    Grass: <a href="https://www.grass.eu" target="_blank" rel="noopener noreferrer">Grass</a>,
    Blom : <a href="https://www.grass.eu" target="_blank" rel="noopener noreferrer">Blom</a>,
  }
  const materijal = {
    MDF: { 
      mat: {
        title: <span>Mat</span>,
        description: <span>Površine kod kojih nema refleksije svjetlosti, sa izuzetnim svojstvima bez otisaka prstiju, ogrebotina i tragova. Pružaju jedinstven izgled i taktilan osjećaj, a boje mata imaju posebnu dubinu i intenzivnost. Nosiva ploča može biti iverica ili MDF.</span>
      },
      super_mat: {
        title: <span>Super Mat </span>,
        description: <span>PerfectSense Premium lakirane MDF ploče (ploče vlaknatice srednje gustoće) Matt odlikuje mat, baršunasto topao izgled i taktilnost i na njima ne ostaju otisci prstiju. Inovativni proces proizvodnje osigurava veliku izdržljivost i dugotrajnost površine, koja se može koristiti za horizontalne površine. Nosiva ploča MDF jamči vrlo glatku površinu koja poziva da je dotaknete.</span>
      },
      visoki_sjaj: {
        title: <span>Visoki sjaj </span>,
        description: <span>Dekori acryla i visokog sjaja pružaju sjajnu, glatku površinu. Nosiva ploča i kod visokog sjaja i kod acryla je MDF. Acryl ploče imaju odlike najvišeg sjaja sa efektom ogledala, gdje se sve oslikava na površini ploče. Površine visokog sjaja lakirane su s više slojeva laka i pružaju sjajan i dubok izgled. Prikladne su za profinjen i moderan namještaj jer mu daju ekskluzivan i sofisticiran izgled.</span>
      },
      pet_mat: {
        title: <span>Pet mat</span>,
        description: <span>Osnova za PET mat je visokovrijedna folija velike žilavosti, tlačne i vlačne čvrstoće koja se u debljinama od 0.2 do 0.7 mm laminira na nosivu ploču od MDF-a ili iverice i odlično se ponaša, kako u fazama proizvodnje ploča, tako i njihovoj obradi prilikom proizvodnje namještaja i konačno u eksploataciji, kao dio gotovog namještaja.</span>
      }
    }, 
    iver: {
      title: <span>Oplemenjeni Iveral</span>,
      description: <span>Još poznata pod nazivom iveral. Iverica oplemenjena dekor papirima koji su prethodno impregnirani melaminskim smolama. U procesu oplemenjeivanja formira se struktura na dekorima, a ona se kod npr. Egger dekora prepoznaje po oznaci ST. Raspostranjen materijal, dolazi u velikom broju različitih boja i dekora. Lako se obrađuje i montira i koristi se u širokoj primjeni za izradu namještaja, opremanje i uređenje interijera.</span>
    }
  };
  const radna_ploca= {
    EGGER_compact: <span>Radna ploča EGGER compact</span>,
    EGGER_38mm: <span>Radna ploča EGGER 38 mm</span>,
    IVER_38mm: <span>Radna ploča Iveral 38 mm</span>,
    QUARTZ_20mm: <span>Radna ploča Quartz 20 mm</span>,

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
  const images26 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_26', false, /\.(png|jpe?g|svg|webp)$/));
  const images27 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_27', false, /\.(png|jpe?g|svg|webp)$/));
  const images28 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_28', false, /\.(png|jpe?g|svg|webp)$/));
  const images29 = importAll(require.context('../../assets/images/fullsize/kuhinja/kuhinja_29', false, /\.(png|jpe?g|svg|webp)$/));




  
  export const kitchensData = [
      {
        name: "Mona Liza",
        material:materijal.MDF.visoki_sjaj.title,
        description: materijal.MDF.visoki_sjaj.description,
        radna: radna_ploca.EGGER_compact,
        hardware: okovi.Grass,
        location: 'Zagreb',
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
        material: materijal.MDF.mat.title,
        description: materijal.MDF.mat.description,
        radna: radna_ploca.EGGER_38mm,
        hardware: okovi.Grass,
        location: 'Rovinj',

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
        material: materijal.MDF.visoki_sjaj.title,
        description: materijal.MDF.visoki_sjaj.description,
        radna: radna_ploca.EGGER_38mm,

        hardware: okovi.Grass,
        location: 'Zagreb',

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
        material: materijal.MDF.mat.title,
        description: materijal.MDF.mat.description,
        radna: radna_ploca.EGGER_38mm,
        hardware: okovi.Grass,
        location: 'Zagreb',

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
        material: materijal.MDF.pet_mat.title,
        description: materijal.MDF.pet_mat.description,
        radna: radna_ploca.EGGER_38mm,
        hardware: okovi.Grass,
        location: 'Zagreb',
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
        material: materijal.iver.title,
        description: materijal.iver.description,
        radna: radna_ploca.EGGER_38mm,
        hardware: okovi.Grass,
        location: 'Zagreb',
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
        material: materijal.MDF.mat.title,
        description: materijal.MDF.mat.description,
        radna: radna_ploca.IVER_38mm,
        hardware: okovi.Grass,
        location: 'Zagreb',
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
        material: materijal.MDF.pet_mat.title,
        description: materijal.MDF.pet_mat.description,
        radna: radna_ploca.EGGER_38mm,
        hardware: okovi.Grass,
        location: 'Zagreb',
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
        material: materijal.MDF.visoki_sjaj.title,
        description: materijal.MDF.visoki_sjaj.description,
        radna: radna_ploca.EGGER_38mm,
        hardware: okovi.Grass,
        location: 'Prelog',
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
        material: materijal.iver.title,
        description: materijal.iver.description,
        radna: radna_ploca.EGGER_38mm,
        hardware: okovi.Grass,
        location: 'Zagreb',
        images: [
          { src: images11['6.webp'], thumb: images11['6.webp'], width: 1440, height: 1080 },
          { src: images11['1.webp'], thumb: images11['1.webp'], width: 810, height: 1080 },
          // { src: images11['2.webp'], thumb: images11['2.webp'], width: 810, height: 1080 },
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
          // { src: images11['16.webp'], thumb: images11['16.webp'], width: 810, height: 1080 },
          { src: images11['17.webp'], thumb: images11['17.webp'], width: 810, height: 1080 },
          { src: images11['18.webp'], thumb: images11['18.webp'], width: 810, height: 1080 },
        ],
      },

        {
  name: "Kuhinja 13",
  material: materijal.iver.title,
  description: materijal.iver.description,
  radna: radna_ploca.EGGER_38mm,
  hardware: okovi.Grass,
  location: 'Zaprešić',
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
  material: materijal.MDF.visoki_sjaj.title,
        description: materijal.MDF.visoki_sjaj.description,
        radna: radna_ploca.EGGER_38mm,
        hardware: okovi.Grass,
        location: 'Zagreb',
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
  material: materijal.MDF.visoki_sjaj.title,
  description: materijal.MDF.visoki_sjaj.description,
  radna: radna_ploca.EGGER_compact,
  hardware: okovi.Grass,
  location: 'Zagreb',
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
  material: materijal.iver.title,
        description: materijal.iver.description,
        radna: radna_ploca.EGGER_38mm,
        hardware: okovi.Grass,
        location: 'Županja',
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
  material: materijal.iver.title,
        description: materijal.iver.description,
        radna: radna_ploca.QUARTZ_20mm,
        hardware: okovi.Grass,
        location: 'Novska',
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
  material: materijal.MDF.super_mat.title,
  description: materijal.MDF.super_mat.description,
  radna: radna_ploca.EGGER_compact,
  hardware: okovi.Grass,
  location: 'Zaprešić',
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
  material: materijal.iver.title,
        description: materijal.iver.description,
        radna: radna_ploca.EGGER_38mm,
        hardware: okovi.Grass,
        location: 'Bjelovar',
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
  material: materijal.MDF.visoki_sjaj.title,
  description: materijal.MDF.visoki_sjaj.description,
  radna: radna_ploca.EGGER_38mm,
  hardware: okovi.Grass,
  location: 'Hižanovec',
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
  material: materijal.MDF.visoki_sjaj.title,
  description: materijal.MDF.visoki_sjaj.description,
  radna: radna_ploca.EGGER_38mm,
  hardware: okovi.Grass,
  location: 'Donja Gračenica',
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
  material: materijal.iver.title,
  description: materijal.iver.description,
  radna: radna_ploca.EGGER_38mm,
  hardware: okovi.Grass,
  location: 'Pisarovina',
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
  material: materijal.MDF.visoki_sjaj.title,
  description: materijal.MDF.visoki_sjaj.description,
  radna: radna_ploca.EGGER_38mm,
  hardware: okovi.Grass,
  location: 'Graberje Ivanićko',
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
  material: materijal.iver.title,
  description: materijal.iver.description,
  radna: radna_ploca.EGGER_38mm,
  hardware: okovi.Grass,
  location: 'Jaruge',
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
  material: materijal.MDF.visoki_sjaj.title,
  description: materijal.MDF.visoki_sjaj.description,
  radna: radna_ploca.EGGER_38mm,
  hardware: okovi.Grass,
  location: 'Biograd na Moru',
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
{
  name: "Kuhinja 26",
  material: materijal.iver.title,
  description: materijal.iver.description,
  radna: radna_ploca.EGGER_38mm,
  hardware: okovi.Grass,
  location: 'Zagreb',
  images: [
    { src: images26['10.webp'], thumb: images26['10.webp'], width: 1440, height: 1080 },

    { src: images26['1.webp'], thumb: images26['1.webp'], width: 810, height: 1080 },
    { src: images26['4.webp'], thumb: images26['4.webp'], width: 810, height: 1080 },
    { src: images26['5.webp'], thumb: images26['5.webp'], width: 810, height: 1080 },
    { src: images26['6.webp'], thumb: images26['6.webp'], width: 810, height: 1080 },
    { src: images26['7.webp'], thumb: images26['7.webp'], width: 810, height: 1080 },
    { src: images26['8.webp'], thumb: images26['8.webp'], width: 810, height: 1080 },
    { src: images26['11.webp'], thumb: images26['11.webp'], width: 810, height: 1080 },
    { src: images26['12.webp'], thumb: images26['12.webp'], width: 810, height: 1080 },
  ],
},
{
  name: "Kuhinja 27",
  material: materijal.iver.title,
  description: materijal.iver.description,
  radna: radna_ploca.EGGER_38mm,
  hardware: okovi.Grass,
  location: 'Zaprešić',
  images: [
    { src: images27['1.webp'], thumb: images27['1.webp'], width: 810, height: 1080 },
    { src: images27['2.webp'], thumb: images27['2.webp'], width: 810, height: 1080 },
    { src: images27['3.webp'], thumb: images27['3.webp'], width: 810, height: 1080 },
    { src: images27['4.webp'], thumb: images27['4.webp'], width: 810, height: 1080 },
    { src: images27['5.webp'], thumb: images27['5.webp'], width: 810, height: 1080 },
    { src: images27['6.webp'], thumb: images27['6.webp'], width: 810, height: 1080 },
    { src: images27['7.webp'], thumb: images27['7.webp'], width: 810, height: 1080 },
    { src: images27['8.webp'], thumb: images27['8.webp'], width: 810, height: 1080 },
    { src: images27['9.webp'], thumb: images27['9.webp'], width: 810, height: 1080 },
  ],
},
{
  name: "Kuhinja 28",
  material: materijal.iver.title,
  description: materijal.iver.description,
  radna: radna_ploca.EGGER_38mm,
  hardware: okovi.Grass,
  location: 'Karlovac',
  images: [
    { src: images28['6.webp'], thumb: images28['6.webp'], width: 1440, height: 1080 },

    { src: images28['1.webp'], thumb: images28['1.webp'], width: 810, height: 1080 },
    { src: images28['2.webp'], thumb: images28['2.webp'], width: 810, height: 1080 },
    { src: images28['3.webp'], thumb: images28['3.webp'], width: 810, height: 1080 },
    { src: images28['4.webp'], thumb: images28['4.webp'], width: 1440, height: 1080 },
    { src: images28['5.webp'], thumb: images28['5.webp'], width: 810, height: 1080 },
  ],
},
{
  name: "Kuhinja 29",
  material: materijal.MDF.pet_mat.title,
  description: materijal.MDF.pet_mat.description,
  radna: radna_ploca.EGGER_38mm,
  hardware: okovi.Grass,
  location: 'Kaštel Sućurac',
  images: [
    { src: images29['1.webp'], thumb: images29['1.webp'], width: 1440, height: 1080 },
    { src: images29['2.webp'], thumb: images29['2.webp'], width: 1440, height: 1080 },
    { src: images29['3.webp'], thumb: images29['3.webp'], width: 810, height: 1080 },
    { src: images29['4.webp'], thumb: images29['4.webp'], width: 1440, height: 1080 },
    { src: images29['5.webp'], thumb: images29['5.webp'], width: 1440, height: 1080 },
    { src: images29['6.webp'], thumb: images29['6.webp'], width: 810, height: 1080 },
    { src: images29['7.webp'], thumb: images29['7.webp'], width: 1440, height: 1080 },
    { src: images29['8.webp'], thumb: images29['8.webp'], width: 1440, height: 1080 },
    { src: images29['9.webp'], thumb: images29['9.webp'], width: 1440, height: 1080 },
    { src: images29['10.webp'], thumb: images29['10.webp'], width: 1440, height: 1080 },
    { src: images29['11.webp'], thumb: images29['11.webp'], width: 810, height: 1080 },
    { src: images29['12.webp'], thumb: images29['12.webp'], width: 810, height: 1080 },
  ],
},


  ];
  