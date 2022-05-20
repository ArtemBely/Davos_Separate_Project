import React from 'react';
import zahn from '../../public/images/Philipp Zahn.png';
import ammer from '../../public/images/Victor Ammer.png';
import marina from '../../public/images/Marina Markezic.png';
import garry from '../../public/images/Garry Krugljakow.png';
import max from '../../public/images/Maxime N.Nassour.png';



function Day24speakers(){


    return (
         <div className="container_day">
            <div className='wrap_day21'>
					<h4 className='speakers_day21_title'>Day`s speakers</h4>
					<p className='speakers_day21_subtitle'>Will be announced soon</p>
					<div className='speakers_day21_wrap'>
						<div className='day21_speaker'>
                     <p className='wrap_photo_d21'><img src={zahn} className='speaker_day21'/></p>
                     <p className='nameSpeaker_d21'>Philipp Zahn</p>
                     <p className='descrSpeaker_d21'>Assistant Professor bei University of St. Gallen - HSG</p>
                  </div>
						<div className='day21_speaker'>
                     <p className='wrap_photo_d21'><img src={ammer} className='speaker_day21'/></p>
                     <p className='nameSpeaker_d21'>Victor Ammer</p>
                     <p className='descrSpeaker_d21'>Serial Entrepreneur & Investor focused on FinTech</p>
                  </div>
						<div className='day21_speaker'>
                     <p className='wrap_photo_d21'><img src={marina} className='speaker_day21'/></p>
                     <p className='nameSpeaker_d21'>Marina Markezic</p>
                     <p className='descrSpeaker_d21'>Co-Founder of European Crypto Initiative</p>
                  </div>
                  <div className='day21_speaker'>
                     <p className='wrap_photo_d21'><img src={garry} className='speaker_day21'/></p>
                     <p className='nameSpeaker_d21'>Daniel G. Nemet</p>
                     <p className='descrSpeaker_d21'>Ecosystem Development - European Crypto Initiative</p>
                  </div>
						<div className='day21_speaker'>
                        <p className='wrap_photo_d21'><img src={max} className='speaker_day21'/></p>
                        <p className='nameSpeaker_d21'>Maxime N.Nassour</p>
                        <p className='descrSpeaker_d21'>Co-Founder & SEO of Saphi international Holding Corp.</p>
                  </div>
					</div>
				</div>
         </div>

    )
}

export default Day24speakers;
