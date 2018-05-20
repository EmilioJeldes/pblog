import {
  topDanger,
  topPrecaution,
  topSuccess,
  topWarning,
  iconSize,
  taskDefaultStyle,
  taskTitleFont
} from '../styleConstants';

const taskStyles = {
  task: {
    margin: 'auto',
    height: 150,
    width: '100%',
    borderTopLeftRadius: '50px',
    borderTopRightRadius: '50px',
    borderBottomLeftRadius: '20px 1000px',
    borderBottomRightRadius: '700px 30px',
    position: 'relative',
    ...taskDefaultStyle,
    flexFlow: 'row wrap'
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
  cardStatus: {
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    height: 20,
    display: 'flex',
    alignItems: 'center',
    flex: '1 100%'
  },
  cardContent: {
    position: 'relative'
  },
  durationIcon: {
    position: 'absolute',
    bottom: '5px',
    right: '5px',
		display: 'block',
    ...iconSize,
		padding: '0 10px'
  },
  taskTitle: {
    ...taskTitleFont,
    padding: '15px 20px',
    textAlign: 'center'
  }
};

export default taskStyles;
