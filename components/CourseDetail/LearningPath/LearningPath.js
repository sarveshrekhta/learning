'use client'
import React, { useEffect, useState, } from 'react'
import { use } from "react";
import Link from 'next/link';
import { getRequest } from '../../Common/api';
import '../../../styles/courseDetail/bestOffer.css'
import '../../../styles/courseDetail/lessonPlan.css'
import '../../../styles/faq.css'
import Module from './Module';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { json } from 'react-router';
import { ShareSocial } from 'react-share-social'



// https://api-rekhtalearn-dev.rekhta.org/api/v1/Course/GetLearningPath?courseLaunchId=b19c41dc-e8ef-4967-b398-719138453cf2


export default function LearningPath({ dataLearningPath, sendModule, developmentUrl, slugPath, data, ipinfoData }) {


    const slug = slugPath;

    // const [url, SetUrl] = useState(window.location.href)
    const pathname = usePathname();

    const shareUrl = developmentUrl + pathname;


    // share url copy function

    const copy = async () => {

        await navigator.clipboard.writeText(shareUrl);
        alert('Link copied');
    }

    var shareUrl123 = 'www.google.com';

    return (
        <>

            {/* <ShareSocial
  title={'sharing happiness'}
  url ="url_to_share.com"
  socialTypes= {['facebook','twitter']}
/> */}
            <section class="sectionSpace bestOffer lessonPlanFaq">
                <div class="container">
                    <h3 class="secondary-h1"> Course <span> Curriculum</span></h3>
                    <div class="lessonPlan_flex">
                        <Module data={dataLearningPath} moduleName={sendModule} ></Module>
                        <div class="best_Offer_Box">
                            <h3>Join a flourishing community of passionate learners.</h3>

                            {ipinfoData?.country == 'IN' ?
                                <ul>
                                    <li class="offerPrice"> ₹{data.finalPriceInINR}</li>
                                    <li class="strikePrice"><del>₹{data.priceInINR}</del></li>
                                    <li class="offtags">{data.discountInINR}% off</li>
                                </ul>
                                :
                                <ul>
                                    <li class="offerPrice"> ₹{data.finalPriceInUSD}</li>
                                    <li class="strikePrice"><del>₹{data.priceInUSD}</del></li>
                                    <li class="offtags">{data.discountInUSD}% off</li>
                                </ul>

                            }
                            <div class="groupBtn">
                                <Link href={
                                    {
                                        pathname: `/${slug}/paymentdetail`

                                    }
                                }
                                    className="primaryBtn">Enroll Now</Link>
                                <a href="javascript:void(0)" onClick={copy} class="borderBtn"> <i className='rl-share1'>Share</i></a>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


        </>


        // <>
        //     <h2>LearningPath</h2>
        //     <Module data={dataLearningPath} moduleName={sendModule}></Module>
        // </>
    )
}