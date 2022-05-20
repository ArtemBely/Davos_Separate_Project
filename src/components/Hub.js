import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Buttons from './Buttons';

class Hub extends React.Component{
  render() {
    return(
      <p className='wrap_davos'>
          <Header />
           <Buttons />
          <p className='foot_hub'><Footer /></p>
      </p>
    )
  }
}

export default Hub;
