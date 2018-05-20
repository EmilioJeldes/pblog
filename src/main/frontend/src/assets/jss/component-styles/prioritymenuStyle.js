import {
  iconSize,
  topDanger,
  topSuccess,
  topWarning,
  topPrecaution,
  SUCCESS_COLOR_HOVER,
  WARNING_COLOR_HOVER,
  PRECAUTION_COLOR_HOVER,
  DANGER_COLOR_HOVER
} from '../styleConstants';

const priorityiconStyle = {
  priorityIcon: {
    ...iconSize,
    marginRight: 'auto',
    display: 'block',
    padding: '0 10px'
  },
  menuItemReallyHigh: {
    height: '0',
    width: '40px',
    ...topDanger,
    '&:hover': {
      backgroundColor: DANGER_COLOR_HOVER
    }
  },
  menuItemHigh: {
    height: '0',
    width: '40px',
		...topWarning,
		'&:hover': {
      backgroundColor: WARNING_COLOR_HOVER
    }
  },
  menuItemMedium: {
    height: '0',
    width: '40px',
		...topPrecaution,
		'&:hover': {
      backgroundColor: PRECAUTION_COLOR_HOVER
    }
  },
  menuItemLow: {
    height: '0',
    width: '40px',
		...topSuccess,
		'&:hover': {
      backgroundColor: SUCCESS_COLOR_HOVER
    }
  }
};

export default priorityiconStyle;
