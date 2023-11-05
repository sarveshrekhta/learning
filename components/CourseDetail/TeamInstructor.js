import React from 'react'
import Image from 'next/image';
import Slider from 'react-slick';
import '../../styles/courseDetail/meetTeam.css'
export default function TeamInstructor({ instructorData }) {
    const getData = instructorData;
    const imgServerUrl = process.env.imgHostServer;
    console.log(imgServerUrl, 'imgServerUrl')
    console.log(getData.instructorList, 'getDatagetDatagetDatagetDatagetData')

   

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <section class="meetTeam sectionSpace">
            <div class="container">
                <h3 class="secondary-h1"> Meet  <span>  Our Team</span></h3>

                <div class="teamFlex">
                {/* <Slider {...settings}>  */}
                    {
                        getData.instructorList.map((el) => {
                            return (
                                <div class="teamCards">
                                    <img src={`https://rekhtalearn-dev.rekhta.org/wcr/contentdirectory/managecreditsimages/${el.id}/${el.fileName}`} alt="" />
                                    <h3>{el.name}</h3>
                                    <p>{el.bio}</p>
                                </div>
                            )
                        })
                    }
                    {/* </Slider> */}
                </div>
            </div>
        </section>
    )
}
