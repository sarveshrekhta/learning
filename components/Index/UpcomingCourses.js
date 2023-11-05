'use client';
import React, { useEffect, useState } from 'react'
import UpcomingCoursesCart from './UpcomingCoursesCart'
import Slider from 'react-slick';
import Notified from '../Notified/Notified';
export default function UpcomingCourses({ coursesData }) {

  const [getNotified, setGetNotified] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openNotified = (flag, coursesData) => {
       setGetNotified(flag);
       setSelectedItem(coursesData);
    }

    // const handleOpenPopup = (item) => {
    //   setSelectedItem(item);
    //   setIsPopupOpen(true);
    // };


console.log(selectedItem?.programId, 'selectedItemselectedItem')


  useEffect(() => {

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992);
    };

    // load window
    handleResize();

    // resize window
    window.addEventListener('resize', handleResize);

    // remove after event after resize window
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

  };

  return (
    <section className="upcoming_courses trusted_us">
    <div className="container noPaddingContainer">
      <h3 className="secondary-h1"> Upcoming<span>  Courses</span></h3>
      {/* <h3 className="secondary-h1"> Coming Soon</h3> */}
      <div className="upcoming_courses_slider">
        <div className='sliderWidth'>

          {isDesktop ? ( <><Slider {...settings}>

            {coursesData.courseDurations.map((el, index) => (
              <div>

                <UpcomingCoursesCart openNotified={openNotified} key={index} coursesData={el}  ></UpcomingCoursesCart>
              </div>
            ))}

          </Slider>




          </>) : coursesData.courseDurations.map((el, index) => (
              <div>
                <UpcomingCoursesCart openNotified={openNotified} key={index} coursesData={el}></UpcomingCoursesCart>
              </div>
            ))}


        </div>

      </div>

      {getNotified ? <Notified openNotified={openNotified} programIds={selectedItem}></Notified> : null }
    </div>
  </section>
  )
}