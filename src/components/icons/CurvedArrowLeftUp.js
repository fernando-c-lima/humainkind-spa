import { SvgIcon } from '@mui/material';

function CurvedArrowLeftUp(props) { 
      return (
    <SvgIcon {...props} viewBox="0 0 400 200">
      {/* Linha curva */}
      <path
        d="M380 180 
           C260 80, 180 60, 40 40" 
        fill="none"
        stroke="black"
        strokeWidth="3"
      />
      {/* Ponta da seta */}
      <path
        d="M20 40 L50 15 M20 40 L50 65" 
        fill="none"
        stroke="black"
        strokeWidth="3"
      />
    </SvgIcon>
  );

}

export default CurvedArrowLeftUp;
