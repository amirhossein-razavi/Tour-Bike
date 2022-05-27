import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImageUploader from 'react-images-upload';
import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import DatePicker from 'react-modern-calendar-datepicker';
import { ToastContainer, toast } from 'react-toastify';

const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});

function Upload(props) {


  const onDrop = (picture) => {
    // this.setState({
    //   pictures: this.state.pictures.concat(picture),
    // });
    console.log(picture)
    var t = pictures.concat(picture)
    setPictures(t)
  }


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

  const [pictures, setPictures] = useState('');
  const [address, setAddress] = useState('');
  const [leader, setLeader] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');


  const tourRegister = () => {
    if (address && leader && date && description) {
      const isPrevTourExist = JSON.parse(localStorage.getItem('myTours'))
      if (isPrevTourExist) {
        const newData = {
          'address': address,
          'leader': leader,
          'date': `${date.year}/${date.month}/${date.day}`,
          'description': description
        }
        console.log(isPrevTourExist)
        isPrevTourExist.push(newData)
        localStorage.setItem('myTours', JSON.stringify(isPrevTourExist))
      } else {
        const newData = [{
          'address': address,
          'leader': leader,
          'date': `${date.year}/${date.month}/${date.day}`,
          'description': description
        }]
        localStorage.setItem('myTours', [JSON.stringify(newData)])
      }
      toast.success('تور شما با موفقیت ثبت شد', { position: toast.POSITION.BOTTOM_LEFT });
      setTimeout(() => {
        props.history.push({ pathname: './home' })
      }, 2000);
    } else {
      toast.error('همه فیلد ها را پر کنید', { position: toast.POSITION.BOTTOM_LEFT });
    }
  }

  const renderCustomInput = ({ ref }) => {

    const selectedDate = date
    return (
      <input
        style={{ height: 40, marginRight: 40 }}
        placeholder="انتخاب کنید"
        dir='rtl'
        value={selectedDate && `${selectedDate.year}/${selectedDate.month}/${selectedDate.day}`}
        readOnly
        ref={ref}
      />
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <div className={classes.root} dir='rtl' style={{ marginTop: 60 }}>
        <Grid container spacing={3}>
          <Paper className={classes.paper} style={{ margin: '0 auto' }}>
            <Grid item xs={12}  >
              <form noValidate autoComplete="off" dir={'rtl'} style={{ display: "flex" }}>
                <input style={{ height: 40 }} placeHolder="مکان تور" type='text' dir='rtl' value={address} onChange={(e) => setAddress(e.target.value)} />
                <input style={{ height: 40, marginRight: 40 }} placeHolder="نام لیدر" type='text' value={leader} onChange={(e) => setLeader(e.target.value)} />
                {/* <InputMask style={{ height: 40, marginRight: 40 }} mask="99/99/9999" value={date} onChange={(e) => setDate(e.target.value)}>{() =>
                  <input style={{ marginRight: 40 }} placeHolder="تاریخ برگزاری" label="تاریخ بر" />
                }
                </InputMask> */}
                <DatePicker
                  value={date}
                  onChange={(val) => setDate(val)}
                  calendarPopperPosition={'bottom'}
                  locale="fa"
                  renderInput={renderCustomInput}
                  inputPlaceholder='مثال :‌ 1401/04/31' />
              </form>

            </Grid>

            <Grid item xs={12}  >
              <textarea style={{ height: 40, marginTop: 40, width: '100%' }} type='text' placeHolder="توضیحات تور" multiline rows={4} label="نام لیدر" value={description} onChange={(e) => setDescription(e.target.value)} />
            </Grid>

            <Grid item xs={12} style={{ marginTop: 40 }}>
              <ImageUploader
                withIcon={true}
                withLabel={false}
                buttonText='انتخاب عکس'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview={true}
                singleImage={true}
              />
            </Grid>
          </Paper>
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 50 }}>
          <div onClick={tourRegister} style={{ width: '20%', padding: '5px 20px', backgroundColor: "#3c8bfa", textAlign: 'center', color: '#fff', borderRadius: 10, cursor: 'pointer' }}>
            ثبت تور
          </div>

        </div>
      </div >
    </ThemeProvider>
  );
}

export default Upload;
