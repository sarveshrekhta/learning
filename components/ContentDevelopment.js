import React from 'react'
import '../styles/courseDetail/contentDevelopment.css';

export default function ContentDevelopment({ instructorData }) {

    const getData = instructorData;

    console.log(getData, 'getDatagetDatagetData')

    return (
        <div>
            <section class="sectionSpace">
                <div class="container">
                    <div class="contentDevelopment">
                        <div>
                            <h3 class="secondary-h1"> Who's Behind  <span> Your Course?</span></h3>
                        </div>
                        <div class="devDis">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum est, lobortis vitae
                                feugiat et, pulvinar sit amet est. Suspendisse viverra libero vitae urna euismod euismod. Duis
                                mattis mollis nulla, at aliquam lorem</p>
                        </div>
                        {getData.writerList.length != [] ? <div class="contentDevelopmentTeam">
                            <ul>
                                <li>
                                    Content Writer
                                    {
                                        getData.writerList.map((el) => {
                                            return <span>{el.name}</span>
                                        })
                                    }
                                </li>
                                <li>
                                    Course Editor
                                    {
                                        getData.editorList.map((el) => {
                                            return <span>{el.name}</span>
                                        })
                                    }
                                </li>
                                <li>Course Presenter
                                    {
                                        getData.presenterList.map((el) => {
                                            return <span>{el.name}</span>
                                        })
                                    }
                                </li>
                            </ul>
                        </div> : null}

                        {/* <img class="developmentImg" src="/assets/images/whatLearn.png" alt=""/> */}
                    </div>
                </div>
            </section>
        </div>
    )
}
