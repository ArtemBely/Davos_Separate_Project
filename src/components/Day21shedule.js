import React from 'react';
import logo1 from '../../public/images/Vector5.svg';
import logo2 from '../../public/images/Vector6.svg';
import logo3 from '../../public/images/Group 621.svg';
import logo4 from '../../public/images/Mask group1.svg';
import logo5 from '../../public/images/Mask group6.svg';



class Day21shedule extends React.Component{

  render() {
    return (
         <div className="container_day">
            <div className='wrap_day21'>
				<h4 className='schedule_day21_title'>Day`s schedule </h4>
					<div className='schedule_day21'>
						<div className='schedule_block1'>
							<p className='schedule_block_time'>2 pm - 5 pm</p>
							<p className='schedule_block_text'>Smart Contract basics. As simple as it gets.</p>
							<p className='schedule_block_text2'>Workshops from Cardano and Polkadot</p>
							<div className='schedule21_logo1'>
								<img src={logo1} id='sch21_logo1'/>
							</div>
							<div className='schedule21_logo2'>
								<img src={logo2} id='sch21_logo2'/>
							</div>
						</div>
						<div className='schedule_block2'>
							<p className='schedule_block_time'>6 pm - midnight</p>
							<p className='schedule_block_text'>Opening Night of the EmTech in Immersive reality</p>
							<div className='schedule21_logo3'>
								<img src={logo3} id='sch21_logo3'/>
							</div>
							<div className='schedule21_logo4'>
								<img src={logo4} id='sch21_logo4'/>
							</div>
							<div className='schedule21_logo5'>
								<img src={logo5} id='sch21_logo5'/>
							</div>
						</div>
					</div>
				</div>
         </div>
         
    )
  }
}

export default Day21shedule;
