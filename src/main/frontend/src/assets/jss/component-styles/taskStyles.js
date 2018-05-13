import {
  topDanger,
  topPrecaution,
  topSuccess,
	topWarning,
	iconSize
} from '../styleConstants';

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
    ...topDanger
  },
  topSuccess: {
    ...topSuccess
  },
  topWarning: {
    ...topWarning
  },
  topPrecaution: {
    ...topPrecaution
  },
  optionsIcon: {
    position: 'absolute',
    top: '0',
    right: '0',
		display: 'block',
		...iconSize
  },
  durationIcon: {
    position: 'absolute',
    top: '0',
    left: '0',
		display: 'block',
		...iconSize
  },
  taskTitle: {
    fontFamily: 'Gochi Hand, cursive',
    padding: '15px 20px',
    textAlign: 'center'
	},
	menuItem: {
		padding: '5px 10px'
	}
};

export default taskStyles;
