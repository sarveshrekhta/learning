'use server';
import React from 'react'
import Link from 'next/link';
import '../../../styles/banner.css'
import Image from 'next/image';
export default async function Banner() {

  return (
    <section>
    <div className="container">
       <div className='heroBanner'>
       <div className="banner">
            <h2>Experience the Joy of Learning <span className='changeColor'> Language<cite>,</cite> Literature <cite>&</cite> Culture</span>

            </h2>

            <p> Welcome to our new eLearning platform built to give a unique perspective of learning Urdu. Courses are created and delivered by scholars in bite-sized lessons.
</p>
            <div className="exploreCourses">
                <Link  href="/courses" className="primaryBtn" id="exploreCourses" prefetch={false} >Explore Courses</Link >
            </div>
        </div>
        <div className='bannerVideo'>
                    <div className='videoBanner'>
                        <Image src="/assets/images/heroBanner.png" width={648} height={648} alt='hero banner'/>
                     </div>

        </div>
       </div>
    </div>
</section>
  )
}
