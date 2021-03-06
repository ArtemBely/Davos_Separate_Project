import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import logo from '../../public/images/Logo.svg';
import arrow from '../../public/images/Vector 42.svg';
import linked from '../../public/images/inst_ico.svg';
import facebook from '../../public/images/facebook_ico.svg';
import instagram from '../../public/images/instagram.svg';
import youtube from '../../public/images/youtube.svg';

class Footer extends React.Component {

  render() {
    return(
      <div className='wrap__footer'>
          <div itemScope itemType="http://schema.org/Organization" className='footer'>
          <link itemProp='url' href='https://emtechinvest.com/'/>
              <div className='footer__logo'>
                  <img itemProp="logo"  src={logo} className='footer__logo-img'></img>
              </div>
              <p className='each_foot_link' id='nav_links_foot1'>
              {typeof window != "undefined" && window.location.pathname != '/' ?
              <a href='/' className='navigation-link'> What is EmTech </a> :
                          <Link activeClass="active"
                          className='footer_nav'
                          to="what_is"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          duration={700}
                          isDynamic={true}
                          onSetActive={this.handleSetActive}
                          onSetInactive={this.handleSetInactive}
                          ignoreCancelEvents={false}>
                          What is EmTech</Link> }
              </p>
              <p className='each_foot_link' id='nav_links_foot2'>
              {typeof window != "undefined" && window.location.pathname != '/' ?
              <a href='/' className='navigation-link'> Why to participate </a> :
                          <Link activeClass="active"
                          className='footer_nav'
                          to="why_to"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          duration={700}
                          isDynamic={true}
                          onSetActive={this.handleSetActive}
                          onSetInactive={this.handleSetInactive}
                          ignoreCancelEvents={false}>
                          Why to participate</Link> }
              </p>
              <p className='each_foot_link' id='nav_links_foot3'>
              {typeof window != "undefined" && window.location.pathname != '/' ?
              <a href='/' className='navigation-link'> Speakers </a> :
                            <Link activeClass="active"
                            className='footer_nav'
                            to="link_speak"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            duration={700}
                            isDynamic={true}
                            onSetActive={this.handleSetActive}
                            onSetInactive={this.handleSetInactive}
                            ignoreCancelEvents={false}>
                            Speakers</Link> }
              </p>
              <p className='each_foot_link' id='nav_links_foot4'>
              {typeof window != "undefined" && window.location.pathname != '/' ?
              <a href='/' className='navigation-link'> Schedule </a> :
                            <Link activeClass="active"
                            className='footer_nav'
                            to="lsh"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            duration={700}
                            isDynamic={true}
                            onSetActive={this.handleSetActive}
                            onSetInactive={this.handleSetInactive}
                            ignoreCancelEvents={false}>
                            Schedule</Link> }
              </p>
              <p className='each_foot_link' id='nav_links_foot5'>
              {typeof window != "undefined" && window.location.pathname != '/' ?
              <a href='/' className='navigation-link'> Partners </a> :
                            <Link activeClass="active"
                            className='footer_nav'
                            to="link_partners"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            duration={700}
                            isDynamic={true}
                            onSetActive={this.handleSetActive}
                            onSetInactive={this.handleSetInactive}
                            ignoreCancelEvents={false}>
                            Partners</Link> }
              </p>

              <a href="tel:+41 79 269 53 60" itemProp="telephone" className="each_foot_link" id='tel1'>+41 79 269 53 60</a>
              <a href="mailto:info@emtechassociation.com" itemProp="email" className='each_foot_link footer-link' id='mailto'>info@emtechassociation.com</a>
              <a href='#' className='each_foot_link hidden_policy'>Privacy policy</a>
              <a href='#' className='each_foot_link hidden_policy'>Refund and cancellation policy</a>
              <p className='each_foot_link' id='collab'>In collaboration with <span id='bold_emtech'>EmTech Metaverse</span></p>
              <a href='https://emtechassociation.com/' itemProp="name" className='each_foot_link' id='emtech2'>International EmTech Investment Association</a>
                  <a rel="nofollow" href="https://www.linkedin.com/events/6922285420902825984/about/" id='lnkdin'>
                    <img src={linked} className='footer__link3-img'></img>
                  </a>
                  <a rel="nofollow" href='https://www.facebook.com/Emtechinvest-109159918432447/?notif_id=1650919970525933&notif_t=page_user_activity&ref=notif' id='fb1'>
                    <img src={facebook} className='footer__link3-img'></img>
                  </a>
                  <a rel="nofollow" href='https://www.youtube.com/channel/UCDy7yH4NLFDsWvn3wS3kVYQ' id='youtube'>
                    <img src={youtube} className='footer__link3-img'></img>
                  </a>
                  <a rel="nofollow" href='https://www.instagram.com/emtechinvest/' id='insta1'>
                    <img src={instagram} className='footer__link3-img'></img>
                  </a>
              <p className='wrap_up'>
                          <Link activeClass="active"
                          className='footer_nav'
                          to="wrap_header"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          duration={700}
                          isDynamic={true}
                          onSetActive={this.handleSetActive}
                          onSetInactive={this.handleSetInactive}
                          ignoreCancelEvents={false}>
                          <img src={arrow} /></Link>
              </p>

          </div>
      </div>
   )
  }

}

export default Footer;
