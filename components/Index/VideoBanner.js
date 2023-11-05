import React from 'react'

export default function VideoBanner() {
  return (
    <>
    <div className='videoBanner'>
        <video width="100%"  loop="true" autoPlay muted playsInline>
  <source src="https://anjasmahotsav.org/wp-content/uploads/2023/10/WebsiteSlide2.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
</video>
</div>
</>
  )
}
