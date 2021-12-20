import React from 'react';
import maps from '../../public/images/Rectangle 300.png';

function Location() {

    return (
        <div className="wrap_location">
              <div className="location">
                    <p className='speaker0 loc0'>Location</p>
                    <p className='map'><img src={maps} id='maps'/></p>
                    <p className='address'>Promenade 55, Davos Platz</p>
                    <a href='#' className='address add_link'>Open map</a>
              </div>
        </div>
    )
}

export default Location;
