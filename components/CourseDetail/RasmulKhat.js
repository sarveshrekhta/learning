import React from 'react'
import '../../styles/courseDetail/RasmulKhat.css'
import Image from 'next/image';
export default function RasmulKhat() {
  return (
    <section class="rasmulKhatUrdu">
            <div class="container">
                <div class="rasmulFlex">
                    <div class="courseHighlights">
                        <h3 class="secondary-h1"> Course  <span>   Highlights</span></h3>
                        <Image className=' ' src="/assets/images/coursehighlight.png" alt='value_card' width={377} height={419}></Image>
                        {/* <Image src="/assets/images/coursehighlight.png"  width={47} height={22} alt=""> </Image> */}
                    </div>
                    <div class="courseContent">
                        <div class="allProjectIntros">
                            <div class="feature_boxrasmul"><i class="rl-chapter"></i><p><span>10 chapters </span> 26 units </p></div>

                            <div class="feature_boxrasmul"><i class="rl-clock"></i><p><span>37 </span> Interactive quizzes </p></div>
                            <div class="feature_boxrasmul"><i class="rl-loading1"></i><p><span> 2 years </span> Access </p></div>
                        </div>
                        <div class="courseContent">
                            <div class="courseContentBox">
                                <h5>Structured Curriculum</h5>
                                <p>Well-designed curriculum, developed by experts for quick and accurate learning of the script.</p>
                            </div>

                            <div class="courseContentBox">
                                <h5>Interactive Quizzes</h5>
                                <p>For real-time progress assessment and immediate evaluation.</p>
                            </div>
                            <div class="courseContentBox">
                                <h5>Text Animations & Videos</h5>
                                <p>Visualised content for an immersive and enriched learning experience.</p>
                            </div>
                            <div class="courseContentBox">
                                <h5>Audio Cues</h5>
                                <p>Pre-recorded audios for better understanding of accurate pronunciations.</p>
                            </div>
                            <div class="courseContentBox">
                                <h5>Detailed Explanations</h5>
                                <p>Comprehensive explanations to ensure a doubt-free and thorough understanding.</p>
                            </div>
                            <div class="courseContentBox">
                                <h5>Bookmark Pages</h5>
                                <p>Mark what you like or have a doubt about, and revisit it instantly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
