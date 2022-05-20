import React from 'react';
import Header from './Header';
import DavosSection2 from './DavosSection2';
import Footer from './Footer';
import Location from './Location';
import Day21Main from './Day21Main';
import Day21speakers from './Day21speakers';
import Day21shedule from './Day21shedule';
import Day21partners from './Day21partners';

class Day21 extends React.Component{
  render() {
    return(
      <p className='wrap_davos'>
          <Header />
    			 <Day21Main />
    			 <Day21shedule />
    			 <Day21speakers />
    			 <Day21partners />
             <p className='day21_margin'>
      				 <DavosSection2 />
      			 </p>
          <Location />
          <Footer />
      </p>
    )
  }
}

export default Day21;
