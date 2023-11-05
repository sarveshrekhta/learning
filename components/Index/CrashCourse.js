"use client";
import React from 'react'
import Image from 'next/image';
import { AzureMP } from 'react-azure-mp';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../../styles/home/CrashCourse.css'
import Link from 'next/link';
const { htmlToText } = require('html-to-text');
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const imgServerUrl = process.env.imgHostServer2;

export default function CrashCourse({ crashCourseData }) {

  const result = crashCourseData;

  const FeatureCourseData = result.filter(result => {
    if (result.isFeatureCourse === true) {
      return result.isFeatureCourse === true;
    }
  });


  const { courseLaunchName, description, publishedURL, slug, isFeatureCourse, thumbnail, courseLaunchGuid, thumbnail_Mobile , featureCourseThumbnailImage, featureCourseThumbnailImage_Mobile } = FeatureCourseData[0] || {};

  const thumbnailUrl = imgServerUrl + 'featurecoursethumbnail/' + courseLaunchGuid + '/' + featureCourseThumbnailImage;
  const thumbnailUrlM = imgServerUrl + 'featurecoursethumbnailmobile/' + courseLaunchGuid + '/' + featureCourseThumbnailImage_Mobile;

  // if (isMobile) {
  //   alert();
  // }


  return (
    <>
      {isFeatureCourse == true ?
      <section className="introduction">


          <div className="container">
            <div className="introductionImg">
              {!isMobile ? <Image src={thumbnailUrl} alt="Featured Course" width={1412} height={410} /> :  <Image src={thumbnailUrlM} alt="Featured Course mobile" width={382} height={425} />}

              <div className="introductionContent">
                <span className="crash_course">Featured Course</span>
                {courseLaunchName ? <h4>{courseLaunchName}</h4> : null}

                <p>{htmlToText(description)}</p>
                <div className="groupBtn">
                  <Popup
                    trigger={<a href="javascript:void(0)" className="watchBtn" id="watchIntro"><i className='rl-play'></i>Watch Intro</a>}
                    modal
                    nested
                  >

                    {close => (
                      <div className="modal">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                        <div className="content">

                          <AzureMP
                            options={{ controls: true, autoplay: true }}
                            src={[{ src: publishedURL, type: "application/vnd.ms-sstr+xml" }]}
                          />
                        </div>

                      </div>
                    )}

                  </Popup>

                  {isFeatureCourse != undefined ? <Link href={
                    {
                      pathname: `/courses/${slug}`
                    }

                  } className="primaryBtn" id="featuredSeeDetails" prefetch={false}>See Details</Link> : null}


                </div>
              </div>
            </div>
          </div>
      </section> : ""}
    </>
  )
}
