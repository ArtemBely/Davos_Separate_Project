import React from 'react';
import maps from '../../public/images/874528 1.jpg';

function Location() {

    return (
        <div className="wrap_location">
              <div className="location">
                    <p className='speaker0 loc0'>Location</p>
                    <p className='map'><img src={maps} id='maps'/></p>
                    <p className='address'>Promenade 63, Davos Platz</p>
                    <a rel="nofollow" href='https://goo.gl/maps/X3bByJAhDkTjJjqV9' className='address add_link'>Open map</a>
              </div>
        </div>
    )
}

export default Location;
