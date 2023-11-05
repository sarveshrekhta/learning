'use client';
import '../../styles/home/Courses.css'
import CourseCart from './CourseCart/CourseCart'
import Slider from 'react-slick';
import Link from 'next/link';
import { flat } from '../../utils/RTEControl';
import { useEffect, useState } from 'react';

export default function SuggestedCourses({suggestedData}) {

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

  const result = suggestedData.coursesYouMayLike;
  const desktopSliderSettings  = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

  };

  return (
    <>
    {result.length != 0 ?  <section className="courseRL">
      <div className="container">
         <h3 className="secondary-h1">Courses You <span>May Like</span></h3>
           <div className='viewAll'>
            {result.length > 3 ? <Link class="primaryBtn" href="/courses">View All</Link> : null}
           </div>
        <div>
  
         {isDesktop ? (
            <Slider {...desktopSliderSettings}>
              {result && result.slice(0, 4).map((user, index) => (
    
      <div key={index}>
      <CourseCart courses={user}></CourseCart>
    </div>
          ))}
         </Slider>
      ) : (
         result && result.map((user, index) => (
           <div key={index}>
            <CourseCart courses={user}></CourseCart>
           </div>
         ))
      )}
     </div>
  </div>
</section> : null}
</>
  )
}
