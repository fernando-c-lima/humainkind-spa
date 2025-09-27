import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

function StarDoodleIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M12 2 L15 9 L22 10 L14 12 L22 22 L12 15 L4 20 L9 13 L1 9 L9 9 Z" 
            fill="none" 
            stroke="black" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
    </SvgIcon>
  );
}

export default StarDoodleIcon;