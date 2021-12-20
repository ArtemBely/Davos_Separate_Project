import React from "react";
import logo from "../../public/images/Strategic_logo.png";
import mainImage from "../../public/images/Group467.jpg";
import arrowBtn from '../../public/images/download-arrow.svg';
import blackArr from '../../public/images/Vector (1).svg';
import vesnea from '../../public/images/Group 513.svg';
import brid from '../../public/images/Group 505.svg';

function DavosSection2() {
  return (
    <>
          <div className="strategic">
            <h3 className="strategic__title">Strategic partnerships</h3>

            <div className='wrap_str'>
                <div className='str'>
                  <div className="strategic__contact" id='alena1'>
                    <div className="startegic__wrap">
                      <img src={logo} alt="logo" className="startegic__logo" id='ql_logo'/>
                    </div>
                    <p className="strategic__contact-name yudina">Alena Yudina</p>
                    <p className="strategic__contact-position">
                      Managing Director
                    </p>
                      <p className="strategic__contact-email">
                        <span className="info">E-mail</span>a.yudina@qlstrategy.ch
                      </p>
                      <p className="strategic__contact-phone">
                        <span className="info">Mobile</span>+41 79 269 53 60
                      </p>
                  </div>

                  <div className="strategic__contact vesnea2">
                    <div className="startegic__wrap">
                      <img src={vesnea} alt="logo" className="startegic__logo" />
                    </div>
                    <p className="strategic__contact-name vlatko">Vlatko Gigov</p>
                    <p className="strategic__contact-position">
                      Executive Director
                    </p>
                      <p className="strategic__contact-email">
                        <span className="info">E-mail</span>vlatko@vesnea.com
                      </p>
                      <p className="strategic__contact-phone">
                        <span className="info">Mobile</span>+41 79 915 56 02
                      </p>
                  </div>

                  <div className="strategic__contact milton_wrap">
                    <div className="startegic__wrap">
                      <img src={brid} alt="logo" className="startegic__logo" />
                    </div>
                    <p className="strategic__contact-name milton">Milton Guarderas</p>
                    <p className="strategic__contact-position" id='ceo'>
                      CEO
                    </p>
                      <p className="strategic__contact-email">
                        <span className="info">E-mail</span>Investormilton@bridgingnetworks.com
                      </p>
                      <p className="strategic__contact-phone">
                        <span className="info">Mobile</span>+491 515 881 83 70
                      </p>
                  </div>
                </div>
            </div>

            <button className="download__strategic">
                    <div className="download-wrap__strategic">
                        <img className="arrow-button__strategic" src={arrowBtn} alt="Download"/>
                        <img className="arrow-button__strategic2" src={blackArr} alt="Download"/>
                        <a href='https://drive.google.com/file/d/1KfsYzI0RQ9xVgtiHrPrvgtGRiJ9fs4mC/view?usp=sharing'
                         className="strategic-donwload__text">Download presentation</a>
                    </div>
                </button>
          </div>
        </>
  );
}

export default DavosSection2;
