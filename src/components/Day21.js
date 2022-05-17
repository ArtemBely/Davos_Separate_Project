import React from 'react';
import loadable from 'react-loadable-visibility/loadable-components';
import Header from './Header';
import DavosSection2 from './DavosSection2';
import Footer from './Footer';
import Location from './Location';

class Main extends React.Component{
  render() {
    return(
      <div className='wrap_davos'>
          <Header />


          <DavosSection2 />
          <Location />
          <Footer />
      </div>
    )
  }
}

export default Main;
