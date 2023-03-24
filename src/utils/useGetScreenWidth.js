import { useState, useEffect } from 'react';

function useGetScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onWindowResize = () => {
      setTimeout(() => {
        setScreenWidth(window.innerWidth);
      }, 800);
    };

    window.addEventListener('resize', onWindowResize);

    return () => window.removeEventListener('resize', onWindowResize);
  }, []);



  return screenWidth;
}

export default useGetScreenWidth;
