import React from 'react';
import DavosCard from './DavosCard';
import Plans from './Plans';
import arrowButton from '../../public/images/download-arrow.svg';
import blackArr from '../../public/images/Vector (1).svg';
import worldEconomicForum from '../../public/images/WorldEconomicForum.png';
import cross from '../../public/images/cross.svg';
import img1 from '../../public/images/Frame 483.svg';
import img3 from '../../public/images/Frame 488.svg';
import img4 from '../../public/images/Frame 486.svg';
import img6 from '../../public/images/Frame 485.svg';
import img7 from '../../public/images/Frame 490.svg';
import img9 from '../../public/images/Frame 492.svg';
import img10 from '../../public/images/Frame 493.svg';
import img11 from '../../public/images/Frame 494.svg';
import img12 from '../../public/images/Logo Tarko Think Tank@2x.svg';
import img13 from '../../public/images/Frame 535.svg';
import img14 from '../../public/images/Frame 536.svg';
import poly from '../../public/images/poly.svg';
import fast from '../../public/images/fast.svg';
import ovix from '../../public/images/ovix.svg';
import trust from '../../public/images/trust.svg';
import pax from '../../public/images/pax.svg';
import talks from '../../public/images/Talks.svg';
import ql from '../../public/images/ql.svg';
import hologram from '../../public/images/hologram.svg';
import gbbc from '../../public/images/gbbc.svg';
import euci from '../../public/images/euci.svg';
import meta from '../../public/images/meta.svg';
import swiss from '../../public/images/swiss.svg';
import saphi from '../../public/images/saphi.svg';
import ieee from '../../public/images/ieee.svg';
import ag from '../../public/images/Frame 553.png';
import gen from '../../public/images/Frame 555.png';
import fut from '../../public/images/Frame 556.png';
import un from '../../public/images/Frame 557.png';
import img58 from '../../public/images/Frame 558.png';
import img59 from '../../public/images/Frame 559.png';
import img60 from '../../public/images/Frame 560.png';
import img61 from '../../public/images/Frame 561.png';
import img62 from '../../public/images/Frame 562.png';
import img63 from '../../public/images/Frame 563.png';
import img95 from '../../public/images/Frame 595.png';
import img66 from '../../public/images/Frame 566.png';
import img67 from '../../public/images/Frame 567.png';
import img68 from '../../public/images/Frame 568.png';
import img69 from '../../public/images/Frame 569.png';
import img70 from '../../public/images/Frame 570.png';
import img71 from '../../public/images/Frame 571.png';
import img72 from '../../public/images/Frame 572.png';
import img73 from '../../public/images/Frame 573.png';
import img74 from '../../public/images/Frame 574.png';
import img75 from '../../public/images/Frame 575.png';
import img76 from '../../public/images/Frame 576.png';
import img77 from '../../public/images/Frame 577.png';
import img78 from '../../public/images/Frame 578.png';
import img79 from '../../public/images/Frame 579.png';
import img80 from '../../public/images/Frame 580.png';
import img81 from '../../public/images/Frame 581.png';
import img82 from '../../public/images/Frame 582.png';
import img83 from '../../public/images/Frame 583.png';
import img84 from '../../public/images/Frame 584.png';
import img85 from '../../public/images/Frame 585.png';
import img86 from '../../public/images/Frame 586.png';
import img87 from '../../public/images/Frame 587.png';
import img88 from '../../public/images/Frame 588.png';
import img89 from '../../public/images/Frame 589.png';
import img90 from '../../public/images/Frame 590.png';
import img91 from '../../public/images/Frame 591.png';
import img92 from '../../public/images/Frame 592.png';
import img93 from '../../public/images/Frame 593.png';
import img94 from '../../public/images/Frame 594.png';

class DavosMain extends React.Component{

  constructor() {

    super()

    this.state = {
        isOpen4: false
    }
  }

  popup = () => {
    this.setState({ isOpen4: true });
  }

  render() {
    return (
         <>

         <div className="popup" style={{
             display: !this.state.isOpen4 ? 'none' : 'block'
           }}>
               <div className="popup__body">
                   <div className="popup__content">
                       <div className="popup__header">
                           <h2 className="popup-title">Become a partner</h2>
                           <img src={cross} className="popup__close" onClick={()=>this.setState({isOpen4:false})}></img>
                       </div>
                       <p className="popup__main-paragraph">
                           Fill out the form, our <br />
                           manager will contact you
                       </p>
                       <form action='/sendRequest' className="popup__form" method='POST'>
                           <input type="text" name="name" className="popup__input" placeholder="Name" required/>
                           <input type="text" name="purpose" className="popup__input" placeholder="Purpose" required/>
                           <input type="tel" name="phone_number" className="popup__input" placeholder="Phone number" required/>
                           <input type="text" name="email" className="popup__input" placeholder="Email" required/>
                           <div className="popup__footer">
                               <button type='submit' className="popup__footer-btn">Send</button>
                               <p className="popup__footer-paragraph">
                                   By clicking on the «Send» button you <br />
                                   confirm your consent to the processing <br />
                                   of data and agree to the privacy policy
                               </p>
                           </div>
                       </form>
                   </div>
               </div>
           </div>


{/*             <div className="concept">
                 <h3 className="concept__title">Concept</h3>
                 <div className="concept__wrapper">
                     <div className="join-us">
                         <div className="join-us__header">7 days — 7 trends</div>
                         <div className="join-us__descr">Emerging Technologies are a part of our life. It is time to SHOW it: Rising stars. Investors. Corporates.</div>
                         <button className="join-us__btn" onClick={this.popup}>Become part of the future</button>
                     </div>
                     <DavosCard />
                 </div>
                 <a href='https://drive.google.com/file/d/1S6EndxHWm9mfPW_4zTt9wLch--16fk6z/view?usp=sharing' className="concept-download">
                     <div className="download-wrap">
                         <img className="arrow-button" src={arrowButton} alt="Download"/>
                         <img className="arrow-button3" src={blackArr} alt="Download"/>
                         <div className="concept-donwload__text">Download Concept Presentation</div>
                     </div>
                 </a>
             </div>
          <Plans />*/}

          <div className='wrap_partners'>
             <div className="partners">
                 <h3 className="partners__title" id='link_partners'>Partners</h3>

                   <p id='img1' className='middle_top'><a href='https://hhshkqassimi.com/' target="_blank"><img src={img1} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={poly} className='com_parts'/></a></p>
                   {/*<p id='fast' className='middle_top'><a href='#' target="_blank"><img src={fast} className='com_parts'/></a></p>*/}
                   <p id='ovix' className='middle_top'><a href='#' target="_blank"><img src={ovix} className='com_parts'/></a></p>
                   <p id='trust' className='middle_top'><a href='#' target="_blank"><img src={trust} className='com_parts'/></a></p>
                   <p id='img3' className='middle_top'><a href='http://goweb.com/' target="_blank"><img src={img3} className='com_parts'/></a></p>
                   <p id='img6' className='middle_top'><a href='https://coinspaid.com/' target="_blank"><img src={img6} className='com_parts'/></a></p>
                   <p id='pax' className='middle_top'><a href='#' target="_blank"><img src={pax} className='com_parts'/></a></p>
                   <p id='talks' className='middle_top'><a href='#' target="_blank"><img src={talks} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={gbbc} className='com_parts'/></a></p>
                   <p id='hologram' className='middle_top'><a href='#' target="_blank"><img src={hologram} className='com_parts'/></a></p>
                   <p id='ql' className='middle_top'><a href='#' target="_blank"><img src={ql} className='com_parts'/></a></p>
                   <p id='img7' className='middle_top'><a href='https://vrt.one/' target="_blank"><img src={img7} className='com_parts'/></a></p>
                   <p id='euci' className='middle_top'><a href='#' target="_blank"><img src={euci} className='com_parts'/></a></p>
                   <p id='meta' className='middle_top'><a href='#' target="_blank"><img src={meta} className='com_parts'/></a></p>
                   <p id='saphi' className='middle_top'><a href='#' target="_blank"><img src={saphi} className='com_parts'/></a></p>
                   <p id='img14' className='middle_top'><img src={img14} className='com_parts'/></p>
                   <p id='img13' className='middle_top'><a href='https://bancambios.exchange/' target="_blank"><img src={img13} className='com_parts'/></a></p>
                   <p id='ieee' className='middle_top'><a href='#' target="_blank"><img src={ieee} className='com_parts'/></a></p>
                   <p id='swiss' className='middle_top'><a href='#' target="_blank"><img src={swiss} className='com_parts'/></a></p>
                   <p id='img9' style={{display: "none"}} className='middle_top'><img src={img9} className='com_parts'/></p>
                   <p id='img4' style={{display: "none"}}><img src={img4} className='com_parts'/></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={ag} className='com_parts'/></a></p>
                   <p id='tank' className='middle_top'><a href='#' target="_blank"><img src={img12} className='com_parts'/></a></p>
                   <p id='gen' className='middle_top'><a href='#' target="_blank"><img src={gen} className='com_parts'/></a></p>
                   <p id='fut' className='middle_top'><a href='#' target="_blank"><img src={fut} className='com_parts'/></a></p>
                   <p id='un' className='middle_top'><a href='#' target="_blank"><img src={un} className='com_parts'/></a></p>
                   <p id='img58' className='middle_top'><a href='#' target="_blank"><img src={img58} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img59} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img60} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img61} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img62} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img63} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img95} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img66} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img67} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img68} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img69} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img70} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img71} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img72} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img73} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img74} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img75} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img76} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img77} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img78} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img79} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img80} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img81} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img82} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img83} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img84} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img85} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img86} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img87} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img88} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img89} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img90} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img91} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img92} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img93} className='com_parts'/></a></p>
                   <p id='' className='middle_top'><a href='#' target="_blank"><img src={img94} className='com_parts'/></a></p>
                   {/*<p id='img11' className='down_center'><a href='https://eddaswap.com/' target="_blank"><img src={img11} className='com_parts'/></a></p>*/}

                 <p className='become_a_partner2' onClick={this.popup}>Become a partner</p>
              </div>
            </div>
         </>
    )
  }
}

export default DavosMain;
