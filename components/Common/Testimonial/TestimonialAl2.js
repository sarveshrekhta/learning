'use client';

import React from 'react'
import Slider from 'react-slick';
import '../../../styles/testimonial.css'
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
export default function TestimonialAL2() {
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
        <p>After completing Alfaaz Part I,  I couldn't resist Alfaaz Part II. I have learnt so much more about the Urdu vocabulary from these courses. It is a good series and will give you so much detail about each word they explain.</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Vikram Singh</h3>
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
        <p>This course is superb for people who want to expand their knowledge of Urdu words. The explanations are so good, and cover so many aspects. Good job team Rekhta!</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Deepak Singh</h3>
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
        <p>Interactive learning at its finest! I used to be clueless about Urdu, but now I can understand most words and the concepts behind them.
</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Ali Hassan</h3>
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
        <p>Alfaaz Part II is s great course, packed with so many good things. I found examples from both poetry and prose to be a great advantage. I'm more confident in my Urdu skills now. Highly recommended!</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Amit Kumar</h3>
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
        <p>After completing Alfaaz Part I,  I couldn't resist Alfaaz Part II. I have learnt so much more about the Urdu vocabulary from these courses. It is a good series and will give you so much detail about each word they explain.</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Vikram Singh</h3>
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
        <p>This course is superb for people who want to expand their knowledge of Urdu words. The explanations are so good, and cover so many aspects. Good job team Rekhta!</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Deepak Singh</h3>
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
        <p>Interactive learning at its finest! I used to be clueless about Urdu, but now I can understand most words and the concepts behind them.
</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Ali Hassan</h3>
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
        <p>Alfaaz Part II is s great course, packed with so many good things. I found examples from both poetry and prose to be a great advantage. I'm more confident in my Urdu skills now. Highly recommended!</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Amit Kumar</h3>
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
