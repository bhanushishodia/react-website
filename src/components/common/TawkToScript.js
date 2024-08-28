import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TawkToScript = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if the current page is not 'sales-hub'
    if (!location.pathname.includes('sales-hub')) {
      const script = document.createElement('script');
      script.src = 'https://embed.tawk.to/64c0e2f1cc26a871b02b4f67/1h68nd145';
      script.async = true;
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [location.pathname]);

  return null;
};

export default TawkToScript;
