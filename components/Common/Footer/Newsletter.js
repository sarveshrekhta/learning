'use client'

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../styles/newsletter.css'
import Image from 'next/image';

export default function Newsletter() {

    const notify = () => toast.success("Thank you! You’ll be the first to hear about new releases, updates, and more.",{
        position: "bottom-center",
autoClose: 4000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: 0,
theme: "light",
    });

    const [email, setEmail] = useState('');


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleSubmitForm = async (e) => {
        //   e.preventDefault();
        const formData = {
            email
        };

        notify();

        console.log('formData', formData)
        try {
            const response = await fetch('https://api-rekhtalearn-dev.rekhta.org/api/v1/Home/NotifyMe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {

                console.log('response.ok----', response)
                // Reset form fields on success
                setEmail('');
                console.log('Message sent successfully!');
            } else {
                console.log('Error sending message.');
            }
        } catch (error) {
            console.log('Error sending message.', error);
        }
    };




    return (
        <div className="subscribe">

                {/* <button onClick={notify}>Notify!</button> */}
                <ToastContainer
                    position="bottom-center"
                    autoClose={4000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light" />
                <div className="subscribe_box">
                    <h3 className="secondary-h1"> Get news  &amp; updates</h3>
                    <form onSubmit={handleSubmit(handleSubmitForm)}>
                        {/* <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} ref={register({ required: 'email is required' })}/> */}

                        <input  {...register('Email', {
                            required: 'Email is required', pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            }
                        })} value={email} placeholder='someone@mail.com' onChange={(e) => setEmail(e.target.value)} />
                        {errors.Email && <p>{errors.Email.message}</p>}
                        {/* {errors.Email && <p>Enter your email</p>} */}

                        {errors.username && <span>{errors.username.message}</span>}
                        <div className="groupBtn">
                            <input type="submit" value="Subscribe" className="primaryBtn"  />
                        </div>
                    </form>
                    {/* <Image src="/assets/images/value_card.PNG" alt='value_card' width={396} height={339}></Image> */}
                    {/* <img src="assets/images/value_card.PNG" alt="" /> */}
                </div>

        </div>
    )
}
