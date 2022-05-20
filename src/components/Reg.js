import React from 'react';
import Header from './Header';
import Footer from './Footer';
import RegButton from './RegButton';

class Reg extends React.Component{
  render() {
    return(
      <p className='wrap_davos'>
          <Header />
           <RegButton />
          <p className='foot_hub'><Footer /></p>
      </p>
    )
  }
}

export default Reg;
