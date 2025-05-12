import { useEffect } from 'react';

function useGoogleScript() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
}

export default useGoogleScript;