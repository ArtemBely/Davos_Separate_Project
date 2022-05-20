import React from 'react';
import Header from './Header';
import DavosSection2 from './DavosSection2';
import Footer from './Footer';
import Location from './Location';
import Day22Main from './Day22Main';
import Day22speakers from './Day22speakers';
import Day22shedule from './Day22shedule';
import Day22partners from './Day22partners';

class Day22 extends React.Component{
  render() {
    return(
      <div className='wrap_davos'>
          <Header />
    			 <Day22Main />
    			 <Day22shedule />
    			 <Day22speakers />
    			 <Day22partners />
             <p className='day21_margin'>
      				 <DavosSection2 />
      			 </p>
          <Location />
          <Footer />
      </div>
    )
  }
}

export default Day22;
