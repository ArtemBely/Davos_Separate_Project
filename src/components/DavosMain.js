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
import img12 from '../../public/images/Frame 534.svg';
import img13 from '../../public/images/Frame 535.svg';
import img14 from '../../public/images/Frame 536.svg';

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

                   <p id='img1'><img src={img1} className='com_parts'/></p>
                   <p id='img3'><img src={img3} className='com_parts'/></p>
                   <p id='img6' className='middle_top'><img src={img6} className='com_parts'/></p>
                   <p id='img9' className='middle_top'><img src={img9} className='com_parts'/></p>
                   <p id='img4'><img src={img4} className='com_parts'/></p>
                   <p id='img12'><img src={img12} className='com_parts'/></p>
                   <p id='img13'><img src={img13} className='com_parts'/></p>
                   <p id='img14'><img src={img14} className='com_parts'/></p>
                   <p id='img7' className='middle_top'><img src={img7} className='com_parts'/></p>
                   <p id='img11' className='down_center'><img src={img11} className='com_parts'/></p>
                   <p id='img10' className='down_center'><img src={img10} className='com_parts'/></p>

                 <p className='become_a_partner2' onClick={this.popup}>Become a partner</p>
              </div>
            </div>
         </>
    )
  }
}

export default DavosMain;
