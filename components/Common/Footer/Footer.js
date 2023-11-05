'use client'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../styles/newsletter.css'
import Newsletter from './Newsletter'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

export default function Footer() {

    const notify = () => toast.success("Notification Send sucessfully!!",{
        position: "bottom-center",
autoClose: 2000,
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
        <>
        {/* <Newsletter></Newsletter> */}
    <footer>
    <div className="container">
            <div className="footer_flex">
                <div className="footer_Rekha_info">
                    {/* <img src="assets/images/logo.svg" alt=""/> */}
                    <Image src="/assets/images/logo.svg" alt='Rekhta Learning' width={97} height={57} />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
             <Newsletter></Newsletter>
                    <ul className="footer_social">
                        <li><a href="#" target='_blank'> <Image src="/assets/images/instagram.svg" alt='Rekhta Learning' width={20} height={20} /></a></li>
                            <li><a href="#" target='_blank'> <Image src="/assets/images/facebook.svg" alt='Rekhta Learning' width={20} height={20} /></a></li>
                       <li><a href="#" target='_blank'> <Image src="/assets/images/linkedIn.svg" alt='Rekhta Learning' width={20} height={20} /></a></li>
                    <li><a href="#" target='_blank'> <Image src="/assets/images/twitter.svg" alt='Rekhta Learning' width={20} height={20} /></a></li>                

                    </ul>
                </div>
                <div className="footer_links">

                    <div className="our_websites_link">
                        <h3>Quick Links</h3>
                        <ul>
                        <li><a href="#">Home </a></li>
                       <li><a href="#">Courses </a></li>
                           <li><a href="#">Contact Us </a></li>
                           {/* <li><a href="#">About </a></li>
                          <li><a href="#">FAQs </a></li> */}

                        </ul>
                    </div>

                    <div className="quick_links">
                        <h3>Our Websites</h3>
                        <ul>
                        <li><a href="#">Rekhta </a></li>
                           <li><a href="#">Hindwi </a></li>                            <li><a href="#">Sufinama </a></li>
                            <li><a href="#">Rekhta Dictionary </a></li>
                           <li><a href="#">Hindwi Dictionary</a></li>
                            <li><a href="#">Rekhta Books </a></li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className='allrights'>
                      <p>© 2023 Rekhta™ Foundation. All rights reserved.</p>
            </div>
    </div>
</footer>
        </>
  )
}
