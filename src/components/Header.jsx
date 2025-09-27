import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


  const Header = () => {
  const navigate = useNavigate();

const scrollToSection = (id) => {
  if (window.location.pathname !== '/') {
    navigate('/'); // volta para a home
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }, 50); // delay para garantir renderização
  } else {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }
};

const goHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' }); // rola para o topo
  };

  return (
    <div className='header'>
    <div className='logo'>
        <h2 onClick={goHome} style={{ cursor: 'pointer' }}>
        Humain Kind<span>®</span>
      </h2>
    </div>
    <div className='nav'>
        <ul>
          <li>
            <span onClick={() => scrollToSection('home')} className="menu-link">Home</span>
          </li>
          <li>
            <span onClick={() => scrollToSection('methodologies')} className="menu-link">Methodologies</span>
          </li>
          <li>
            <span onClick={() => scrollToSection('about')} className="menu-link">About Us</span>
          </li>
          <li>
            <span onClick={() => scrollToSection('impact')} className="menu-link">Impact & Learnings</span>
          </li>
          <li>
            <span onClick={() => scrollToSection('products')} className="menu-link">Digital Products</span>
          </li>
        </ul>

    </div>
    <Button variant="contained" sx={{
        backgroundColor: '#000', 
        color: '#fff',            
        padding: '10px 20px',
        borderRadius: '12px',
        '&:hover': {
        backgroundColor: '#555',
        },
    }}
     onClick={() => navigate('/contact')} >Contact Us</Button>
    </div>
  )
}


export default Header