import React from 'react';
import background from '../../public/images/Warmup.jpg';




class Day21Main extends React.Component{

  render() {
    return (
         <div className="container_day">
            <div className='wrap_day21'>
					<div className='day21_img'>
						<img src={background} id='img_day21'/>
					</div>
					<h3 className='day21_title'>Warm-up and welcome</h3>
					<p className='day21_data'>May 21, Saturday</p>
					<div className='wrap_day21_button'>
						<a href='#' className='day21_button'>Registration</a>
					</div>
				</div>
         </div>

    )
  }
}

export default Day21Main;
