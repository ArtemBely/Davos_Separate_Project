import React from 'react';
import Header from './Header';
import DavosSection2 from './DavosSection2';
import Footer from './Footer';
import Location from './Location';
import Day23Main from './Day23Main';
import Day23speakers from './Day23speakers';
import Day23shedule from './Day23shedule';
import Day23partners from './Day23partners';

class Day23 extends React.Component{
  render() {
    return(
      <div className='wrap_davos'>
          <Header />
    			 <Day23Main />
    			 <Day23shedule />
    			 <Day23speakers />
    			 <Day23partners />
             <p className='day21_margin'>
      				 <DavosSection2 />
      			 </p>
          <Location />
          <Footer />
      </div>
    )
  }
}

export default Day23;
