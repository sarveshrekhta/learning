'use client'

import React from 'react'
import '../../styles/contact/contact.css'
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Image from 'next/image';

export default function Contact() {

    const notify = () => toast.success("Successfully submitted.", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
    });



    const [name, setName] = useState('')
    const [email, setEamil] = useState('')
    const [number, setNumber] = useState('')
    const [profession, setProfession] = useState('')
    const [comment, setComment] = useState('')
    const [countryCode, setCountryCode] = useState('')

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [numberError, setNumberError] = useState('');


    const handleChange = e => {

       let vals =  document.querySelector('.telInput');

       setNumber(vals.value)

       let countryCodevals =  document.querySelector('.country-list .country.highlight');
       setCountryCode(countryCodevals.getAttribute('data-dial-code'), 'countryCodevals')

    };



    const validateForm = () => {
        let isValid = true;
        if (name == undefined) {
            setNameError('Full Name is required');
            isValid = false;

        } else if (!name.trim() || name === '') {
            setNameError('Full Name is required');
            isValid = false;
        } else {
            setNameError('');
        }


        if (email == undefined) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!email.trim()) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email address');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (number == undefined) {
            setNumberError('Mobile is required');
            isValid = false;
        } else if (!number.trim()) {


            setNumberError('Mobile is required');
            isValid = false;
        } else {
            setNumberError('');
        }

        return isValid;
    }



// } else if (!/^\d{10}$/.test(!number)) {
//     setNumberError('Invalid mobile number (10 digits expected)');
//     isValid = false;


    const formData = {
        "contectName": name,
        "Email":email,
        "mobile": number,
        "profession":profession,
        "comment":comment,
        "countryCode":countryCode
    };

    const contactSend = ((e) => {
        validateForm()


        // let countryCodevals =  document.querySelector('.country-list .country.highlight');
        // setCountryCode(countryCodevals.getAttribute('data-dial-code'), 'countryCodevals')


        if(validateForm() == true) {

        try {

            const response = fetch('https://api-rekhtalearn-dev.rekhta.org/api/v1/Home/ContactUs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                console.log('Message sent successfully!');
            } else {
                console.log('Error sending message.');
            }


        } catch (error) {

        }
    }


        e.preventDefault();


        console.log(validateForm(), 'validateForm()validateForm()')

        if (validateForm()) {
            notify();
            setName('');
            setEamil('');
            setNumber('');
            setProfession('');
            setComment('');
            console.log('Form is valid. Submitting...');
        } else {
            console.log('Form is invalid. Please check the errors.');
        }
    })


    return (
        <section class="login sectionSpace">

            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />

            <div class="container">
                <section class="contactFlex">
                    <div class="contactInfo">
                        <h2>We’d love to hear from you</h2>
                        <p>Write to us if you have any queries, issues, or feedback. We’ll try to get back to you at the earliest.</p>

                        <div class="addressInfo">
                            <div class="address">
                                <i class="rl-play icon_center"></i>
                                <h4>Address </h4>
                                <p>
                                    Rekhta Foundation<br />
                                    B-37, Sector-1 Noida, Uttar Pradesh<br />201301
                                </p>
                            </div>
                            <div class="address">
                                <i class="rl-play icon_center"></i>
                                <h4>Connect with us </h4>
                                <a href="mailtto:rekhtalearning@rekhta.org">learning@rekhta.org</a>
                            </div>
                            <div class="address">
                                <i class="rl-play icon_center"></i>
                                <h4>Know more</h4>
                                <a href="#">www.rekhtafoundation.org</a>
                            </div>
                        </div>
                        <div class="contactGetInTouch">
                            <h3>Get in touch</h3>
                            <ul className="footer_social">
                        <li><a href="#" target='_blank'> <Image src="/assets/images/instagram.svg" alt='Rekhta Learning' width={20} height={20} /></a></li>
                            <li><a href="#" target='_blank'> <Image src="/assets/images/facebook.svg" alt='Rekhta Learning' width={20} height={20} /></a></li>
                       <li><a href="#" target='_blank'> <Image src="/assets/images/linkedIn.svg" alt='Rekhta Learning' width={20} height={20} /></a></li>
                    <li><a href="#" target='_blank'> <Image src="/assets/images/twitter.svg" alt='Rekhta Learning' width={20} height={20} /></a></li>

                    </ul>
                        </div>

                    </div>

                    <form class="loginform" onSubmit={contactSend}>
                        <div class="input-control">
                            <label for="email" class="input-label">Full Name* </label>
                            <input type="text" value={name} name="name" id="name" onChange={(e) => { setName(e.target.value) }} class="input-field" placeholder="Your name" />
                            <div className="error-message">{nameError}</div>
                        </div>
                        <div class="input-control">
                            <label for="text" class="input-label">Email*</label>
                            <input type="text" name="text" value={email} id="email" onChange={(e) => { setEamil(e.target.value) }} class="input-field" placeholder="someone@email.com" />
                            <div className="error-message">{emailError}</div>
                        </div>
                        <div class="input-control">
                            <label for="number" class="input-label">Mobile*</label>
                            <IntlTelInput
                                onPhoneNumberChange={handleChange}
                                preferredCountries={['IN']}
                                containerClassName="intl-tel-input"
                                placeholder="Mobile number"
                                inputClassName="form-control input-field telInput"

                            />

                            {/* <input type="number" name="number" value={number} id="number" class="input-field" onChange={(e) => { setNumber(e.target.value) }} placeholder="Mobile number" /> */}
                            <div className="error-message">{numberError}</div>
                        </div>
                        <div class="input-control">
                            <label for="text" class="input-label">Profession</label>
                            <input type="text" name="password" value={profession} id="password" class="input-field" placeholder="Your profession" onChange={(e) => { setProfession(e.target.value) }} />
                        </div>

                        <div class="input-control">
                            <label for="password" class="input-label">Comment</label>
                            <textarea rows="4" cols="100" value={comment} name="password" id="password" class="input-field" placeholder="Comment" onChange={(e) => { setComment(e.target.value) }}></textarea>
                        </div>
                        <div class="loginPageBtn">
                            <input type="submit" name="password" id="password" class="btnLogin" placeholder="Your Profession"  />
                        </div>
                    </form>



                </section>
            </div>
        </section>
    )
}
