import React from 'react'
import { use } from "react";
import { getRequest } from '../Common/api';
//import LiteratureIntro from './literatureIntro';
import  '../../styles/courseDetail/literatureIntro.css';
import  '../../styles/courseDetail/WhatYouWillLearn.css';
import  '../../styles/home/CrashCourse.css'
import Image from 'next/image';
const ResultDataYouWillLearn = async (url, guid) => {
    const ResultData1 = await getRequest(`api/v1/Course/whatyouwilllearn?courseLaunchGuid=${guid}`);
    return ResultData1;
};

function getUidData(data) {
    return ResultDataYouWillLearn("", data);
}

export default function WhatYouWillLearn(props) {

    const data = props.courseLaunchGuid;

    const whatWeLearn = getUidData(data);
    const whatWeLearn2 = use(whatWeLearn);

    return (
        <>

            <div>

            </div>
            <section className="what_you_learn sectionSpace">
            <div className="container">
                <h3 className="secondary-h1"> What You <span> Will Learn</span></h3>
                <div className="whatLearn_box">
                    <div className="desktopWillLearn">
                        <h3 className="secondary-h1"> What  <span>You Will Learn</span></h3>
                        {/* <img src="assets/images/whatLearn.png" alt=""> */}
                        <Image src="/assets/images/whatLearn.png" alt='value_card' width={200} height={100}></Image>
                    </div>
                    <ul>
                    {whatWeLearn2?.map((data, index) => (
                    <li key={index}><i className='rl-check '></i> <span>{data.topic}</span></li>
                ))}



                    </ul>
                </div>
            </div>
        </section>
        </>


    )
}
