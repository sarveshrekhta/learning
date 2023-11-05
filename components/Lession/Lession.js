
import React, { useState } from 'react'



export default function Lession({ moduleChapters, fetchAzureUrl, showQuiz }) {
    // const [visible, setVisible] = useState(false);  // visibility state




    const data = moduleChapters;




    return (

        <>

            {data?.map((chapters, index) => {


                const myRef = React.createRef();
                if (chapters.nodeType === "V") {
                    {
                        return (

                            <li className="vt_playItem1" ref={myRef}
                                data-learningParentId={chapters.learningParentId}
                                data-learningId={chapters.learningId}
                                data-next={index + 1}
                                onClick={() => fetchAzureUrl(myRef, data)}
                            >
                              {chapters.nodeStatus == 'C' ? <div className='CompleteIcon'><i class="rl-check"></i></div>:<i class="rl-play"></i> }  <span className='chapterTitle'>{chapters.learningPlanName}</span><span>{chapters.publishedDuration} mins</span></li>

                        )
                    }
                }
            })}

            {data.filter((quiz) => {
                //console.log(quiz.nodeType, 'quiz.nodeTypequiz.nodeType')
                return quiz.nodeType == "Q";
            }).map((chapters, index) => {
                const myRef = React.createRef();
                {
                    return (

                        <li className="vt_playItem1" ref={myRef}
                            data-learningParentId={chapters.learningParentId}
                            data-learningId={chapters.learningId}
                            onClick={() => showQuiz()}
                        ><i class="rl-play"></i><span className='chapterTitle'>{chapters.learningPlanName}</span></li>

                    )
                }

            })}





        </>

    )
}
