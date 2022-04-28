import React from 'react';
import oracles from '../../public/images/Group 492.jpg';
import quest from '../../public/images/Group 584.png';

function Sponsors() {

    return (
        <div className="wrap_sponsors" id='link_speak'>
              <div className="sponsors">
                  <div className='wrap_each_speaker0'>
                     <p className='speaker0'>Speakers</p>
                     <p className='speaker_text'>Will be announced soon</p>
                  </div>
                  <div className='wrap_each_speaker'>
                     <p className='each_speaker'><img src={quest} className='each_quest'/></p>
                     <p className='each_speaker'><img src={quest} className='each_quest'/></p>
                     <p className='each_speaker del1'><img src={quest} className='each_quest'/></p>
                     <p className='each_speaker del1'><img src={quest} className='each_quest'/></p>
                     <p className='each_speaker del1'><img src={quest} className='each_quest'/></p>
                  </div>
              </div>
        </div>
    )
}

export default Sponsors;
