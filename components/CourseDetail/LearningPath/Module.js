'use client'

import React from 'react'
import { AzureMP } from 'react-azure-mp';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
export default function Module(props) {
    const data = props.data;
    const moduleName = props.moduleName;

    return (
       <div className='scroll'>

<Accordion preExpanded={[0]} allowZeroExpanded>

                {moduleName?.map((moduleName, index) => {
                    const moduleChapters = data.filter(data => {
                        return data.learningParentId === moduleName.learningId;
                    });

                    {
                        return (
                            <>
                                {/* <div>
                                    <h5>Module {index + 1}</h5>
                                    <h2>{moduleName.learningPlanName}</h2>
                                </div>
                                <ul>
                                    {moduleChapters?.map((chapters) => (
                                        <li>{chapters.learningPlanName}</li>
                                    ))}
                                </ul>

                                <ul>
                                {moduleChapters?.map((chapters) => (
                                    <li>{chapters.learningPlanName}</li>
                                ))}
                            </ul> */}
                                <div className="accordion-item">
                                    <AccordionItem uuid={index}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <h5>Module {index + 1}</h5>
                                                        <h2>{moduleName.learningPlanName}</h2>
                                                    </button>
                                                </h2>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <ul>
                                                        {moduleChapters?.map((chapters) => (
                                                            <li><i class="rl-lock"></i> {chapters.learningPlanName}</li>
                                                        ))}
                                                    </ul>


                                                </div>
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>


                                </div>
                            </>
                        )
                    }
                })}

            </Accordion>
       </div>

    )
}
