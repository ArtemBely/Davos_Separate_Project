import React from 'react';
import oracles from '../../public/images/Group 492.jpg';
import oraclesPlanch from '../../public/images/Group 4921.jpg';
import opaclesBigPhone from '../../public/images/Group 492 — копия 2.jpg';
import oraclesSmallPhone from '../../public/images/Group 792.jpg';
import oracleSpec576 from '../../public/images/Group 492_spec.jpg';

function When() {

    return (
        <div className="wrap_when">
              <div className="when" id="why_to">
                  <p></p>
                  <div className='when1'>
                     <p className='when_title'>Where</p>
                     <p className='when_text text2'>Promenade 63, Davos, Switzerland</p>
                  </div>
                  <div className='when2'>
                     <p className='when_title'>When</p>
                     <p className='when_text text2'>May 20-28, 2022</p>
                  </div>
                  <div className='when3'>
                     <p className='when_title'>For whom</p>
                     <p className='when_text text3'>for professional investors,  tech entrepreneurs, corporates and media</p>
                  </div>
                  <p></p>
                  <div className='when4'>
                     <p className='when_title why1'>Why to participate</p>
                     <p className='when_text why2'>For the first time in Davos you’ll be able to become a part of a historical mixed reality event. EmTech Metaverse is opening its space for Davos guests. All correlated activities and special guests are appearing at the International EmTech Investment Forum at the Promenade 63. </p>
                     <p></p>
                        <p className='when_text why2'>So central, no one missed it. So big, everyone talks about it. Be a part of the future. As the Future is Now.</p>
                  </div>
                  <img src={oracles} id='oracles'/>
                  <img src={oraclesPlanch} id='oraclesPlanch'/>
                  <img src={opaclesBigPhone} id='opaclesBigPhone'/>
                  <img src={oracleSpec576} id='oracleSpec576'/>
                  <div id='oraclesSmallPhone'><img src={oraclesSmallPhone} /></div>
              </div>
        </div>
    )
}

export default When;
