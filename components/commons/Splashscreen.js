import { useEffect } from "react";


const Splashscreen = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const globalLoader = document.getElementById('globalLoader');
    const loader = document.getElementById('loader');
    if (!globalLoader || !loader) return;
    
    setTimeout(() => {
      loader.style.opacity = 0;
      setTimeout(() => {
        globalLoader.style.opacity = 0;
        globalLoader.style.zIndex = -1;
      }, 400);
    }, 900)

  }, []);

  return (
    <div id='globalLoader'
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        backgroundColor: 'black',
        transition: 'all 1s linear',
      }}>
      <div id='loader' style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 0.25s linear',
      }}>
        <img
          alt='Chihuahua Metrica Logo'
          src='/logo_chihuahua_metrica.webp'
          style={{ maxWidth: '300px' }} />
      </div>
    </div>
  );
}

export default Splashscreen;