import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    // This will load all tsparticles plugins
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 100, // Number of particles
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: 'circle', // Particle shape
          },
          size: {
            value: 3, // Particle size
          },
          move: {
            enable: true,
            speed: 1, // Movement speed
            direction: 'none', // Movement direction
            outModes: {
              default: 'bounce',
            },
          },
          color: {
            value: ['#FF0000', '#0000FF'], // Red and blue particle colors
          },
          opacity: {
            value: 0.5, // Opacity of particles
          },
          links: {
            enable: true,
            distance: 150, // Distance between particles to link
            color: '#f5d393', // Link color (can adjust if needed)
            opacity: 0.5,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse', // Interaction mode on hover
            },
          },
          modes: {
            repulse: {
              distance: 100, // Repulse distance on hover
            },
          },
        },
        detectRetina: true, // Retina support
      }}
    />
  );
};

export default ParticlesContainer;
