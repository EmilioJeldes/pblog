import { DANGER_COLOR, SUCCESS_COLOR, WARNING_COLOR, PRECAUTION_COLOR } from '../styleConstants';

const BORDER_HEIGH = 15;

const taskStyles = {
  task: {
    margin: 'auto',
    height: 150,
    width: '100%',
    color: '#212121',
    borderTopLeftRadius: '50px',
    borderTopRightRadius: '50px',
    borderBottomLeftRadius: '20px 1000px',
    borderBottomRightRadius: '700px 30px',
    backgroundColor: '#fcf59b',
    position: 'relative',
    display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
  },
  topDanger: {
    borderTop: `${BORDER_HEIGH}px solid ${DANGER_COLOR}`
  },
  topSuccess: {
    borderTop: `${BORDER_HEIGH}px solid ${SUCCESS_COLOR}`
  },
  topWarning: {
    borderTop: `${BORDER_HEIGH}px solid ${WARNING_COLOR}`
  },
  topPrecaution: {
    borderTop: `${BORDER_HEIGH}px solid ${PRECAUTION_COLOR}`
  },
  optionsIcon: {
    position: 'absolute',
    top: -5,
    right: -5,
    display: 'block'
  },
  durationIcon: {
    position: 'absolute',
    top: -5,
    left: -5,
    display: 'block'
  },
  taskTitle: {
    fontFamily: 'Gochi Hand, cursive',
    padding: '15px 20px',
    textAlign: 'center'
  }
};

export default taskStyles;