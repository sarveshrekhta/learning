'use client';
import React from 'react'
import '../../../styles/faq.css'

const { htmlToText } = require('html-to-text');
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

export default function Faq({faqData}) {

  return (


    <section className="faq">
      <div className="container">
        <div className="faq_flex">
          <div className="your_ask_heading">
            <h4 className="primary-h4">You ask,  <span className="block"> we answer  </span></h4>
          </div>

          <div className="accordion" id="accordionExample">
            <Accordion preExpanded={[0]} allowZeroExpanded>




              {faqData && faqData.map((faqData, index) => (
                 
                <div className="accordion-item">
                  <AccordionItem uuid={index}>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            {htmlToText(faqData.faqQuestions)}
                          </button>
                        </h2>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          {htmlToText(faqData.answer)}
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>


                </div>

              ))}

            </Accordion>


          </div>
        </div>
      </div>
    </section>
  )
}
