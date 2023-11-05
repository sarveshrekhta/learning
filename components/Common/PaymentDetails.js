'use client'
import React, { useEffect } from 'react'
import { useState } from "react"
import Image from 'next/image';
import '../../styles/courseDetail/paymentPrompt.css'
import { signIn, signOut, useSession, getServerSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { authOptions } from '../../src/app/provider'
import { error } from 'jquery';
// import useDiscountPrice from '../../utils/helper/getDiscountPrice'


const imgServerUrl = process.env.imgHostServer;

export default function PaymentDetails({ paymentData, slug, ipinfoData }) {





    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";
    const session = useSession(authOptions);
    const user = session?.data;
    const userId = user?.user?.id;
    const [Spinner, setSpinner] = useState(false)
    const { courseLaunchName, priceInINR, discountInINR, finalPriceInINR, priceInUSD, discountInUSD, finalPriceInUSD, thumbnail, isFeatureCourse, courseLaunchGuid, thumbnail_Mobile, programType } = paymentData;


    const discountedAmountCalc = finalPriceInINR * 100;
    const discountedAmountCalcUsd = finalPriceInUSD * 100;
    const { push } = useRouter();

    // const thumbnailUrl = imgServerUrl + thumbnail_Mobile;
    const thumbnailUrl = imgServerUrl + courseLaunchGuid + '/' + thumbnail;

    console.log(thumbnailUrl, 'thumbnailUrlthumbnailUrlthumbnailUrl')
    // alert(userId)

    // payment code start here

    if (ipinfoData?.country == 'IN') {

        var postData = {
            "amount": discountedAmountCalc,
            "currency": "INR",
            "receipt": "receipt",
            "payment_capture": true
        }

    } else {
        var postData = {
            "amount": discountedAmountCalcUsd,
            "currency": "USD",
            "receipt": "receipt",
            "payment_capture": true
        }
    }



    const makePayment = async () => {

        setSpinner(true);
        const res = await initializeRazorpay();

        if (!res) {
            alert("Razorpay SDK Failed to load");
            return;
        }

        // Make API call to the API
        try {
            const response = await fetch('https://api-rekhtalearn-dev.rekhta.org/api/v1/payment/InitializePayment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });

            if (!response.ok) {

                const errorData = await response.json();
                return;
            }


            var data = await response.json();
            setSpinner(false)
            console.log('data', data)
            // setPaymentResponseData(data)
        } catch (error) {
            // setSpinner(false);
            console.log('An error occurred while making the request.');
        }

        var options = {
            key: "rzp_test_dYZ35ouq5SyCMs", // Enter the Key ID generated from the Dashboard
            name: "Rekhta Learning",
            currency: data.currency,
            amount: data.amount,
            // amount: 800,
            order_id: data.id,
            description: "Thankyou !!!",
            image: "https://manuarora.in/logo.png",
            handler: async function (response) {

                // {slug == 'rekhta-bundle'? : null}



                if (slug != 'rekhta-bundle') {
                    // order place API start
                    if (ipinfoData?.country == 'IN') {
                        var orderPostData = {
                            "courseLaunchGuid": courseLaunchGuid,
                            "userId": userId,
                            "amount": finalPriceInINR,
                            "transactionId": response.razorpay_payment_id,
                            "paymentStatus": "C",
                            "courseType": "S"
                        }

                    } else {
                        var orderPostData = {
                            "courseLaunchGuid": courseLaunchGuid,
                            "userId": userId,
                            "amount": finalPriceInUSD,
                            "transactionId": response.razorpay_payment_id,
                            "paymentStatus": "C",
                            "courseType": "S"
                        }
                    }
                }else{
                    if (ipinfoData?.country == 'IN') {
                        var orderPostData = {
                            "courseLaunchGuid": courseLaunchGuid,
                            "userId": userId,
                            "amount": finalPriceInINR,
                            "transactionId": response.razorpay_payment_id,
                            "paymentStatus": "C",
                            "courseType": "B"
                        }

                    } else {
                        var orderPostData = {
                            "courseLaunchGuid": courseLaunchGuid,
                            "userId": userId,
                            "amount": finalPriceInUSD,
                            "transactionId": response.razorpay_payment_id,
                            "paymentStatus": "C",
                            "courseType": "B"
                        }
                    }
                }


                try {
                    const response = await fetch('https://api-rekhtalearn-dev.rekhta.org/api/v1/Course/UpdateCourseStatus', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(orderPostData),
                    });

                    if (!response.ok) {

                        const errorData = await response.json();
                        return;
                    }


                    var data = await response.json();
                    setSpinner(false)
                    console.log('orderPostData', orderPostData)
                    // setPaymentResponseData(data)
                } catch (error) {
                    // setSpinner(false);
                    console.log('An error occurred while making the request.');
                }

                // order place API end

                // console.log(error);

                // push(`/${slug}/paymentdetail/success`);
                push(`/thankyou`);

                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                //  alert(response.razorpay_signature);
            },
            theme: {
                color: "#C44B8F"
            }
            // prefill: {
            //     // name: "Ashish B",
            //     // email: "Ashishbadhani@gmail.com",
            //     // contact: "9999999999",
            // },
        };



        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

    };
    const initializeRazorpay = () => {

        return new Promise((resolve) => {
            const script = document.createElement("script");

            script.src = "https://checkout.razorpay.com/v1/checkout.js";

            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    };



    // payment code end here




    return (
        <>




            {Spinner && <div className='paymentLoader'><p>Loading.......</p></div>}



            <section class="PaymentSpace">
                <div class="container">
                    <h3 class="secondary-h1"> Payment Details</h3>
                    <div class="paymentFlex">
                        <div class="paymentPrompt">
                            <div class="paymentCourse">
                                {isFeatureCourse == true ? <span class="crash_course">Crash course</span> : null}
                                <h5>{courseLaunchName}</h5>
                                <p>Full access for one year</p>
                                {/* <h3>Have a coupon?</h3>
                                <div class="subscribe">

                                    <div class="subscribe_box">

                                        <form action="">
                                            <input type="text" value="" placeholder="Enter code" />
                                            <div class="groupBtn">
                                                <a href="#" class="primaryBtn" id='couponBtn'>Apply</a>
                                            </div>
                                        </form>

                                    </div>

                                </div> */}
                                <Image src={thumbnailUrl} alt='course image' width={407} height={236}></Image>
                                {/* <img src="assets/images/paymentImg.png" alt=""/> */}
                            </div>
                        </div>
                        <div class="priceBreakdown">

                            <h5>Price Breakdown</h5>

                            {ipinfoData?.country == 'IN' ? <>
                                <ul>
                                    <li>
                                        <span> Price </span>
                                        <span> ₹{priceInINR} </span>
                                    </li>
                                    <li>
                                        <span> Discount </span>
                                        <span> {discountInINR}% </span>
                                    </li>

                                </ul>
                                <div class="separator"></div>

                                <ul class="netPayable">
                                    <li>
                                        <span> Payable Amount </span>
                                        <span> ₹{finalPriceInINR} </span>
                                    </li>
                                </ul>
                            </> : <>
                                <ul>
                                    <li>
                                        <span> Price </span>
                                        <span> ${priceInUSD} </span>
                                    </li>
                                    <li>
                                        <span> Discount </span>
                                        <span> {discountInUSD}% </span>
                                    </li>

                                </ul>
                                <div class="separator"></div>

                                <ul class="netPayable">
                                    <li>
                                        <span> Payable Amount </span>
                                        <span> ${finalPriceInUSD} </span>
                                    </li>
                                </ul>
                            </>}





                            <div class="paymentModeFlex">


                                {
                                    session.status == "authenticated" ?

                                        programType == "AM" ?
                                            <a href={`https://rrebs-hindi-dev.rekhta.org/Rasm-ul-Khat?Userid=${userId}&ServiceType=joinnow&CourseId=${courseLaunchGuid}`} class="payment" id='PayNow'>Pay Now</a>
                                            : programType == "AL1" ? <a href={`https://aamozish-dev.rekhta.org/course-1?Userid=${userId}&ServiceType=enroll&CourseId=${courseLaunchGuid}`} class="payment" id='PayNow'>Pay Now </a> :
                                                programType == "AL2" ? <a href={`https://aamozish-dev.rekhta.org/course-2?Userid=${userId}&ServiceType=enroll&CourseId=${courseLaunchGuid}`} class="payment" id='PayNow'>Pay Now </a> :
                                                    <a href="javascript:void(0)" onClick={makePayment} class="payment" id='PayNow'>Pay Now</a>
                                        :
                                        <a href="javascript:void(0)" onClick={() => signIn("identity-server4", { callbackUrl })} class="payment" id='LoginPay'>Login & Pay</a>
                                }




                                <div class="paymentMode">
                                    <Image src="http://rekhtafoundation.urdulearning.rekhta.org/wp-content/themes/rekhtafoundation/lms-image/payment-mode.jpg " alt='payment mode' width={197} height={32} />
                                </div>
                            </div>
                            {/* <p>*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum est, lobortis vitae feugiat et, pulvinar sit</p> */}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
