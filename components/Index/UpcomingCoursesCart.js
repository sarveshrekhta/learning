'use client'
import React from 'react'
import '../../styles/home/UpcomingCourses.css'
import { useState } from 'react';
import Image from 'next/image';
import { AzureMP } from 'react-azure-mp';
import Popup from 'reactjs-popup';
import { isMobile } from 'react-device-detect';

// if (typeof window !== "undefined") {
// var [selectors, data] = useDeviceSelectors()

// var { isMobile } = selectors;
// }



const imgServerUrl2 = process.env.imgHostServer2;
export default function UpcomingCoursesCart({coursesData, openNotified}) {

  const flag = true;
  const handleClick = () => {
    openNotified(flag, coursesData)
  }

  const upcomingdata = coursesData || {};


  const thumbnailUrl = imgServerUrl2 + 'upcomingcourseimages/' + upcomingdata.id +'/' + upcomingdata.cardImage
  const thumbnailUrlM = imgServerUrl2 + 'upcomingcourseimagesmobile/' + upcomingdata.id +'/' + upcomingdata.courseImageMobile


console.log(thumbnailUrlM, 'thumbnailUrlMthumbnailUrlM')

// if(!isMobile){
//   return <Image src={thumbnailUrl} alt='Upcoming Course Desktop' width={694} height={463} />
// }else{
//  return <Image src={thumbnailUrlM} alt='Upcoming Course Mobile' width={380} height={418} />
// }


// console.log(upcomingdata.publishedURL, 'thumbnailUrlthumbnailUrl')


  return (


    <>
   {/* {alert(isMobile)} */}

      <div className="upcoming_courses_flex">



          {/* {!isMobile ? <Image src={thumbnailUrl} alt="Featured Course" width={1412} height={410} /> :  <Image src={thumbnailUrlM} alt="Featured Course mobile" width={382} height={425} />} */}

{isMobile == true ? <Image src={thumbnailUrlM} alt="Featured Course mobile" width={382} height={425} />: <Image src={thumbnailUrl} alt="Featured Course" width={1412} height={410} />}

        <div className="upcoming_courses_box">
          <h5>
            {upcomingdata.programName}
          </h5>
          <p> {upcomingdata.description}</p>
          <div className="groupBtn">
          <Popup
            trigger={<a href="javascript:void(0)" className="watchBtn"><i className="rl-play"></i> Watch Intro</a>}
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
                    src={[{ src: upcomingdata.publishedURL, type: "application/vnd.ms-sstr+xml" }]}
                  />
                </div>

              </div>
            )}


          </Popup>

            <a href="javascript:void(0)" className="primaryBtn" onClick={handleClick}>Get Notified</a>
          </div>
        </div>
      </div>


    </>



  )
}