import React from 'react';
import background from '../../public/images/The Investor day-2.png';




function Day23Main(){

      return (
           <div className="container_day">
                  <div className='wrap_day21'>
          					<div className='day21_img'>
          						<img src={background} id='img_day21'/>
              					</div>
                					<h3 className='day21_title'>Insights of DeFi</h3>
                					    <p className='day21_data'>May 23, Monday</p>
                					<div className='wrap_day21_button'>
              						<a href='#' className='day21_button'>Registration</a>
          					</div>
      				</div>
           </div>

      )
}

export default Day23Main;
