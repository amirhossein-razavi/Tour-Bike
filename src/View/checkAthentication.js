import React, { useEffect } from 'react';
import Register from '../Components/Register';
import { useSelector } from 'react-redux'
import { userInfo } from 'os';

function CheckAthentication(props) {


  useEffect(() => {
    const loginCheck = localStorage.getItem('username')
    setTimeout(() => {
      loginCheck ? props.history.push({ pathname: '/home' }) : props.history.push({ pathname: '/auth' })
    }, 500);
  }, [])

  return (
    <> </>
  );
}

export default CheckAthentication;
