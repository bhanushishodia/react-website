import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = ({ to }) => {
  const navigate = useNavigate();

  useEffect(() => {
 
    window.history.replaceState(null, '', to);
    navigate(to, { replace: true });
  }, [to, navigate]);

  return null; 
};

export default Redirect;
