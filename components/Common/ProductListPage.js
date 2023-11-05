"use client";

import '../../styles/home/Courses.css'
import '../../styles/courses/Courses.css'
import CourseCart from '../../components/Common/CourseCart/CourseCart'


const ProductListPage = ({ data, ipinfoData }) => {
  const result = data;
  return (

    <section class="allCourses">
      <div class="container">
        <div class="coursesFilter">
          <div>
          <h3 class="secondary-h1">All Courses <span>& Masterclasses</span></h3>
          </div>

          <h2>We offer courses on a variety of topics like Urdu script and vocabulary learning, poetry writing, poetry appreciation, language and cultural history, and more. Start your journey by picking what aligns with your interests, passions, and goals.</h2>

        </div>

        <div class="coursesListingAllBox">

          {result?.map((user) => (
            <CourseCart courses={user} ipinfoData={ipinfoData}></CourseCart>
          ))}

        </div>
      </div>

    </section>

  );
};

export default ProductListPage;
