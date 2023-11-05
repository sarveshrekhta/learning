'use Server'
import React from 'react'
const { htmlToText } = require('html-to-text');
import '../../styles/promotional_banner.css'
import Link from 'next/link';
import { getRequest } from '../Common/api';


    // Bundle cources API

    const getBundleCourses = async (url) => {
      const ResultData = await getRequest('api/v1/Course/GetBundleCourse');
      return ResultData;
    };


export default async function BundleCourse() {



  const bundleData = await getBundleCourses();
  console.log(bundleData[0], 'bundleDatabundleData')

  return (



    <section>
    <div className="container">
        <div className="pbBuyCourses">
            <div className="pbBuyLeft">
                <h2>{bundleData[0].bundleName}</h2>
                <p>{htmlToText(bundleData[0].descriptionDestop)}</p>
                <div className="BTnPricesFlex">
                <Link href={
          {
            pathname: `/rekhta-bundle/paymentdetail`
          }

        } className="primaryBtn" id="BuyAllCourses" prefetch={false}>Buy All Courses</Link>
                    {/* <div className="exploreCourses"><a className="primaryBtn" id="pbBuyAllCourses" href="#">Buy All Courses</a></div> */}
                    <div className="priceDiscount">
                        <ul>
                            <li className="offtags">{bundleData[0].inrDiscount} % off</li>
                            <li className="strikePrice"><del><i className="rl-currency-rupee"></i>{bundleData[0].inrPrice}</del></li>
                            <li className="offerPrice"><i className="rl-currency-rupee"></i>{bundleData[0].finalINRPrice}</li>
                        </ul>
                    </div>
                </div>
            </div>
           <div className="pbBuyRight">
              <ul>
                <li><i className="rl-check"></i>4 in-depth courses</li>
                <li><i className="rl-check"></i>100+ lessons</li>
                <li><i className="rl-check"></i>5 years of unlimited access</li>
                <li><i className="rl-check"></i>Unbeatable discount</li>
                <li><i className="rl-check"></i>Watch on any device</li>
                <li><i className="rl-check"></i>Get certified</li>
              </ul>
           </div>
        </div>
    </div>
</section>

  )
}
