import React from 'react';
import loadable from 'react-loadable-visibility/loadable-components';
import Header from './Header';
import DavosSection from './DavosSection';
import EmTech from './EmTech';
const DavosMain = loadable(() => import('./DavosMain'), { fallback: <div>Loading...</div> });
import When from './When';
import Sponsors from './Sponsors';
const Schedule = loadable(() => import('./Schedule'), { fallback: <div>Loading...</div> });
import Team from './Team';
import Location from './Location';
import Footer from './Footer'
import DavosSection2 from './DavosSection2'

class Main extends React.Component{
  render() {
    return(
      <div className='wrap_davos'>
          <Header />
          <DavosSection />
          <EmTech />
          <When />
          <Sponsors />
          <Schedule />
          <Team />
          <DavosMain />
          <DavosSection2 />
          <Location />
          <Footer />
      </div>
    )
  }
}

export default Main;
