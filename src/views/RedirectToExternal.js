import { useEffect } from 'react';
import './RedirectToExternal.css'; // Add a CSS file for styling the animation

const RedirectToExternal = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://calendly.com/info-w0m/30min?month=2024-10';
    }, 2000); // 2 seconds delay before redirecting

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="redirect-container">
      <div className="spinner"></div> {/* Simple spinner animation */}
      <p className="redirect-message">Please be patient, good things take time!</p>
    </div>
  );
};

export default RedirectToExternal;
