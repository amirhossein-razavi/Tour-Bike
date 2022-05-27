import React, { useState, useEffect } from 'react';
import { tours } from '../Mock data/tours';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ToastContainer, toast } from 'react-toastify';

function Post(props) {

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  const [tour, setTour] = useState('');
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    var tour = getParameterByName('tour');
    setTour(tour);
    const registeredTours = JSON.parse(localStorage.getItem('registeredTours'));
    setTimeout(() => {
      const checkRegister = registeredTours && registeredTours.findIndex(item => item.index == tours[tour].index) !== -1;
      setRegistered(checkRegister)
    }, 300);
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: 40
    },
    paper: {
      // padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      boxShadow: 'none',
    },
    image: {
      borderRadius: 10
    },
    button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      backgroundColor: '#1976D2',
      borderRadius: 10,
      width: '50%',
      margin: '0 auto',
      marginTop: 40,
      cursor: 'pointer'
    }
  }));

  const classes = useStyles();

  const tourRegister = () => {
    const isPrevTourExist = JSON.parse(localStorage.getItem('registeredTours'))
    if (isPrevTourExist) {
      const newData = {
        'address': tours[tour].address,
        'leader': tours[tour].name,
        'date': tours[tour].registered,
        'description': tours[tour].about,
        'index': tours[tour].index
      }
      isPrevTourExist.push(newData)
      localStorage.setItem('registeredTours', JSON.stringify(isPrevTourExist))
    } else {
      const newData = [{
        'address': tours[tour].address,
        'leader': tours[tour].name,
        'date': tours[tour].registered,
        'description': tours[tour].about,
        'index': tours[tour].index
      }]
      localStorage.setItem('registeredTours', [JSON.stringify(newData)])
    }
    toast.success('ثبت نام شما با موفقیت انجام شد', { position: toast.POSITION.BOTTOM_LEFT });
    setTimeout(() => {
      props.history.push({ pathname: './home' })
    }, 2000);
  }

  return (
    <>
      {/* <img src={require(`../../assets/images/tours-${tour.index + 1}.jpg`)} alt="Image placeholder" class="img-fluid" />
      <p>{tours[tour]}</p>
      <p>{time}</p> */}
      <ToastContainer />
      <div className={classes.root}>
        {tour &&
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>
                <img src={require(`../assets/images/tours-${+tour + 1}.jpg`)} className={classes.image} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper} style={{ paddingRight: 20, paddingLeft: 100 }}>
                <h3 style={{ textAlign: 'right', color: '#777' }}>
                  {tours[tour].address}
                </h3>
                <p style={{ textAlign: 'right', color: '#aaa', marginTop: 40 }}>
                  {tours[tour].about}
                </p>
                <h6 className='text-right mt-5' >لیدر : <span style={{ color: '#888', fontSize: 15 }}>{tours[tour].name}</span></h6>
                <h6 className='text-right mt-2' >تاریخ حرکت  : <span style={{ color: '#888', fontSize: 15 }}>{tours[tour].registered}</span></h6>
                {registered ?
                  <h6 className='text-center mt-5' >شما در این تور ثبت نام کرده اید !!!</h6>
                  :
                  <div className={classes.button} onClick={tourRegister}>
                    <span className='text-white'>
                      ثبت نام در تور
                    </span>
                  </div>
                }
              </Paper>
            </Grid>
          </Grid>
        }
      </div>
    </>
  );
}

export default Post;
