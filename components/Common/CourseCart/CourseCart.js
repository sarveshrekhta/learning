'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
const { htmlToText } = require('html-to-text');
// import {Media, Video } from '@vidstack/player-react';
import { AzureMP } from 'react-azure-mp';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Link from 'next/link';
import { useSession, getServerSession } from "next-auth/react"
import { authOptions } from "../../../src/app/provider";
// import lottie from 'lottie-web';


const imgServerUrl = process.env.imgHostServer;

export default function CourseCart(props, { ipinfoData }) {



  const session = useSession(authOptions);
  const user = session.data?.user?.id
  const authenticatedUser = session.status


  const { courseLaunchName, description, price, thumbnail, slug, publishedURL, courseLaunchGuid, moduleCount, timesDuration, discountInINR, priceInINR, finalPriceInINR, programType, purchased, discountInUSD, finalPriceInUSD } = props.courses;
  const thumbnailUrl = imgServerUrl + courseLaunchGuid + '/' + thumbnail;




  return (
    <>

      <div className="courseCard">
        <picture>
          <Popup
            trigger={<Image src={thumbnailUrl} alt='' width={407} height={236} />}
            modal
            nested
          >
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                {/* <div className="header"> Modal Title </div> */}
                <div className="content">

                  <AzureMP
                    options={{ controls: true, autoplay: true }}
                    src={[{ src: publishedURL, type: "application/vnd.ms-sstr+xml" }]}
                  />
                </div>

              </div>
            )}


          </Popup>

          {discountInINR > 0 ? <div class="tag-container tag-right">
            <div class="tag">
              {props?.ipinfoData?.country == 'IN' ? <h3 class="tag-title">{discountInINR}% off</h3> : <h3 class="tag-title">{discountInUSD}% off</h3>}

              <div class="tag-tail"></div>
            </div>
          </div> : null}
        </picture>
        <h5>{courseLaunchName}</h5>
        <p>{htmlToText(description)}</p>
        <div class="reviews">
          <ul>
            <li><i className='rl-clock'></i>{timesDuration} hrs learning</li>
            <li><i className='rl-chapter'></i>{moduleCount} Lessons</li>
          </ul>
        </div>
        <div className="groupBtn">






          <Link href={{ pathname: `/courses/${slug}` }} className="borderBtn" id="seeDetails" prefetch={false}>See Details</Link>



          {props?.ipinfoData?.country == 'IN' ?
            purchased == "Yes" ?
              programType == "AM" ? <Link href={`https://rrebs-hindi-dev.rekhta.org/Rasm-ul-Khat?Userid=${user}&ServiceType=joinnow&CourseId=${courseLaunchGuid}`}
                className="primaryBtn" id='goToCourseDetail' prefetch={false}>Go to Course </Link> : programType == "AL1" ? <Link href={`https://aamozish-dev.rekhta.org/course-1?Userid=${user}&ServiceType=enroll&CourseId=${courseLaunchGuid}`}
                  className="primaryBtn" id='goToCourseDetail' prefetch={false}>Go to Course </Link> : programType == "AL2" ? <Link href={`https://aamozish-dev.rekhta.org/course-2?Userid=${user}&ServiceType=enroll&CourseId=${courseLaunchGuid}`}
                    className="primaryBtn" id='goToCourseDetail' prefetch={false}>Go to Course </Link> : programType == "V" ? <Link href={`/courses/${slug}/${courseLaunchGuid}`}
                      className="primaryBtn" id='gotoCourseBtnCart' prefetch={false}>Go to Course</Link> : null
              :
              <Link href={{ pathname: `/${slug}/paymentdetail` }} className="primaryBtn" id="enrollBtnCart" prefetch={false}>Enroll for ₹{finalPriceInINR}</Link>
            :

            purchased == "Yes" ?
              programType == "AM" ? <Link href={`https://rrebs-hindi-dev.rekhta.org/Rasm-ul-Khat?Userid=${user}&ServiceType=joinnow&CourseId=${courseLaunchGuid}`}
                className="primaryBtn" id='goToCourseDetail' prefetch={false}>Go to Course </Link> : programType == "AL1" ? <Link href={`https://aamozish-dev.rekhta.org/course-1?Userid=${user}&ServiceType=enroll&CourseId=${courseLaunchGuid}`}
                  className="primaryBtn" id='goToCourseDetail' prefetch={false}>Go to Course </Link> : programType == "AL2" ? <Link href={`https://aamozish-dev.rekhta.org/course-2?Userid=${user}&ServiceType=enroll&CourseId=${courseLaunchGuid}`}
                    className="primaryBtn" id='goToCourseDetail' prefetch={false}>Go to Course </Link> : programType == "V" ? <Link href={`/courses/${slug}/${courseLaunchGuid}`}
                      className="primaryBtn" id='gotoCourseBtnCart' prefetch={false}>Go to Course</Link> : null
              :
              <Link href={{ pathname: `/${slug}/paymentdetail` }} className="primaryBtn" id="enrollBtnCart" prefetch={false}>Enroll for ₹{finalPriceInUSD}</Link>
          }


        </div>
      </div>
    </>
  )
}
