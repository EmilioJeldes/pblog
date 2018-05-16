/* COLORS */
const PRIMARY_COLOR = '#428bca';
// const PRIMARY_COLOR = '#56CCF2';
const SECONDARY_COLOR = '#EB5757';
const WARNING_COLOR = '#ff9800';
const PRECAUTION_COLOR = '#FFEE58';
const DANGER_COLOR = '#f44336';
const SUCCESS_COLOR = '#4caf50';
const INFO_COLOR = '#00acc1';
const ROSE_COLOR = '#e91e63';
const GRAY_COLOR = '#999999';
const BLACK_COLOR = '#383838';
const BACKGROUND_COLOR = '#EFEFEF';
const TASK_BACKGROUND_COLOR = '#fcf59b';

/* Task Border */
const BORDER_HEIGH = 15;
const topDanger = {
  borderTop: `${BORDER_HEIGH}px solid ${DANGER_COLOR}`
};
const topSuccess = {
  borderTop: `${BORDER_HEIGH}px solid ${SUCCESS_COLOR}`
};
const topWarning = {
  borderTop: `${BORDER_HEIGH}px solid ${WARNING_COLOR}`
};
const topPrecaution = {
  borderTop: `${BORDER_HEIGH}px solid ${PRECAUTION_COLOR}`
};
const taskDefaultStyle = {
  backgroundColor: TASK_BACKGROUND_COLOR,
  color: '#212121',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center'
};

const taskTitleFont = {
	fontFamily: 'Gochi Hand, cursive'
}

const iconSize = {
  height: '25px',
  width: '25px'
};

/* Navbar pixles */
const NAV_SM = 56;
const NAV_MD = 64;

export {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  WARNING_COLOR,
  PRECAUTION_COLOR,
  DANGER_COLOR,
  SUCCESS_COLOR,
  INFO_COLOR,
  ROSE_COLOR,
  GRAY_COLOR,
  BLACK_COLOR,
  BACKGROUND_COLOR,
  NAV_MD,
  NAV_SM,
  BORDER_HEIGH,
  topDanger,
  topPrecaution,
  topSuccess,
  topWarning,
  iconSize,
  TASK_BACKGROUND_COLOR,
	taskDefaultStyle,
	taskTitleFont
};
