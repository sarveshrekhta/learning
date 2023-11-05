'use client';
import React, { useRef, useEffect, useState } from "react";
import lottie from 'lottie-web';
import '../../styles/home/ValuesWeDeliver.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slider from 'react-slick';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';
import Image from "next/image";

// import '../../node_modules/swiper/shared/';
export default function ValuesWeDeliver() {

    const container = useRef(null)
    const container1 = useRef(null)
    const container2 = useRef(null)
    const container3 = useRef(null)


    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const slider1Ref = useRef(null);
    const slider2Ref = useRef(null);

    useEffect(() => {
      setNav1(slider1Ref.current);
      setNav2(slider2Ref.current);
    }, []);


    useEffect(() => {
        const instance = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../public/assets/images/38274.json')
        })
        const instance1 = lottie.loadAnimation({
            container: container1.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../public/assets/images/certificate.json')
        })

        const instance2 = lottie.loadAnimation({
            container: container2.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../public/assets/images/infinite.json')
        })

        const instance3 = lottie.loadAnimation({
            container: container3.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../public/assets/images/loader.json')
        })

        return () => {
            instance.destroy(),
            instance1.destroy();
            instance2.destroy();
            instance3.destroy();
        };


    }, [])

    const valueData =  [
        {
            'thum': 'Structured Curriculum',
            'contentHeading': 'Structured curriculum',
            'contentInfo' : 'Lessons formulated upon best pedagogy practices, for excellent learning outcomes.',
            'img':'Structured-curriculum'
        },
        {
            'thum': 'Well-researched and Authentic',
            'contentHeading': 'Well-researched and authentic',
            'contentInfo' : 'Authentic & reliable lessons, based on extensive research and fact-checking.',
            'img':'Well-researched'
        },
        {
            'thum': 'Live Learning Support',
            'contentHeading': 'Live learning support',
            'contentInfo' : 'Don’t be limited by doubts. Get live learning support from experts.',
            'img':'Strong-learning'
        },
        {
            'thum': 'Bite-sized lessons',
            'contentHeading': 'Bite-sized lessons',
            'contentInfo' : 'Short and precise lessons delivered in minutes, which don’t demand abundant time.',
            'img':'Well-researched'
        },
        {
            'thum': 'Visualised for Full Immersion',
            'contentHeading': 'Visualised for full immersion',
            'contentInfo' : 'Inspiring lectures enhanced with visual elements to enrich the learning experience.',
            'img':'Well-researched'
        }

    ]

    return (
        <section className="values_we_deliver">



            <div className="container">


                              <div className="values_we_deliver_section">
                    <div className="sliderWidth">

                        <div className="values_we_deliver_slider_thmb">
                            <h4 className="primary-h4">Values <span>we deliver</span></h4>

                            <div className="sliderNav">
                                <ul>
                                    <Slider
                                        asNavFor={nav1}
                                        ref={slider2Ref}
                                        slidesToShow={5}
                                        swipeToSlide={true}
                                        focusOnSelect={true}
                                    >

                                       {
                                            valueData.map((element)=>{
                                                return( <li>{element.thum}</li>)
                                            })
                                        }



                                    </Slider>




                                </ul>
                            </div>

                        </div>
                        <Slider asNavFor={nav2} ref={slider1Ref}>

                                        {
                                            valueData.map((element)=>{
                                                return  <div>
                                                <div className="value_card">
                                                    <h4>{element.contentHeading}</h4>
                                                    <p>{element.contentInfo}</p>
                                                    <Image src={`/assets/images/${element.img}.png`} alt="Values we deliver" width={460} height={460} />
                                                </div>
                                            </div>
                                            })
                                        }
                        </Slider>
                    </div>

                </div>



                <div className="what_we_offer">
                    <div className="offer_card">
                        <div className="offer_box">
                                <div className="container" ref={container}></div>

                            <p>Learn on any device</p>
                        </div>
                    </div>
                    <div className="offer_card">
                        <div className="offer_box">
                            <div className="container" ref={container1}></div>
                            <p>Get certified</p>
                        </div>
                    </div>
                    <div className="offer_card">
                        <div className="offer_box">
                            <div className="container" ref={container2}></div>
                            <p>Community access</p>
                        </div>
                    </div>
                    <div className="offer_card">
                        <div className="offer_box">
                            <div className="container" ref={container3}></div>
                            <p>Self-paced learning</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
