import React from 'react';
import maps from '../../public/images/Rectangle 300.png';

function Location() {

    return (
        <div className="wrap_location">
              <div className="location">
                    <p className='speaker0 loc0'>Location</p>
                    <p className='map'><img src={maps} id='maps'/></p>
                    <p className='address'>Promenade 55, Davos Platz</p>
                    <a href='https://www.google.com/maps/place/Promenade+55,+7270+Davos+Platz,+%D0%A8%D0%B2%D0%B5%D0%B9%D1%86%D0%B0%D1%80%D0%B8%D1%8F/@46.7953019,9.8186636,17z/data=!3m1!4b1!4m5!3m4!1s0x4784a6aa78ff503b:0x3a7c6356fac2c937!8m2!3d46.7953019!4d9.8208576?hl=ru' className='address add_link'>Open map</a>
              </div>
        </div>
    )
}

export default Location;
