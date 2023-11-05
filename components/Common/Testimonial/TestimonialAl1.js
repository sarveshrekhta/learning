'use client';

import React from 'react'
import Slider from 'react-slick';
import '../../../styles/testimonial.css'
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
export default function TestimonialAL1() {
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



    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

    };



    return (
        <section className="trusted_us">
            <div className="container noPaddingContainer">
            <h3 className="secondary-h1"> See What <span>Our Learners Say</span></h3>
                <div className="testimonial courseRL_Flex ">

                    <div className='sliderWidth'>
                        {isDesktop ? ( <Slider {...settings}>

<div>
    <div className="testimonial_card">
        {/* <img src="./assets/images/RekhtaLogo.png" alt="" /> */}
        <Image className='arrowSmall' src="/assets/images/arrowSmall.svg" alt='value_card' width={47} height={22}></Image>
        <p>This course is a game-changer! I've always loved Urdu poetry, but half the time, I didn't know what they were saying. Thanks to this course, now when I read Ghalib or Faiz, it feels like they're speaking directly to me. Highly recommend it, folks!</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Ashish Bhat</h3>
                {/* <p>Product Designer</p> */}
                <Image src="/assets/images/arrow.png" alt='value_card' width={200} height={100}></Image>

            </div>
        </div>
    </div>
</div>
<div>
    <div className="testimonial_card">
        {/* <img src="./assets/images/RekhtaLogo.png" alt="" /> */}
        <Image className='arrowSmall' src="/assets/images/arrowSmall.svg" alt='value_card' width={47} height={22}></Image>
        <p>As someone who adores Urdu poetry, I can't believe I didn't take this course earlier. It's like finally finding the missing piece of the puzzle. The examples from the poetry world are just magical.</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Kartik Gupta</h3>
                {/* <p>Product Designer</p> */}
                <Image src="/assets/images/arrow.png" alt='value_card' width={200} height={100}></Image>

            </div>
        </div>
    </div>
</div>
<div>
    <div className="testimonial_card">
        {/* <img src="./assets/images/RekhtaLogo.png" alt="" /> */}
        <Image className='arrowSmall' src="/assets/images/arrowSmall.svg" alt='value_card' width={47} height={22}></Image>
        <p>This course is like a treasure hunt for words. I appreciate the interactive mode, it doesn't feel like a classroom. It's like joining a poetry club with your buddies. Kudos to the creators!
</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Mohammad Navazish</h3>
                {/* <p>Product Designer</p> */}
                <Image src="/assets/images/arrow.png" alt='value_card' width={200} height={100}></Image>

            </div>
        </div>
    </div>
</div>
<div>
    <div className="testimonial_card">
        {/* <img src="./assets/images/RekhtaLogo.png" alt="" /> */}
        <Image className='arrowSmall' src="/assets/images/arrowSmall.svg" alt='value_card' width={47} height={22}></Image>
        <p>This course is a hidden gem for Urdu poetry enthusiasts. Words are explained so nicely. Now I’m able to grasp most of the poetry I read in Urdu. Honestly, one of the best learning experiences!</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Arfa Naaz</h3>
                {/* <p>Product Designer</p> */}
                <Image src="/assets/images/arrow.png" alt='value_card' width={200} height={100}></Image>

            </div>
        </div>
    </div>
</div>
</Slider>) : ( <>

    <div>
    <div className="testimonial_card">
        {/* <img src="./assets/images/RekhtaLogo.png" alt="" /> */}
        <Image className='arrowSmall' src="/assets/images/arrowSmall.svg" alt='value_card' width={47} height={22}></Image>
        <p>This course is a game-changer! I've always loved Urdu poetry, but half the time, I didn't know what they were saying. Thanks to this course, now when I read Ghalib or Faiz, it feels like they're speaking directly to me. Highly recommend it, folks!</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Ashish Bhat</h3>
                {/* <p>Product Designer</p> */}
                <Image src="/assets/images/arrow.png" alt='value_card' width={200} height={100}></Image>

            </div>
        </div>
    </div>
</div>
<div>
    <div className="testimonial_card">
        {/* <img src="./assets/images/RekhtaLogo.png" alt="" /> */}
        <Image className='arrowSmall' src="/assets/images/arrowSmall.svg" alt='value_card' width={47} height={22}></Image>
        <p>As someone who adores Urdu poetry, I can't believe I didn't take this course earlier. It's like finally finding the missing piece of the puzzle. The examples from the poetry world are just magical.</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Kartik Gupta</h3>
                {/* <p>Product Designer</p> */}
                <Image src="/assets/images/arrow.png" alt='value_card' width={200} height={100}></Image>

            </div>
        </div>
    </div>
</div>
<div>
    <div className="testimonial_card">
        {/* <img src="./assets/images/RekhtaLogo.png" alt="" /> */}
        <Image className='arrowSmall' src="/assets/images/arrowSmall.svg" alt='value_card' width={47} height={22}></Image>
        <p>This course is like a treasure hunt for words. I appreciate the interactive mode, it doesn't feel like a classroom. It's like joining a poetry club with your buddies. Kudos to the creators!
</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Mohammad Navazish</h3>
                {/* <p>Product Designer</p> */}
                <Image src="/assets/images/arrow.png" alt='value_card' width={200} height={100}></Image>

            </div>
        </div>
    </div>
</div>
<div>
    <div className="testimonial_card">
        {/* <img src="./assets/images/RekhtaLogo.png" alt="" /> */}
        <Image className='arrowSmall' src="/assets/images/arrowSmall.svg" alt='value_card' width={47} height={22}></Image>
        <p>This course is a hidden gem for Urdu poetry enthusiasts. Words are explained so nicely. Now I’m able to grasp most of the poetry I read in Urdu. Honestly, one of the best learning experiences!</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Arfa Naaz</h3>
                {/* <p>Product Designer</p> */}
                <Image src="/assets/images/arrow.png" alt='value_card' width={200} height={100}></Image>

            </div>
        </div>
    </div>
</div>

</>)}
                    </div>
                </div>
            </div>
        </section>
    )
}
