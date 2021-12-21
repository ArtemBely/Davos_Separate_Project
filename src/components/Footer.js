import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import logo from '../../public/images/Logo — копия.svg';
import arrow from '../../public/images/Vector 42.svg';
import Instagram from '../../public/images/inst_ico.svg';
import Facebook from '../../public/images/facebook_ico.svg';

class Footer extends React.Component {

  render() {
    return(
      <div className='wrap__footer'>
          <div className='footer'>
              <div className='footer__logo'>
                  <img src={logo} className='footer__logo-img'></img>
              </div>
              <p className='each_foot_link' id='nav_links_foot1'>
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
                          What is EmTech</Link>
              </p>
              <p className='each_foot_link' id='nav_links_foot2'>
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
                          Why to participate</Link>
              </p>
              <p className='each_foot_link' id='nav_links_foot3'>
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
                            Speakers</Link>
              </p>
              <p className='each_foot_link' id='nav_links_foot4'>
                            <Link activeClass="active"
                            className='footer_nav'
                            to="link_schedule"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            duration={700}
                            isDynamic={true}
                            onSetActive={this.handleSetActive}
                            onSetInactive={this.handleSetInactive}
                            ignoreCancelEvents={false}>
                            Schedule</Link>
              </p>
              <p className='each_foot_link' id='nav_links_foot5'>
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
                            Partners</Link>
              </p>

              <a href="tel:+41 79 269 53 60" className="each_foot_link" id='tel1'>+41 79 269 53 60</a>
              <a href="mailto:info@emtechassociation.com" className='each_foot_link footer-link' id='mailto'>info@emtechassociation.com</a>
              <a href='#' className='each_foot_link hidden_policy'>Privacy policy</a>
              <a href='#' className='each_foot_link hidden_policy'>Refund and cancellation policy</a>
              <p className='each_foot_link' id='collab'>In collaboration  with <span id='bold_emtech'>EmTech Metaverse</span></p>
              <a href='#' className='each_foot_link' id='emtech2'>International EmTech  Investment Association</a>
                  <img src={Instagram} className='footer__link3-img' id='lnkdin'></img>
                  <a href='https://www.facebook.com/International-EmTech-Investment-Association-101085159068669' id='fb1'>
                  <img src={Facebook} className='footer__link3-img'></img>
                  </a>
              <p className='wrap_up'>
                          <Link activeClass="active"
                          className='footer_nav'
                          to="logo"
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
