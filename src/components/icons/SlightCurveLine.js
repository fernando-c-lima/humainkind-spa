import { SvgIcon } from '@mui/material';

function SlightCurveLine(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 100 10">
      <path
        d="M10 5 Q50 2 90 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    </SvgIcon>
  );
}

export default SlightCurveLine;