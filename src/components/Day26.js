import React from 'react';
import Header from './Header';
import DavosSection2 from './DavosSection2';
import Footer from './Footer';
import Location from './Location';
import Day26Main from './Day26Main';
import Day26speakers from './Day26speakers';
import Day26shedule from './Day26shedule';
import Day26partners from './Day26partners';

class Day26 extends React.Component{
  render() {
    return(
      <div className='wrap_davos'>
          <Header />
    			 <Day26Main />
    			 <Day26shedule />
    			 <Day26speakers />
    			 <Day26partners />
             <p className='day21_margin'>
      				 <DavosSection2 />
      			 </p>
          <Location />
          <Footer />
      </div>
    )
  }
}

export default Day26;
