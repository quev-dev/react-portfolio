// * Import Particle Utility
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import particlesConfig from "./config";

// * Handle Particle Config & Return Output
function BannerParticles() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
      <Particles
        className = "particle-container"
        id = "tsparticles"
        init = { particlesInit }
        loaded = { particlesLoaded }
        options = {particlesConfig}
      ></Particles>
  );
}

export default BannerParticles;