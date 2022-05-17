import React from 'react';
import Header from './Header';
import Footer from './Footer';
import star from "../../public/images/star-2.png";
import arrow from '../../public/images/Vector 42.svg';

class Finance extends React.Component {

  constructor() {
    super()


    this.arr1 = React.createRef();
    this.list1 = React.createRef();
    this.finance = React.createRef();
  }

  openlist = () => {
    this.arr1.current.classList.toggle('imgRotate');
    this.finance.current.classList.toggle('show_finance');
  }

  render() {
    return(
      <div className='wrap_finance'>
          <div className='finance' ref={this.finance} onClick={this.openlist}>
               <p className='wrap_star'><img src={star} id='star'/></p>
               <div className='wrap_future'>
                  <p className='future_title'>Future of Finance</p>
                  <p className='low_title' id='may25'>May 25, Wednesday</p>
                  <p className='agendas' id='for_i'>For institutional and private investors only</p>
                  <span className='wrap_arr2'><img src={arrow} ref={this.arr1} className='arrows'/></span>
               </div>

               <div className='low_grids'>
                  <p className='agendas' id='ag'>The EmTech Invest Hub traditionally hosts the Day for professional investors and traders.
                   Together with International Financial entities we will discuss Monetary policies,
                   Crypto as diversification factor for VCs and their integration in TradeFi.</p>
                  <p className='agendas' id='low_agenda'>The event is for institutional and private investors.</p>
               </div>

               <div className='low_grids middle_grid' id='lm'>
                  <p className='panels2'>AGENDA</p>
                  <p className='gold_time2'>14:00 - 15:00</p>
                  <p className='agendas spec_agenda'>Late Lunch & Networking</p>
                  <p className='gold_time2'>15:00 - 15:15</p>
                  <p className='agendas spec_agenda'>Keynote from the one  of the top Invest Funds</p>
               </div>

               <div className='low_grids3'>
                  <p className='gold_time2'><span className='panels2'>PANELS</span> 15:30 - 18:30 </p>
                  <p className='agendas agendas_panel'>→ Are Cryptocurrencies  a good hedge against inflation?</p>
                  <p className='agendas agendas_panel'>→ DLT, Crypto and Global Trade</p>
                  <p className='agendas agendas_panel'>→ Monetary Rest Forecasts</p>
               </div>

               <div className='low_sponsors'></div>
          </div>
      </div>
    )
  }
}

export default Finance;
