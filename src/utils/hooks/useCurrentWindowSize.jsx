import {useLayoutEffect, useState} from 'react'

export const useCurrentWindowSize = () => {
const [isMobile, setIsMobile] = useState(false);
useLayoutEffect(() => {
  function updateIsMobile() {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else setIsMobile(false)
  }
  window.addEventListener('resize', updateIsMobile);
  updateIsMobile();
  return () => window.removeEventListener('resize', updateIsMobile);
}, []);
return isMobile;
}