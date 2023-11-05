'use client';

import React from 'react'
import Slider from 'react-slick';
import '../../../styles/testimonial.css'
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
export default function Testimonial() {
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
        <p>It is useful for someone like me who hasn’t studied Urdu in school but has a passion for the language, and Urdu poetry. Thank you so much for giving this opportunity to people like me who want to improve their knowledge of Urdu.</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Vikas Misri</h3>
                <p>Senior VP, Clintus Group</p>
                <Image src="/assets/images/arrow.png" alt='value_card' width={200} height={100}></Image>

            </div>
        </div>
    </div>
</div>
<div>
    <div className="testimonial_card">
        {/* <img src="./assets/images/RekhtaLogo.png" alt="" /> */}
        <Image className='arrowSmall' src="/assets/images/arrowSmall.svg" alt='value_card' width={47} height={22}></Image>
        <p>As far as Alfaaz is concerned, it is a great mix of fun, learning and competitive spirit. The graphics and the descriptions in Alfaaz are world-class, as one always expects from Rekhta.</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Sunil Gupta</h3>
                <p>MD & CEO, AVIS India</p>
                <Image src="/assets/images/arrow.png" alt='value_card' width={200} height={100}></Image>

            </div>
        </div>
    </div>
</div>
<div>
    <div className="testimonial_card">
        {/* <img src="./assets/images/RekhtaLogo.png" alt="" /> */}
        <Image className='arrowSmall' src="/assets/images/arrowSmall.svg" alt='value_card' width={47} height={22}></Image>
        <p>I found Rekhta’s Urdu vocabulary course very useful as I enjoy translating Urdu poetry into English and it’s really helpful to understand the quite specialized vocabulary of Urdu poetry with its metaphors, tropes, and allusions.</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Dr. Karima Brooke</h3>
                <p>Poet, Artist</p>
                <Image src="/assets/images/arrow.png" alt='value_card' width={200} height={100}></Image>

            </div>
        </div>
    </div>
</div>
<div>
    <div className="testimonial_card">
        {/* <img src="./assets/images/RekhtaLogo.png" alt="" /> */}
        <Image className='arrowSmall' src="/assets/images/arrowSmall.svg" alt='value_card' width={47} height={22}></Image>
        <p>Learning Urdu in my 90s has been a real joy. Big thanks to Rekhta for this super user-friendly course that is easily accessible, making it possible for seniors like me to delve into this enriching experience.</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Satees R Pathak</h3>
                <p>Retd. Govt. Officer</p>
                <Image src="/assets/images/arrow.png" alt='value_card' width={200} height={100}></Image>

            </div>
        </div>
    </div>
</div>
</Slider>) : ( <>

<div>
    <div className="testimonial_card">
    <Image className='arrowSmall' src="/assets/images/arrowSmall.svg" alt='value_card' width={47} height={22}></Image>
        <p>Thanks to Rekhta for creating the Rasmul-Khat course, as I’m now able to read my favourite poets’ works in the Urdu script itself, which feels so rewarding. It is a great pleasure to be able to read Urdu in its original form.
</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Vikas Srivastava</h3>
                <p>Musician</p>
                <Image src="/assets/images/arrow.png" alt='value_card' width={200} height={100}></Image>

            </div>
        </div>
    </div>
</div>

<div>
    <div className="testimonial_card">
    <Image className='arrowSmall' src="/assets/images/arrowSmall.svg" alt='value_card' width={47} height={22}></Image>
        <p>It was a delightful experience joining the Aamozish courses. Each course is so interactive and helpful and it makes learning so enjoyable. Keep up the great work in spreading the magic of Urdu.</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Payal</h3>
                <p>Professional</p>
                <Image src="/assets/images/arrow.png" alt='value_card' width={200} height={100}></Image>

            </div>
        </div>
    </div>
</div>

<div>
    <div className="testimonial_card">
    <Image className='arrowSmall' src="/assets/images/arrowSmall.svg" alt='value_card' width={47} height={22}></Image>
        <p>Being a teacher myself, I understand the importance of interactive learning, especially in learning a new script. Very helpful for Urdu lovers.</p>
        <div className="testimonial_client-details">
            <div className="client_icon">
                <i className='rl-user'></i>
            </div>
            <div className="testimonial_client_name">
                <h3>Shagufta</h3>
                <p>Teacher</p>
                <Image src="/assets/images/arrow.png" alt='value_card' width={200} height={100}></Image>

            </div>
        </div>
    </div>
</div>

<div>
    <div className="testimonial_card">
    <Image className='arrowSmall' src="/assets/images/arrowSmall.svg" alt='value_card' width={47} height={22}></Image>
        <p>This is the best thing I took up after retirement. From learning a new language from its basics and then moving on to learn its vocabulary, Aamozish courses have helped me through all. Great efforts, keep it up!</p>
        <div className="testimonial_client-details">
            <div className="client_icon">

            </div>
            <div className="testimonial_client_name">
                <h3>Amit Chauhan</h3>
                <p>Retd. Govt Officer</p>
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
