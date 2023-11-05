"use client"

import React from 'react'
import Image from 'next/image';

import '../../styles/courseDetail/instructor.css'

export default function Instructor({instructorData}) {
    const data = instructorData;
    console.log(data, 'datadatadata')
  return (
    <section class="meet_instructor sectionSpace">
    <div class="container">
        <h3 class="secondary-h1"> Meet  <span> Instructor</span></h3>

        <div class="instructor_box boxSpace">
            <div class="meet_instructor_box">
                <h3 class="secondary-h1"> Meet  <span> Instructor</span></h3>
            </div>
            <div class="instructor_flex">
                <Image src="http://rekhtafoundation.urdulearning.rekhta.org/wp-content/themes/rekhtafoundation/lms-image/instructor.jpg" width={382} height={356}></Image>
                <div class="instructor_info">
                    <h3>{data.instructorList[0].name}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum est, lobortis vitae feugiat et, pulvinar sit amet est.
                    Suspendisse viverra libero vitae urna euismod euismod. Duis mattis mollis nulla, at aliquam lorem</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
