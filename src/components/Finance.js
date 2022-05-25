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
    this.lowFinance = React.createRef();
  }

  openlist = () => {
    this.arr1.current.classList.toggle('imgRotate');
    this.finance.current.classList.toggle('show_finance');
    document.querySelectorAll('.low_grids').forEach(item => {
      item.classList.toggle('opa0');
    });
  }

  render() {
    return(
      <div className='wrap_finance'>
          <div className='finance' ref={this.finance} onClick={this.openlist}>
               <p className='wrap_star'><img src={star} id='star'/></p>
               <div className='wrap_future'>
                  <p className='future_title'>Future of Finance</p>
                  <p className='low_title' id='may25'>May 25, Wednesday</p>
                  <p className='agendas' id='for_i'>For institutional band private investors only</p>
                  <span className='wrap_arr2'><img src={arrow} ref={this.arr1} className='arrows'/></span>
               </div>

               <div className='low_grids' ref={this.lowFinance}>
						<p className='gold_time2'>15.30</p>
                  <p className='agendas spec_agenda'>Opening remarks: Alena Yudina - Founder of Quantum Leap Strategy AG</p>
						<p className='gold_time2'>15.35</p>
                  <p className='agendas spec_agenda'>Keynote from Nathan Kaiser Cardano Foundation </p>
						<p className='gold_time2'>15.50</p>
                  <p className='agendas spec_agenda'>Olga Felmeier - CEO of Smart Valor</p>
						<p className='gold_time2'>16.45 - 17.00</p>
                  <p className='agendas spec_agenda'>Keynote: the best R/R ratio in a bear market by Alex Fazel, SwissBorg</p>
						<p className='gold_time2'>17.45- 18.00</p>
                  <p className='agendas spec_agenda'>Keynote: Maxime N.Nassour -  Co-Founder & CEO | Saphi International Holding Corp.</p>
						<p className='gold_time2'>18.45 - 19.00</p>
                  <p className='agendas spec_agenda'>Keynote: Hinrich Pfeifer </p>
						<p className='gold_time2'>19:45 - 21.00 </p>
                  <p className='agendas spec_agenda'>Networking reception</p>
               </div>

               <div className='low_grids middle_grid' id='lm'>
                  <p className='gold_time2'>16:00 - 16:45</p>
						<p className='agendas agendas_panel'>"Are cryptocurrencies a good hedge against inflation?"</p>
                  <p className='agendas spec_agenda'>Moderator:  Dustin Plantholt  - Editor “Crypto” | Forbes Monaco | Founder Crypterns.com</p>
						<p className='agendas spec_agenda'>Speakers:  </p>
						<p className='agendas spec_agenda'>James Zhang - Senior Director | Investment & Enterprise | UNCTAD</p>
						<p className='agendas spec_agenda'>Ibrahim Alkurd -Founder  | Lavaliere Capital Management</p>
						<p className='agendas spec_agenda'>Emi Lorincz - Director of Sales and Business Development at Ledger | President of Crypto Valley Association | Board Member of Bancor</p>
						<p className='agendas spec_agenda'>Pablo Jodar - Financial Products manager at STORM Partners. Ex-JP Morgan investment analyst</p>
                  <p className='gold_time2'>18:00 - 18:45</p>
						<p className='agendas agendas_panel'>Monetary Reset Forecasts</p>
                  <p className='agendas spec_agenda'>Moderator: Thierry Arys Ruiz - Chairman & CEO, AgAu AG I Founder of Tarco Think Tank</p>
						<p className='agendas spec_agenda'>Speakers:</p>
						<p className='agendas spec_agenda'>James Zhang - Senior Director | Investment & Enterprise | UNCTAD</p>
						<p className='agendas spec_agenda'>Vladimir Novitskiy - Founder | GoWeb Capital AG </p>
						<p className='agendas spec_agenda'>Guenther Dobrauz - Partner& Leader PwC Legal Switzerland | Member of PwC’s Global | Legal Leadership Team</p>
						<p className='agendas spec_agenda'>Jean-Marc Seigneur - Director CAS DLT & Blockchain | University of Geneva | Academic Member | UN ITU</p>
               </div>

               <div className='low_grids3'>
						<p className='gold_time2'>17:00 - 17:45 </p>
						<p className='agendas agendas_panel'>"Global Trade: DLT and Crypto"</p>
						<p className='agendas spec_agenda'>Moderator: Sheraz Ahmed - Co-Executive Director | Crypto Valley Association | Managing Partner | STORM Partners </p>
						<p className='agendas spec_agenda'>Speakers: </p>
						<p className='agendas spec_agenda'>Victor Ammer - CEO | Ammer Group</p>
						<p className='agendas spec_agenda'>Ekkehard Ernst  - AI specialist at ILO | President of Geneva Macro Labs & Future of Work</p>
						<p className='agendas spec_agenda'>Joshua Ellul - Chairman of Malta Digital Innovation Authority | Director of Centre for DLT | University of Malta</p>
						<p className='gold_time2'>19:00 - 19:45</p>
						<p className='agendas agendas_panel'> Data Science Behind Identifying Unicorns</p>
						<p className='agendas spec_agenda'>Moderator: Eva Szalay - reporter Financial Times</p>
						<p className='agendas spec_agenda'>Speakers: </p>
						<p className='agendas spec_agenda'>Ari Qayumi - Venture Capitalist | Digital Transformation Leader | Stanford Behavior Design Researcher | Mindful Venture Capital</p>
						<p className='agendas spec_agenda'>Ray Wang - Founder, Chairman, & Principal Analyst of Constellation Research | Co-Host of DisrupTV | Best-Selling Author | </p>
						<p className='agendas spec_agenda'>Marc P. Bernegger -  Co-Founder | AltAlpha Digital | Founding Partner | Maximon - The Longevity Company Builder</p>
					</div>
          </div>
      </div>
    )
  }
}

export default Finance;
