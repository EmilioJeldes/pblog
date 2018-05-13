import { NAV_MD, NAV_SM } from '../styleConstants';

const taskboardStyle = theme => ({
  root: {
    position: 'relative',
    height: `calc(100vh - ${NAV_SM}px)`,
    [theme.breakpoints.up('xs')]: {
      height: `calc(100vh - ${NAV_MD}px)`
    }
  },
  grid: {
    padding: '15px 15px 70px',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '90%'
    },
    margin: 'auto'
  },
  button: {
    position: 'absolute',
    bottom: theme.spacing.unit * 7,
		right: theme.spacing.unit * 1,
		[theme.breakpoints.up('sm')]: {
			bottom: theme.spacing.unit * 8,
			right: theme.spacing.unit * 1
		},
    [theme.breakpoints.up('md')]: {
      bottom: theme.spacing.unit * 8,
      right: theme.spacing.unit * 2
		},
		[theme.breakpoints.up('lg')]: {
			bottom: theme.spacing.unit * 9,
			right: theme.spacing.unit * 2
		}
  }
});

export default taskboardStyle;
