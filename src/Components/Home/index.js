import React, { useEffect } from 'react';

import Tours from '../Tours'
import MyTours from '../MyTours'
import './style.css';
import MyRegisteredTours from '../MyRegisteredTours';
import { ToastContainer, toast } from 'react-toastify';

function Home(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const scroll = () => {
        window.scrollTo(0, 700)
    }
    const scroll2 = () => {
        window.scrollTo(0, 5000)
    }

    return (
        <>
            <ToastContainer />
            <section class="site-hero overlay" className='homeBackground'>
                <div style={{ backgroundColor: 'rgba(0,0,0,.7)' }}>
                    <div class="row site-hero-inner justify-content-center align-items-center m-0">
                        <div class="col-md-10 text-center">
                            <h1 class="heading" data-aos="fade-up"> {JSON.parse(localStorage.getItem("username"))} عزیز به تور بایک خوش آمدید</h1>
                            <p class="sub-heading mb-5" data-aos="fade-up" data-aos-delay="100">بهترین تور ها را اینجا پیدا کنید</p>
                            {/* <p data-aos="fade-up" data-aos-delay="100"> */}
                            <a href="#" class="btn btn-primary mr-md-2 mr-0 mb-3 d-sm-inline d-block pr-5 pl-5 ml-3" onClick={scroll}>لیست تورها</a>
                            <a href="#" onClick={scroll2} class="btn  btn-outline-light d-sm-inline d-block pr-5 pl-5">ایجاد تور جدید</a>
                            {/* </p> */}
                        </div>
                    </div>
                </div>
            </section>
            <Tours id='tours' props={props} />
            <MyTours id='tours' props={props} />
            <MyRegisteredTours props={props} />
        </>
    );
}

export default Home;
