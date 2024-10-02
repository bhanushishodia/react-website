import { useEffect } from 'react';

const RedirectToExternal = () => {
  useEffect(() => {
    window.location.href = 'https://calendly.com/info-w0m/30min?month=2024-10';
  }, []);

  // Return null to not render anything
  return null;
};

export default RedirectToExternal;
