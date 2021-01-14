import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  footer: {
    textAlign: 'center',
    position: 'fixed',
    left: 0,
    bottom: 0,
    color: 'black',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '120px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  logo: {
    maxWidth: '60px',
  },
  link: {
    textDecoration: 'none',
    color: '#1eb6e5',
  },
  image: {
    marginLeft: 20,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
    borderRadius: 10,
    color: 'white',
    backgroundColor: '#1eb6e5',
    margin: '5px 12px',
    textAlign: 'center',
    boxShadow: '0px 5px 11px -7px #171717, 5px 5px 15px 5px rgba(0,0,0,0)',
    flexDirection: 'column-reverse',
    height: 'initial',
    '&:nth-of-type(1)': {
      marginBottom: '12px',
    },
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  logoContainer: {
    padding: '0 5%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
    },
  },
}));
