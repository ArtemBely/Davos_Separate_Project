import React from 'react';
import wave from '../../public/images/wave2.png';
import post1 from '../../public/images/Frame 585 1 — копия 2.png';
import post2 from '../../public/images/Group 809.png';
import post3 from '../../public/images/Group 811.png';
import post4 from '../../public/images/Group 812.png';
import cross from '../../public/images/cross.svg';

class Branding extends React.Component{

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
      <div className='wrap_branding'>

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

          <div className='branding'>
              <div className='high_brand'>
                    <p className="emtech_title" id='brand_title'>
                    Let's make your company part of the future together</p>
                    <p className="emtech_text2">
                    EmTech Investment Forum gives every company the opportunity
                    to be among the main IT startups of our time. Leave an application
                    to become a sponsor of the day, place your logo on advertising media
                    or receive publications in the media
                    </p>
                    <p className="become_a_partner3" id="partnerButton3" onClick={this.popup}>Become a partner</p>
              </div>
              <div className='low_brand'>
                    <div className='carts'>
                        <img src={post1} className='posts'/>
                        <p className='cart_txt'>Windows on the promenade side</p>
                    </div>
                    <div className='carts'>
                        <img src={post2} className='posts'/>
                        <p className='cart_txt'>Banner at the entrance</p>
                    </div>
                    <div className='carts'>
                        <img src={post3} className='posts'/>
                        <p className='cart_txt'>Notepads and pens</p>
                    </div>
                    <div className='carts'>
                        <img src={post4} className='posts'/>
                        <p className='cart_txt'>Branded botles</p>
                    </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Branding;
