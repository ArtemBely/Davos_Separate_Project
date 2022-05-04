import React from 'react';
import logo from '../../public/images/Logo.svg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

class Header extends React.Component {

  constructor() {
    super()

    this.head = React.createRef();
    this.nan = React.createRef();
  }

  addClass = () => {
    this.head.current.classList.toggle("active");
    this.nan.current.classList.toggle("active");
  }

  render() {
    return(
      <div className='wrap__header'>
          <div className='header'>
              <div className="navigation">
                <NavLink to='/'><img src={logo} id='logo' /></NavLink>
                <div className="header__burger" ref={this.head} onClick={this.addClass}>
                  <span></span>
                </div>
                <ul className="navigation-list" ref={this.nan}>
                  <li className="navigation-item">
                              <Link activeClass="active"
                              className='navigation-link'
                              to="what_is"
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              duration={700}
                              isDynamic={true}
                              onClick={this.addClass}
                              onSetActive={this.handleSetActive}
                              onSetInactive={this.handleSetInactive}
                              ignoreCancelEvents={false}>
                              What is EmTech</Link>
                  </li>
                  <li className="navigation-item">
                              <Link activeClass="active"
                              className='navigation-link'
                              to="why_to"
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              duration={700}
                              isDynamic={true}
                              onClick={this.addClass}
                              onSetActive={this.handleSetActive}
                              onSetInactive={this.handleSetInactive}
                              ignoreCancelEvents={false}>
                              Why to participate</Link>
                  </li>
                  <li className="navigation-item">
                                <Link activeClass="active"
                                className='navigation-link'
                                to="link_speak"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                duration={700}
                                isDynamic={true}
                                onClick={this.addClass}
                                onSetActive={this.handleSetActive}
                                onSetInactive={this.handleSetInactive}
                                ignoreCancelEvents={false}>
                                Speakers</Link>
                  </li>
                  <li className="navigation-item news_hide">
                                <Link activeClass="active"
                                className='navigation-link'
                                to="link_schedule"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                duration={700}
                                isDynamic={true}
                                onClick={this.addClass}
                                onSetActive={this.handleSetActive}
                                onSetInactive={this.handleSetInactive}
                                ignoreCancelEvents={false}>
                                Schedule</Link>
                  </li>
                  <li className="navigation-item">
                                <Link activeClass="active"
                                className='navigation-link'
                                to="link_partners"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                duration={700}
                                isDynamic={true}
                                onClick={this.addClass}
                                onSetActive={this.handleSetActive}
                                onSetInactive={this.handleSetInactive}
                                ignoreCancelEvents={false}>
                                Partners</Link>
                  </li>
                  <li className="navigation-item nav-login">
                    <NavLink to="#" className="navigation-link" id='login'>Log in</NavLink>
                  </li>
                </ul>
              </div>
          </div>
      </div>
   )
  }
}

export default Header;
