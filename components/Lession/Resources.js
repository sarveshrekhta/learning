import React from 'react'


export default function Resources(props) {

    const data = props.resources;

    const myRef = React.createRef();

  return (

//   Resources Tabs
    <div class="vt_resource" ref={myRef}>
      <h5>{data.learningPlanName}</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aliquam ipsum est, lobortis vitae feugiat et, pulvinar sit
      amet est. Suspendisse viverra libero vitae urna euismod</p>

     <a href="#" title="Download File" aria-label="Download File" class="vt_downloadFile">Download File</a>
    </div>
      // Resources Tabs
  )
}
