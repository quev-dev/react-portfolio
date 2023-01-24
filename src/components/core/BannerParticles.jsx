// *  ---------------------------------------------------------- Imports
// React Functions
import { useCallback }  from "react";
import { loadFull }     from "tsparticles";

// Particles
import Particles        from "react-tsparticles";
import particlesConfig  from "./config/ptBannerConfig";

// * ---------------------------- Handle Particle Config & Return Output
// Init Particle Config & Render Particles with Data
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

// Export Particles
export default BannerParticles;