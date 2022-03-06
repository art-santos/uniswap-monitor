import { makeStyles } from '@material-ui/core/styles';

const NavigationStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.primary.dark,
  },
  toolbar: {
    minHeight: 65,
  },
  menuButton: {
    display: 'none',
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      display: 'inline-flex',
    },
  },
  secondaryButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  primaryButton: {
    borderRadius: '30px',
    padding: '6px 16px',
    fontSize: '16px',
    minWidth: '80px',
    textTransform: 'none',
    boxShadow: '0 2px 13px 2px rgb(79 56 247 / 13%)',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  linkBrand: {
    lineHeight: 1,
    marginRight: 'auto',
  },
  iconWrapper: {
    minWidth: 40,
  },
  icon: {
    color: theme.palette.text.hint,
  },
  drawerRoot: {
    width: 300,
    flexShrink: 0,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  drawerContainer: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
    width: 300,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default NavigationStyles;
