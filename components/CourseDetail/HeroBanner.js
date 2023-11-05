
'use client'
import React, { useEffect } from 'react'
import { useState } from "react"
import Link from 'next/link';
// import useDiscountPrice from '../../utils/helper/getDiscountPrice'
import { AzureMP } from 'react-azure-mp';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useSearchParams } from "next/navigation"
import { signIn, signOut, useSession } from "next-auth/react";
import { authOptions } from '@/app/provider';
import Image from 'next/image';



const imgServerUrl = process.env.imgHostServer;
export default function HeroBanner(props) {
  const [isPaymentStripFixed, setIsPaymentStripFixed] = useState(false)


  useEffect(() => {

    const handleScroll = (() => {
      console.log(window.screenY)
      if (window.scrollY > 150) {
        setIsPaymentStripFixed(true);
      } else {
        setIsPaymentStripFixed(false);
      }
    })
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])


  const session = useSession(authOptions);

  const user = session?.data;

  const userId = user?.user?.id;
  const sessionStatus = session.status;


  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";



  // console.log(user?.user?.id)
  // console.log(session.status)
  console.log(props.ipinfoData, 'dsdsdsdsssssssssssssss')
  const { courseLaunchName, priceInINR, discountInINR, sampleURl, thumbnail, finalPriceInINR, isFeatureCourse, programType, courseLaunchGuid, finalPriceInUSD, priceInUSD, discountInUSD, purchased } = props.data;
  const thumbnailUrl = imgServerUrl + courseLaunchGuid + '/' + thumbnail;

  const slugnLink = props.courseSlug

  console.log(purchased, 'purchasedpurchased')
  // const [originalPrice, setOriginalPrice] = useState();
  // const [discountPercentage, setDiscountPercentage] = useState();
  // const discountedPrice = useDiscountPrice(originalPrice, discountPercentage);


  // const finaldiscountAmount2 = Math.round(discountedPrice);


  // useEffect(() => {
  //   setOriginalPrice(priceInINR)
  //   setDiscountPercentage(discountInINR)
  // })
  return (
    <>
      <section className="literatureIntro">
        <div className="container">

          <div className="breadcrumb">
            <ul>
              <li className="breadcrumb-item"><Link href="/" prefetch={false}>Home <span>/</span></Link></li>
              <li className="breadcrumb-item"><Link href="/courses" prefetch={false}> Courses <span>/</span></Link></li>
              <li className="breadcrumb-item active" aria-current="page" prefetch={false}>{courseLaunchName}</li>
            </ul>
          </div>
          <div className="literature_introduction">
            <div className="video_section">
              <div className="course_title">
                {/* {isFeatureCourse == true ? < div> <span className="crash_course">Crash course</span></div> : null} */}

                {programType == "AL1" || programType == "AL2" || programType == "AM" ? < div> <span className="crash_course">Interactive Course</span></div> : null}

                <h1>{courseLaunchName}</h1>
                <div className="priceDiscount">


                  {props?.ipinfoData?.country == 'IN' ? <ul>
                    <li className="offerPrice"><i className='rl-currency-rupee'></i>{finalPriceInINR}</li>
                    <li className="strikePrice"><del><i className='rl-currency-rupee'></i>{priceInINR}</del></li>
                    <li className="offtags">{discountInINR}% off</li>
                  </ul> : <ul>
                    <li className="offerPrice"><i className='rl-currency-doller'>$</i>{finalPriceInUSD}</li>
                    <li className="strikePrice"><del><i className='rl-currency-doller'>$</i>{priceInUSD}</del></li>
                    <li className="offtags">{discountInUSD}% off</li>
                  </ul>}



                  {purchased !== "Yes" ?

                    programType == "AM" ? <Link href={`https://rrebs-hindi-dev.rekhta.org/Rasm-ul-Khat?Userid=${userId}&ServiceType=joinnow&CourseId=${courseLaunchGuid}`}
                      className="primaryBtn" id='goToCourseDetail' prefetch={false}>Go to Course </Link> : programType == "AL1" ? <Link href={`https://aamozish-dev.rekhta.org/course-1?Userid=${userId}&ServiceType=enroll&CourseId=${courseLaunchGuid}`}
                        className="primaryBtn" id='goToCourseDetail' prefetch={false}>Go to Course </Link> : programType == "AL2" ? <Link href={`https://aamozish-dev.rekhta.org/course-2?Userid=${userId}&ServiceType=enroll&CourseId=${courseLaunchGuid}`}
                          className="primaryBtn" id='goToCourseDetail' prefetch={false}>Go to Course </Link> : <Link href={`/courses/${slugnLink}/${courseLaunchGuid}`}
                            className="primaryBtn" id='goToCourseDetail' prefetch={false}>Go to Course</Link>




                    : sessionStatus == "authenticated" ?


                      programType == "AM" ? <div class="groupBtn"><Link class="primaryBtn outline" href={`https://rrebs-hindi-dev.rekhta.org/Rasm-ul-Khat?Userid=${userId}&ServiceType=trial&CourseId=${courseLaunchGuid}`}>Try Out for Free</Link><Link class="primaryBtn" href={`https://rrebs-hindi-dev.rekhta.org/Rasm-ul-Khat?Userid=${userId}&ServiceType=joinnow&CourseId=${courseLaunchGuid}`}>Enroll Now</Link></div> : programType == "AL1" ? <div class="groupBtn"><Link class="primaryBtn outline" href={`https://aamozish-dev.rekhta.org/course-1?Userid=${userId}&ServiceType=tryout&CourseId=${courseLaunchGuid}`}>Try Out for Free</Link><Link class="primaryBtn" href={`https://aamozish-dev.rekhta.org/course-1?Userid=${userId}&ServiceType=enroll&CourseId=${courseLaunchGuid}`}>Enroll Now</Link></div> : programType == "AL2" ? <div class="groupBtn"><Link class="primaryBtn outline" href={`https://aamozish-dev.rekhta.org/course-2?Userid=${userId}&ServiceType=tryout&CourseId=${courseLaunchGuid}`}>Try Out for Free</Link><Link class="primaryBtn" href={`https://aamozish-dev.rekhta.org/course-2?Userid=${userId}&ServiceType=enroll&CourseId=${courseLaunchGuid}`}>Enroll Now</Link></div> : <Link href={
                        {
                          pathname: `/${slugnLink}/paymentdetail`
                        }
                      }
                        className="primaryBtn" prefetch={false}>Enroll Now</Link> : <Link href="jascript:void(0)"
                          className="primaryBtn" onClick={() => signIn("identity-server4", { callbackUrl })}>Enroll Now</Link>}





                </div>
              </div>
              {programType == "AL1" || programType == "AL2" ? <div className="video_element">
                <Image src={thumbnailUrl} alt='Course Banner' width={787} height={525} />
              </div> : <Popup
                trigger={<div className="video_element">
                  <Image src={thumbnailUrl} alt='Course Banner' width={787} height={525} />
                  <div className="play_animation_btn">
                    <i className="rl-play"></i>
                    <div className="play_trailer">
                      <p>Watch Intro </p>
                      {/* <span className="trailer_time">02:30 mins</span> */}
                    </div>
                  </div>
                </div>}
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
                        skin="amp-flush"
                        src={[{ src: sampleURl, type: "application/vnd.ms-sstr+xml" }]}
                      />
                    </div>
                  </div>
                )}
              </Popup>}




            </div>
          </div>
        </div>
      </section>


      {

        purchased != "Yes" && isPaymentStripFixed == true ? <section class={`${isPaymentStripFixed ? 'paymentStrip' : ''}`}>

          <div class="container">
            <div class="paymentStripFlex">
              <div>
                <h3>{courseLaunchName}</h3>
              </div>

              {props?.ipinfoData?.country == 'IN' ? <div class="coursePayment">
                <div>
                  <span>₹{priceInINR}</span>
                  <p>₹{finalPriceInINR}</p>
                </div>
                <div class="offPrice">
                  <span>{discountInINR}% off</span>
                </div>
              </div> : <div class="coursePayment">
                <div>
                  <span>${priceInUSD}</span>
                  <p>${finalPriceInUSD}</p>
                </div>
                <div class="offPrice">
                  <span>{discountInUSD}% off</span>
                </div>
              </div>}

              <div class="groupBtn">


                {sessionStatus == "authenticated" ?


                  programType == "AM" ? <div class="groupBtn"><Link class="primaryBtn outline" href={`https://rrebs-hindi-dev.rekhta.org/Rasm-ul-Khat?Userid=${userId}&ServiceType=trial&CourseId=${courseLaunchGuid}`}>Try Out for Free</Link><Link class="primaryBtn" href={`https://rrebs-hindi-dev.rekhta.org/Rasm-ul-Khat?Userid=${userId}&ServiceType=joinnow&CourseId=${courseLaunchGuid}`}>Enroll Now</Link></div> : programType == "AL1" ? <div class="groupBtn"><Link class="primaryBtn outline" href={`https://aamozish-dev.rekhta.org/course-1?Userid=${userId}&ServiceType=tryout&CourseId=${courseLaunchGuid}`}>Try Out for Free</Link><Link class="primaryBtn" href={`https://aamozish-dev.rekhta.org/course-1?Userid=${userId}&ServiceType=enroll&CourseId=${courseLaunchGuid}`}>Enroll Now</Link></div> : programType == "AL2" ? <div class="groupBtn"><Link class="primaryBtn outline" href={`https://aamozish-dev.rekhta.org/course-2?Userid=${userId}&ServiceType=tryout&CourseId=${courseLaunchGuid}`}>Try Out for Free</Link><Link class="primaryBtn" href={`https://aamozish-dev.rekhta.org/course-2?Userid=${userId}&ServiceType=enroll&CourseId=${courseLaunchGuid}`}>Enroll Now</Link></div> : <Link href={
                    {
                      pathname: `/${slugnLink}/paymentdetail`
                    }
                  }
                    className="primaryBtn" id='EnrollNowStripBtn' prefetch={false}>Enroll Now</Link> : <Link href="jascript:void(0)"
                      className="primaryBtn" onClick={() => signIn("identity-server4", { callbackUrl })} id='EnrollNowBtnStrip'>Enroll Now</Link>}


              </div>
            </div>
          </div>
        </section> : null}
    </>
  )
}
