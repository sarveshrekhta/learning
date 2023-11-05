import React from 'react'
import Image from 'next/image';
import '../../styles/courseDetail/certificate.css'
export default function Certificate() {
  return (
    <section class="get_certificate sectionSpace">
    <div class="container">
        <div class="certificate_flex">
            <div>
                <h4 class="primary-h4">Get  a<span>    certificate</span></h4>
                <p>Learners who successfully complete our course with content and quiz will receive a certificate as proof of their learning.</p>
               </div>
                <div class="certificateImg">



                    <Image class="certificateLeft" src="http://rekhtafoundation.urdulearning.rekhta.org/wp-content/themes/rekhtafoundation/lms-image/certificateLeft.png " alt='Rekhta Learning' height={206} width={117}/>



                        <Image class="certificateName" src="http://rekhtafoundation.urdulearning.rekhta.org/wp-content/themes/rekhtafoundation/lms-image/certificate.jpg"  width={500} height={366} />


                      <Image class="certificateRight" src="http://rekhtafoundation.urdulearning.rekhta.org/wp-content/themes/rekhtafoundation/lms-image/certificateRight.png" alt='Rekhta Learning' height={206} width={117}/>

                </div>
        </div>
    </div>
</section>
  )
}
