import React from 'react'
import '../../styles/courseDetail/alfaaz.css'
import Image from 'next/image';

export default function Alfaaz() {
    return (
        <>
            <section class="alfaazSection">
                <div class="container">
                    <div class="alfazBox">
                        <div class="about_the_course">
                            <h3 class="secondary-h1"> Key  <span> Features</span></h3>

                        </div>

                        <div class="alfaazKey">
                            <div class="keyFeaturesType">
                                <div class="feature_flex">
                                    <div class="feature_box">
                                        <i >  <Image src="/assets/images/Real-Time-Progress.svg" width={18} height={18}/></i>
                                        <p>Real-Time Progress</p>
                                    </div>
                                    <div class="feature_box">
                                    <i >  <Image src="/assets/images/Individual-Score.svg" width={18} height={18}/></i>
                                        <p>Individual Score</p>
                                    </div>
                                    <div class="feature_box">
                                    <i >  <Image src="/assets/images/Gamified-Learning.svg" width={18} height={18}/></i>
                                        <p>Gamified Learning</p>
                                    </div>
                                    <div class="feature_box">
                                    <i >  <Image src="/assets/images/Daily-Learning-Goals.svg" width={18} height={18}/></i>
                                        <p>Daily Learning Goals</p>
                                    </div>
                                    <div class="feature_box">
                                    <i >  <Image src="/assets/images/User-Ranking.svg" width={18} height={18}/></i>
                                        <p>User Ranking</p>
                                    </div>
                                    <div class="feature_box">
                                    <i >  <Image src="/assets/images/Weekly-Progress-Report.svg" width={18} height={18}/></i>
                                        <p>Weekly Progress Report</p>
                                    </div>
                                    <div class="feature_box">
                                    <i >  <Image src="/assets/images/Easy-Interactive.svg" width={18} height={18}/></i>
                                        <p>Interactive Interface</p>
                                    </div>
                                    <div class="feature_box">
                                    <i >  <Image src="/assets/images/Easy-Accessibility.svg" width={18} height={18}/></i>
                                        <p>Easy Accessibility </p>
                                    </div>
                                </div>
                                <div className='keyFeaturesImg'>
                                    
                                     <video width="50%" loop="true" autoPlay muted playsInline>
                                            <source src="/assets/video/alfaazShortVideo.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section class="sectionSpace whyAlfaazPartTow">
                <div class="container">
                    <h3 class="secondary-h1"> Why Alfaaz?</h3>

                    <div class="alfaazPart">
                        <div>
                        <Image src="/assets/images/learn.svg" alt='key Features' width={35} height={35} />
                            <h4>Learn</h4>
                            <ul>
                                <li>Fundamental words used in Urdu poetry </li>
                                <li>360-degree understanding of every word </li>
                                <li>Correct pronunciations</li>
                            </ul>
                        </div>
                        <div>
                        <Image src="/assets/images/understand.svg" alt='understand' width={35} height={35} />
                            <h4>Understand</h4>
                            <ul>
                                <li>  Contextual relevance of each word </li>
                                <li>  Precise connotation of words in poetry  </li>
                                <li> Prominent subjects of Urdu poetry</li>
                            </ul>
                        </div>
                        <div>
                        <Image src="/assets/images/master.svg" alt='master' width={35} height={35} />
                            <h4>Master</h4>
                            <ul>
                                <li> Strong Vocabulary  </li>
                                <li> Art of expressing in Urdu  </li>
                                <li> Deep understanding of poetic terminologies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
