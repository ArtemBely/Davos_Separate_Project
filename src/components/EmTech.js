import React from 'react';
import steel from '../../public/images/image 12.png';

function EmTech() {

    return (
        <div className="wrap_emtech" id='what_is'>
              <div className="emtech">
                  <div className='wrap_texts'>
                      <p className='emtech_title'>What is EmTech Invest Hub</p>
                      <p className='emtech_text'>The EmTech Invest Hub is one of the most exclusive Annual Davos Events from Tech Leaders and Professional Investors for community and corporations.
                      It combines top networking, hightech shows and impact investment deal flow.</p>
                  </div>
                  <div><img src={steel} style={{position: 'absolute'}} id='steel1'/></div>
              </div>
        </div>
    )
}

export default EmTech;
