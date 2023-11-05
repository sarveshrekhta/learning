'use client'
import React from 'react'
const { htmlToText } = require('html-to-text');

export default function AboutCourse(props) {

    console.log(props, 'propspropsprops')

  return (
    <>

       <section className="about_the_course">
        <div className="container">
            <h3 className="secondary-h1"> About <span> The Course</span></h3>
            <p>{htmlToText(props.description)}</p>

{ props.programType == "AM" ? "" : props.programType == "AL1" ? "" : props.programType == "AL2" ? "" : <div className="feature_flex">
                <div className="feature_box">
                    <i className="rl-Video"></i>
                    <p>Pre-recorded bite-sized lessons</p>
                </div>
                <div className="feature_box">
                    <i className="rl-chapter"></i>
                    <p>{props.modules} modules, {props.videoModules} videos</p>
                </div>
                <div className="feature_box">
                    <i className="rl-clock"></i>
                    <p>8 hours learning content</p>
                </div>
                <div className="feature_box">
                    <i className="rl-Phone"></i>
                    <p>Self-paced learning</p>
                </div>
                <div className="feature_box">
                    <i className="rl-download"></i>
                    <p>Downloadable resources</p>
                </div>
                <div className="feature_box">
                    <i className="rl-clock"></i>
                    <p>Unlimited 12 months access</p>
                </div>
            </div>}


        </div>

        </section>


    </>
  )
}
