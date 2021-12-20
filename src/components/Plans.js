import React from 'react';
import plan1 from '../../public/images/521 1.png';
import plan2 from '../../public/images/image 13 — копия.png';
import { NavLink } from 'react-router-dom';

class Plans extends React.Component {

  constructor() {
    super()


  }


  render() {
    return(
      <div className='wrap__plans'>
          <div className='plans'>
                <p className='plan1'><img src={plan1} /></p>
                <p className='plan2'><img src={plan2} /></p>
                <p className='wrap_descr_plan1'>
                     <p className='title_descr_plan'>Plan a week in Davos</p>
                     <p className='descr_plan'>
                         January in Davos is a hot season,
                         over a hundred  events take place during
                         the Conferences week 16-23th of January.
                         In order not to get lost and make the most of this week,
                         we would like to arrange your schedule and navigate through
                         a countless number of conferences, workshops and parties.
                     </p>
                </p>
                <p className='wrap_descr_plan2'>
                     <p className='title_descr_plan'>Accommodation</p>
                     <p className='descr_plan'>For our special guests are available accommodation options.
                      It would be easier for us to meet your expectations if you let us know: preferable
                      location and number of people.</p>
                </p>
                <NavLink to='#'>
                    <p className='to_learn'>Plan your week</p>
                </NavLink>
                <NavLink to='#'>
                    <p className='to_learn'>To learn more</p>
                </NavLink>
          </div>
      </div>
   )
  }
}

export default Plans;
