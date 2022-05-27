import React, { useState } from 'react';
import './style.css';
import { tours } from '../../Mock data/tours';
import moment from 'moment-jalaali';

// function randomDate() {
//     for (var i; i <= 15; i++) {
//         return new Date(new Date().getTime() + Math.random() * (new Date(2020, 11, 14).getTime() - new Date().getTime()))
//     }
// }

// const mamd = randomDate();

function Tours(props) {

    // const [time, setTime] = useState([]);
    var arr = [];
    while (arr.length < tours.length) {
        var r = Math.floor(Math.random() * (200 - 50) + 50) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }

    return (
        <section class="section visit-section">
            <div class="posts_container">
                <div class="row">
                    <h2 className='title'>
                        لیست تورها
                    </h2>
                </div>
                <div class="row d-flex justify-content-between">
                    {tours.length && tours.map((tour) => {
                        return (
                            // <div onClick={() => props.props.props.history.push(`/post?tour=${tour.index}&time=${moment(time[tour.index]).format('jYYYY/jM/jD')}`)} class="col-lg-3 col-md-6 visit mb-3 mb-5 card" data-aos="fade-right">
                            //     <img src={require(`../../assets/images/tours-${tour.index + 1}.jpg`)} alt="Image placeholder" class="img-fluid" />
                            //     <p className='tour-address'>{tour.address}</p>
                            //     <p className='text-right'>{tour.about.slice(0, arr[tour.index])} ... &nbsp; <a style={{ color: '#36b2ff' }}>بیشتر</a></p>
                            //     <p className='text-right'>لیدر : <span style={{ color: '#222' }}>{tour.name}</span></p>
                            //     {time.length && <p className='text-right'>تاریخ : <span style={{ color: '#222' }}>{moment(time[tour.index]).format('jYYYY/jM/jD')}</span></p>}
                            // </div>
                            <div onClick={() => props.props.props.history.push(`/post?tour=${tour.index}`)} class="d-flex justify-content-center">
                                <figure class="card card-product-grid card-lg"> <img src={require(`../../assets/images/tours-${tour.index + 1}.jpg`)} alt="Image placeholder" class="img-fluid" />
                                    <figcaption class="info-wrap">
                                        <div class="row">
                                            <div class="col-md-8 col-xs-8"> <a href="#" class="title2 text-right" data-abc="true">{tour.address}</a>   <p className='text-right'>لیدر : <span style={{ color: '#222' }}>{tour.name}</span></p> </div>
                                            <div class="col-md-4 col-xs-4">
                                                <div class="rating text-left"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>  </div>
                                                <p class="rated text-left">امتیاز 4.0/5</p>
                                            </div>
                                        </div>
                                    </figcaption>
                                    <div class="bottom-wrap-payment">
                                        <figcaption class="info-wrap">
                                            <p className='text-right'>{tour.about.slice(0, arr[tour.index])} ... &nbsp; <a style={{ color: '#36b2ff' }}>بیشتر</a></p>
                                        </figcaption>
                                    </div>
                                    <div class="d-flex justify-content-between align-item-center bottom-wrap">
                                        <a href="#" class="btn btn-primary float-right" data-abc="true"> جزئیات </a>
                                      <p className='text-right'>تاریخ : <span style={{ color: '#222' }}>{tour.registered}</span></p>
                                    </div>
                                </figure>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Tours;
