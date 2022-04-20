import React from 'react';
import logo from '../../public/images/Group 300.svg';
import mainImage from '../../public/images/Group467.jpg';
import rect from '../../public/images/Rectangle 90.png';
import cross from '../../public/images/cross.svg';

class DavosSection extends React.Component{

  constructor() {

    super()

    this.state = {
        isOpen4: false,
        isOpen5: false
    }
  }

  popup = () => {
    this.setState({ isOpen4: true });
  }

  popup2 = () => {
    this.setState({ isOpen5: true });
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
                        <input type="text" name="phone_number" className="popup__input" placeholder="Phone number" required/>
                        <input type="text" name="email" className="popup__input" placeholder="Email" required/>
                        <div className="popup__footer">
                            <button className="popup__footer-btn">Send</button>
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

        <div className="popup2" style={{
            display: !this.state.isOpen5 ? 'none' : 'block'
          }}>
              <div className="popup__body">
                  <div className="popup__content2">
                      <div className="popup__header">
                          <h2 className="popup-title">Become a participant</h2>
                          <img src={cross} className="popup__close" onClick={()=>this.setState({isOpen5:false})}></img>
                      </div>
                      <p className="popup__main-paragraph">
                          Fill out the form, our <br />
                          manager will contact you
                      </p>
                      <form action='/sendRequest/participant' className="popup__form" method='POST'>
                          <input type="text" name="name" className="popup__input" placeholder="Company name" required/>
                          <input type="text" name="purpose" className="popup__input" placeholder="Contact person" required/>
                          <input type="tel" name="phone_number" className="popup__input" placeholder="Attachments" required/>
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


        <div className="blur"></div>

               <div className="wrap__lead">
                       <img src={mainImage} alt="main-image" className="lead__image" />
                 <div className='wrap_rect'><img src={rect} /></div>
               </div>

               <div className='wrap_main_title'>
                 <div className='main_title1'>

                 <div className="lead__container">
                   <img src={logo} alt="logo" className="lead__logo" />
                 </div>

               <div className="wrap__sections">
                 <div className="description">
                   <p className="description__title">The future is now</p>
                   <p className="description__paragraph">May 20-28, 2022</p>
                   <p className="description__paragraph">Davos, Switzerland</p>
                 </div>
                 <p className='become_a_partner partner1' onClick={this.popup}>Become a partner</p>
                 <p className='become_a_partner partic' onClick={this.popup2}>Become a participant</p>
               </div>

             </div>

           </div>
         </>
    )
  }
}

export default DavosSection;
