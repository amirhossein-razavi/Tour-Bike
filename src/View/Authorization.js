import React from 'react';
import Register from '../Components/Register';
import { useSelector } from 'react-redux'

function Authorization(props) {
  const status = useSelector(state => state.auth.status)
  return (
  <Register props={props}/>
  );
}

export default Authorization;
