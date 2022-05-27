import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment-jalaali';


function MyRegisteredTours(props) {

  const [myTours, setMyTours] = useState()

  useEffect(() => {
    const myTours = JSON.parse(localStorage.getItem('registeredTours'))
    setMyTours(myTours)
  }, [])

  return (
    <div style={{ padding: 70, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <h2 className='title'>
          تورهای ثبت نام شده
        </h2 >
      </div>
      {
        myTours ?
          <table class="table" >
            <thead class="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">مکان تور</th>
                <th scope="col">تاریخ برگزاری</th>
                <th scope="col">لیدر تور</th>
                <th scope="col">توضیحات تور</th>
                <th scope="col">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {myTours.map((tour, i) => {
                return (
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{tour.address}</td>
                    <td>{tour.date}</td>
                    <td>{tour.leader}</td>
                    <td>{tour.description}</td>
                    <td>
                      <div
                        onClick={() => props.props.props.history.push(`/post?tour=${tour.index}`)}
                        style={{ padding: '5px 20px', backgroundColor: "#3c8bfa", textAlign: 'center', color: '#fff', borderRadius: 10, cursor: 'pointer' }}>
                        جزئیات
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          :
          <p style={{ fontSize: 20 }}>
            اطلاعاتی موجود نسیت
          </p>
      }
    </div >
  );
}

export default MyRegisteredTours;