import React from 'react';
import Header from './Header';
import DavosSection2 from './DavosSection2';
import Footer from './Footer';
import Location from './Location';
import Day24Main from './Day24Main';
import Day24speakers from './Day24speakers';
import Day24shedule from './Day24shedule';
import Day24partners from './Day24partners';

class Day24 extends React.Component{
  render() {
    return(
      <div className='wrap_davos'>
          <Header />
    			 <Day24Main />
    			 <Day24shedule />
    			 <Day24speakers />
    			 <Day24partners />
             <p className='day21_margin'>
      				 <DavosSection2 />
      			 </p>
          <Location />
          <Footer />
      </div>
    )
  }
}

export default Day24;
