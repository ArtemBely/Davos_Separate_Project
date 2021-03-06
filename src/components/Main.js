import React from 'react';
import loadable from 'react-loadable-visibility/loadable-components';
import Header from './Header';
import DavosSection from './DavosSection';
import EmTech from './EmTech';
const DavosMain = loadable(() => import('./DavosMain'), { fallback: <div>Loading...</div> });
const MediaSponsors = loadable(() => import('./MediaSponsors'), { fallback: <div>Loading...</div> });
import When from './When';
const Sponsors = loadable(() => import('./Sponsors'), { fallback: <div>Loading...</div> });
const Schedule = loadable(() => import('./Schedule'), { fallback: <div>Loading...</div> });
const Branding = loadable(() => import('./Branding'), { fallback: <div>Loading...</div> });
import Team from './Team';
import Finance from './Finance';
const Media = loadable(() => import('./Media'), { fallback: <div>Loading...</div> });
import Location from './Location';
import Footer from './Footer';
import DavosSection2 from './DavosSection2';

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
          <Finance />
          <Branding />
          <Team />
          <DavosMain />
          <MediaSponsors />
          <DavosSection2 />
          <Location />
          <Footer />
      </div>
    )
  }
}

export default Main;
