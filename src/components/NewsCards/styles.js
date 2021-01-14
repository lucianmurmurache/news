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
    boxShadow: '0px 5px 11px -7px #171717, 5px 5px 15px 5px rgba(0,0,0,0)',
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
