import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export default function HandDrawnX(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      {/* Linha diagonal 1 */}
      <path
        d="M4 4 L20 20"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        transform="rotate(-3 12 12)"
      />
      {/* Linha diagonal 2 */}
      <path
        d="M20 4 L4 20"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        transform="rotate(2 12 12)"
      />
    </SvgIcon>
  );
}
