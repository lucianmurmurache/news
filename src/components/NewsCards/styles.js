import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '60vh',
    padding: '10%',
    borderRadius: 10,
    color: 'white',
    backgroundColor: '#1eb6e5',
    transition: 'box-shadow 0.5s',
    boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
    '&:hover': { boxShadow: '0px 20px 40px -10px rgba(0, 0, 0, 0.4)' },
  },
  infoCard: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  container: {
    padding: '0 5%',
    width: '100%',
    margin: 0,
  },
});
