import React from 'react';
import Header from './Header';
import DavosSection2 from './DavosSection2';
import Footer from './Footer';
import Location from './Location';
import Day25Main from './Day25Main';
import Day25speakers from './Day25speakers';
import Day25shedule from './Day25shedule';
import Day25partners from './Day25partners';

class Day25 extends React.Component{
  render() {
    return(
      <div className='wrap_davos'>
          <Header />
    			 <Day25Main />
    			 <Day25shedule />
    			 <Day25speakers />
    			 <Day25partners />
             <p className='day21_margin'>
      				 <DavosSection2 />
      			 </p>
          <Location />
          <Footer />
      </div>
    )
  }
}

export default Day25;
