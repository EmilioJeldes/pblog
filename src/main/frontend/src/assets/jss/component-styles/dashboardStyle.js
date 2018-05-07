import { BACKGROUND_COLOR } from '../styleConstants'

const dashboardStyle = theme => ({
  body: {
    padding: '15px 15px 70px',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '95%'
    },
    margin: 'auto'
  },
  background: {
    backgroundColor: BACKGROUND_COLOR,
    width: '100%'
  }
});

export default dashboardStyle;