const particlesConfig = {
    fullScreen: {
      enable: false,
      zIndex: -1,
    },
    fpsLimit: 144,
    particles: {
      color: {
        value: "#FFA0C8",
      },
      number: {
        value: 25,
      },
      opacity: {
        value: { min: 0.01, max: 0.5 },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 24 }
      },
      move: {
        direction: "right",
        enable: true,
        speed: { min: 0.25, max: 1 },
        straight: false,
      },
    }
  };
  
  export default particlesConfig;