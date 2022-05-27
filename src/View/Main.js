import React from 'react';
import { useSelector } from 'react-redux';
import Home from '../Components/Home'
import { ToastContainer, toast } from 'react-toastify';

function Main(props) {
    return (
        <>
            <ToastContainer />
            <Home props={props} />
        </>
    );
}

export default Main;
