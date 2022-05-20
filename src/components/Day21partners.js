import React from 'react';
import img1 from '../../public/images/Vector7.svg';
import img2 from '../../public/images/Vector2.svg';
import pax from '../../public/images/Group 625.svg';
import hologram from '../../public/images/Mask group2.svg';
import trust from '../../public/images/Mask group4.svg';


function Day21partners(){

    return (
         <div className="container_day">
            <div className='wrap_day21'>
    					<p className='partners_day21_title'>Day`s partners</p>
    					<div className='wrap_partners_day21'>
    						<a href='#' target="_blank" className='partner_1'><img src={img1} id='cardano_d21'/></a>
    						<a href='#' target="_blank" className='partner_2'><img src={img2} id='polkadot_d21'/></a>
    						<a href='#' target="_blank" className='partner_3'><img src={pax} id='pax_d21'/></a>
    						<a href='#' target="_blank" className='partner_4'><img src={hologram} id='hologram_d21'/></a>
    						<a href='#' target="_blank" className='partner_5'><img src={trust} id='trust_d21'/></a>
    					</div>
    					<div className='wrap_day21_button'>
    						<a href='#' className='partners_day21_btn'>Become a partner</a>
    			 </div>
				</div>
         </div>

    )
}

export default Day21partners;
