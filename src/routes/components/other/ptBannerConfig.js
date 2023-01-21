const particlesConfig = {
  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  fpsLimit: 144,
  particles: {
    color: {
      value: "#fff",
    },
    number: {
      value: 50,
    },
    opacity: {
      value: { min: 0.01, max: 0.5 },
    },
    shape: {
      "image": {
        "src": 'https://i.imgur.com/P73ixDL.png',
        "width": 100,
        "height": 100,
        "replaceColor": true,
      },
      type: 'image',
      // type: 'square',
    },
    size: {
      value: { min: 1, max: 8 }
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