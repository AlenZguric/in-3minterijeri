export const scrollAnimations = {
    fadeInUp: {
      hidden: { opacity: 0, y: 100 },
      show: { opacity: 1, y: 0, transition: { duration: 1 } },
    },
    fadeInDownRight: {
      hidden: { opacity: 0, x: 100, y: 100 },
      show: { opacity: 1, x: 0, y: 0, transition: { duration: 1 } },
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.8 },
      show: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    },
    rotateIn: {
      hidden: { opacity: 0, rotate: -45 },
      show: { opacity: 1, rotate: 0, transition: { duration: 1 } },
    },
    slideInLeft: {
      hidden: { opacity: 0, x: -100 },
      show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
    bounceUp: {
      hidden: { opacity: 0, y: 100 },
      show: { opacity: 1, y: 0, transition: { duration: 1, type: "spring", stiffness: 50 } },
    },
    zoomOut: {
      hidden: { opacity: 0, scale: 1.2 },
      show: { opacity: 1, scale: 1, transition: { duration: 1 } },
    },
  };
  