'use client';
import '../../styles/home/Courses.css'
import CourseCart from '../Common/CourseCart/CourseCart'
import Slider from 'react-slick';
import Link from 'next/link';
import { flat } from '../../utils/RTEControl';
import { useEffect, useState } from 'react';

export default function Courses({courseDataSlider, ipinfoData}) {



  const [isDesktop, setIsDesktop] = useState(false);

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

  const result = courseDataSlider;
  const desktopSliderSettings  = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

  };

  return (
    <section className="courseRL">
      <div className="container">
        <h3 className="secondary-h1">Courses <span>& Masterclasses</span></h3>
          <div className='viewAll'>
            <Link class="primaryBtn" href="/courses">View All</Link>
          </div>
        <div>

        {isDesktop ? (
            <Slider {...desktopSliderSettings}>
              {result && result.map((user, index) => (
                <div key={index}>
                  <CourseCart ipinfoData={ipinfoData} courses={user}></CourseCart>
                </div>
              ))}
            </Slider>
          ) : (
            result && result.slice(0, 4).map((user, index) => (
              <div key={index}>
                <CourseCart courses={user}></CourseCart>
              </div>
            ))
          )}
        </div>


      </div>
    </section>
  )
}
