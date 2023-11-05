'use client';

import React from 'react'
import Slider from 'react-slick';
import '../../../styles/testimonial.css'
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
export default function TestimonialAm() {
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
                <h3 className="secondary-h1"> They  <span>  Trusted Us</span></h3>
                <div className="testimonial courseRL_Flex ">

                    <div className='sliderWidth'>
                        {isDesktop ? (<Slider {...settings}>

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
                                    <p>Thanks to Rasmul-Khat as I’m now able to read my favourite poets’ works in the Urdu script itself, which feels so rewarding. It is a great pleasure to be able to read Urdu in its original form.</p>
                                    <div className="testimonial_client-details">
                                        <div className="client_icon">
                                            <i className='rl-user'></i>
                                        </div>
                                        <div className="testimonial_client_name">
                                            <h3>Vikas Srivastava</h3>
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
                                    <p>Kudos to Rekhta for making this course. I always felt a void because I couldn’t read Urdu. But finding this course came as a pleasant surprise in life as now I’m able to slowly improve my Urdu reading and writing.</p>
                                    <div className="testimonial_client-details">
                                        <div className="client_icon">
                                            <i className='rl-user'></i>
                                        </div>
                                        <div className="testimonial_client_name">
                                            <h3>Sunil Bijlani</h3>
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
                                    <p>I found this course very illustrative and helpful and enjoyed a lot. Thanks to Rekhta for this great effort to promote the language of love.</p>
                                    <div className="testimonial_client-details">
                                        <div className="client_icon">
                                            <i className='rl-user'></i>
                                        </div>
                                        <div className="testimonial_client_name">
                                            <h3>Amit Chauhan</h3>
                                            <p>Retd. Govt. Officer</p>
                                            <Image src="/assets/images/arrow.png" alt='value_card' width={200} height={100}></Image>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="testimonial_card">
                                    <Image className='arrowSmall' src="/assets/images/arrowSmall.svg" alt='value_card' width={47} height={22}></Image>
                                    <p>Hats off to your efforts! Your service for Urdu is incredible! This is the only platform which is providing such service which is very essential to everyone who wants to learn Urdu. Keep going folks! You are the best and awesome!</p>
                                    <div className="testimonial_client-details">
                                        <div className="client_icon">
                                            <i className='rl-user'></i>
                                        </div>
                                        <div className="testimonial_client_name">
                                            <h3>Divyansi</h3>
                                            <p>Engineer</p>
                                            <Image src="/assets/images/arrow.png" alt='value_card' width={200} height={100}></Image>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="testimonial_card">
                                    <Image className='arrowSmall' src="/assets/images/arrowSmall.svg" alt='value_card' width={47} height={22}></Image>
                                    <p>No doubt the course is lengthy but it is very well organized and kept in interactive manner to learn Urdu and it’s the easiest and perfect website I have encountered on the internet to learn Urdu for a new comer.</p>
                                    <div className="testimonial_client-details">
                                        <div className="client_icon">
                                            <i className='rl-user'></i>
                                        </div>
                                        <div className="testimonial_client_name">
                                            <h3>Manjeet</h3>
                                            <p>Engineer</p>
                                            <Image src="/assets/images/arrow.png" alt='value_card' width={200} height={100}></Image>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>) : (<>

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
                                    <p>Thanks to Rasmul-Khat as I’m now able to read my favourite poets’ works in the Urdu script itself, which feels so rewarding. It is a great pleasure to be able to read Urdu in its original form.</p>
                                    <div className="testimonial_client-details">
                                        <div className="client_icon">
                                            <i className='rl-user'></i>
                                        </div>
                                        <div className="testimonial_client_name">
                                            <h3>Vikas Srivastava</h3>
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
                                    <p>Kudos to Rekhta for making this course. I always felt a void because I couldn’t read Urdu. But finding this course came as a pleasant surprise in life as now I’m able to slowly improve my Urdu reading and writing.</p>
                                    <div className="testimonial_client-details">
                                        <div className="client_icon">
                                            <i className='rl-user'></i>
                                        </div>
                                        <div className="testimonial_client_name">
                                            <h3>Sunil Bijlani</h3>
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
                                    <p>I found this course very illustrative and helpful and enjoyed a lot. Thanks to Rekhta for this great effort to promote the language of love.</p>
                                    <div className="testimonial_client-details">
                                        <div className="client_icon">
                                            <i className='rl-user'></i>
                                        </div>
                                        <div className="testimonial_client_name">
                                            <h3>Amit Chauhan</h3>
                                            <p>Retd. Govt. Officer</p>
                                            <Image src="/assets/images/arrow.png" alt='value_card' width={200} height={100}></Image>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="testimonial_card">
                                    <Image className='arrowSmall' src="/assets/images/arrowSmall.svg" alt='value_card' width={47} height={22}></Image>
                                    <p>Hats off to your efforts! Your service for Urdu is incredible! This is the only platform which is providing such service which is very essential to everyone who wants to learn Urdu. Keep going folks! You are the best and awesome!</p>
                                    <div className="testimonial_client-details">
                                        <div className="client_icon">
                                            <i className='rl-user'></i>
                                        </div>
                                        <div className="testimonial_client_name">
                                            <h3>Divyansi</h3>
                                            <p>Engineer</p>
                                            <Image src="/assets/images/arrow.png" alt='value_card' width={200} height={100}></Image>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="testimonial_card">
                                    <Image className='arrowSmall' src="/assets/images/arrowSmall.svg" alt='value_card' width={47} height={22}></Image>
                                    <p>No doubt the course is lengthy but it is very well organized and kept in interactive manner to learn Urdu and it’s the easiest and perfect website I have encountered on the internet to learn Urdu for a new comer.</p>
                                    <div className="testimonial_client-details">
                                        <div className="client_icon">
                                            <i className='rl-user'></i>
                                        </div>
                                        <div className="testimonial_client_name">
                                            <h3>Manjeet</h3>
                                            <p>Engineer</p>
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
