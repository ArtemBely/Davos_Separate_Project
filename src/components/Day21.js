import React from 'react';
import loadable from 'react-loadable-visibility/loadable-components';
import Header from './Header';
import DavosSection2 from './DavosSection2';
import Footer from './Footer';
import Location from './Location';
import Day21Main from './Day21Main';
import Day21speakers from './Day21speakers';
import Day21shedule from './Day21shedule';
import Day21partners from './Day21partners';

class Main extends React.Component{
  render() {
    return(
      <div className='wrap_davos'>
          <Header />
			 <Day21Main />
			 <Day21shedule />
			 <Day21speakers />
			 <Day21partners />
          <DavosSection2 />
          <Location />
          <Footer />
      </div>
    )
  }
}

export default Main;
