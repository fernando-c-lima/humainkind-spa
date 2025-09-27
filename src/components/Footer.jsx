import React from 'react'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

    const goToTerms = () => {
    navigate('/terms'); // substitua '/terms' pela rota real da sua página de termos
    };

  return (
    <div className='footer'>
        <h3>Copyright © 2025 Humain Kind | All Rights Reserved</h3>
        <h3 class="terms" onClick={goToTerms}>Termos de Uso</h3>
    </div>
  )
}

export default Footer