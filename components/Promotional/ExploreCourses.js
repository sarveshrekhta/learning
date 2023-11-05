
import React from 'react'
import Link from 'next/link'

export default function ExploreCourses() {
  return (

    <section>
    <div class="container">
        <div class="pbExploreCourses">
             <div class="pbExploreLeft">
                 <h2>Start your journey today</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum est, lobortis vitae feugiat et, pulvinar sit</p>
                 <div class="exploreCourses"><Link class="primaryBtn" id="pbexploreCourses" href="/courses">Explore Courses</Link></div>
             </div>
             <div class="pbBuyCourseRight">
                <figure>
                    <img src="assets/images/promotional_banner.png" alt="PromotionalBanner"/>
                </figure>
             </div>
        </div>

    </div>
</section>
  )
}
