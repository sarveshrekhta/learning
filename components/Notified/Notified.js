'use client'
import React, { useState } from 'react'
import '../../styles/contact/contact.css'

export default function Notified({ openNotified, programIds }) {


    console.log(programIds.programId, 'programIdsprogramIds')

    // var programId = coursesData.programId
    const flag = false;
    const handel = (() => {
        openNotified(flag)
    })
    const [email, setEamil] = useState()
    const [number, setNumber] = useState()
    const [thankyouMsg, setThankyouMsg] = useState(false)
    const [emailError, setEmailError] = useState('');
    const [numberError, setNumberError] = useState('');
    const validateForm = (() => {
        let isValid = true
        if (email == undefined) {
            setEmailError('Email is required');
            isValid = false
        } else if (!email.trim()) {
            setEmailError('Email is required');
            isValid = false
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email address');
            isValid = false
        } else {
            setEmailError('');
        }
        if (number == undefined) {
            setNumberError('Mobile is required');
            isValid = false
        } else if (!number.trim()) {
            setNumberError('Mobile is required');
            isValid = false
        } else if (!/^\d{10}$/.test(number)) {
            setNumberError('Invalid mobile number (10 digits expected)');
            isValid = false
        } else {
            setNumberError('');
        }
        return isValid
    })
    const formData = {
        "email": email,
        "programId": programIds.programId,
    };
    const notifiedSend = ((e) => {

        console.log(formData, 'formData')
        try {
            const response = fetch('https://api-rekhtalearn-dev.rekhta.org/api/v1/Course/DoNotifyCourse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            }).then((res) => {
                setThankyouMsg(true)
                console.log(res, 'sdsdsdsdsd');
            })
            // console.log()
        } catch (error) {
        }
        e.preventDefault()
        if (validateForm()) {
            console.log('Form is valid. Submitting...')
            // handel()
        } else {
            console.log('Form is invalid. Please check the errors.');
        }
    })
    return (
        <>
            <div className='backdrop'></div>


            {thankyouMsg ?
                <div className='login notified'>
                    <h2>Thank You !</h2>
                    <p> We have successfully registered your interest in this course. You’ll be notified once it goes live.</p>

                    <div class="groupBtn"><a class="primaryBtn" onClick={handel} href="javascript:void(0)">Got It</a> </div>
                </div>
                : <div className='login notified'>
                    <h2>Stay informed, stay ahead.</h2>
                    <form class="loginform" onSubmit={notifiedSend}>
                        <div class="input-control">
                            <label for="email" class="input-label">Your email </label>
                            <input type="email" name="email" id="email" class="input-field" placeholder="someone@mail.com" onChange={(e) => { setEamil(e.target.value) }} />
                            <div class="error-message">{emailError}</div>
                        </div>

                        <div class="groupBtn"><a class="borderBtn" onClick={handel} href="javascript:void(0)">Cancel</a><input type='submit' value="Submit" class="primaryBtn" /> </div>
                    </form>

                </div>}
        </>
    )
}