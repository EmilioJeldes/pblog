/* COLORS */
const PRIMARY_COLOR = '#EB5757';
const SECONDARY_COLOR = '#56CCF2';
const WARNING_COLOR = '#ff9800';
const PRECAUTION_COLOR = 'yellow';
const DANGER_COLOR = '#f44336';
const SUCCESS_COLOR = '#4caf50';
const INFO_COLOR = '#00acc1';
const ROSE_COLOR = '#e91e63';
const GRAY_COLOR = '#999999';
const BLACK_COLOR = '#2C2C2C';
const BACKGROUND_COLOR = '#EFEFEF';

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
  topWarning
};
