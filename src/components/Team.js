import React from 'react';
import nat from '../../public/images/image 20.jpg';
import al from '../../public/images/Rectangle 287.png';
import kir from '../../public/images/Rectangle 294.png';

function Team() {

    return (
        <div className="wrap_team">
              <div className="team">
                      <p id='team1'>Team</p>
                      <div>
                          <p className='each_speaker'><img src={al} className='each_img_speak'/></p>
                          <p className='each_speaker_name'>Alena Yudina</p>
                      </div>
                      <div>
                          <p className='each_speaker'><img src={nat} className='each_img_speak'/></p>
                          <p className='each_speaker_name'>Natalia Pogonchenko</p>
                      </div>
                      <div>
                          <p className='each_speaker'></p>
                          <p className='each_speaker_name'>Konstantin Negachev</p>
                      </div>
                      <div>
                          <p className='each_speaker'></p>
                          <p className='each_speaker_name'>Katie Aarson</p>
                      </div>
                      <div>
                          <p className='each_speaker'></p>
                          <p className='each_speaker_name'>Vlatko Gigov</p>
                      </div>
                      <div>
                          <p className='each_speaker'></p>
                          <p className='each_speaker_name'>Milton Guarderas</p>
                      </div>
                      <div>
                          <p className='each_speaker'><img src={kir} className='each_img_speak'/></p>
                          <p className='each_speaker_name'>Kirill Povetev</p>
                      </div>
                      <div>
                          <p className='each_speaker'></p>
                          <p className='each_speaker_name'>Ekaterina </p>
                      </div>
              </div>
        </div>
    )
}

export default Team;
