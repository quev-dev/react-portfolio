const particlesConfig = {
  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  fpsLimit: 144,
  particles: {
    collisions: {
      enable: true,
    },
    color: {
      value: "#fff",
    },
    number: {
      value: 16,
    },
    opacity: {
      value: { min: 0.01, max: 0.25 },
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
      value: { min: 8, max: 48 }
    },
    move: {
      direction: "right",
      enable: true,
      speed: { min: 0.1, max: 0.5 },
      straight: false,
    },
  }
};

export default particlesConfig;