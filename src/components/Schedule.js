import React from 'react';
import arrow from '../../public/images/Vector 42.svg';
import banc from '../../public/images/Bancambios.png';
import al from '../../public/images/al quazimi.png';
import monetary from '../../public/images/photo_2022-03-02_20-20-06 1.png';
import img1 from '../../public/images/Frame 585 1.png';
import img2 from '../../public/images/Frame 585 1 (1).png';
import img3 from '../../public/images/Frame 585 1 (2).png';
import img4 from '../../public/images/Frame 585 1 — копия.png';
import img5 from '../../public/images/Frame 585 1 (1) — копия.png';
import img6 from '../../public/images/Frame 585 1 (2) — копия.png';
import img7 from '../../public/images/Frame 585 1 (3).png';
import img8 from '../../public/images/Frame 585 1 (4).png';
import space from '../../public/images/32.png';
import pink from '../../public/images/7 — копия.png';
//import { LazyLoadImage } from 'react-lazy-load-image-component';

import { NavLink } from 'react-router-dom';

class Schedule extends React.Component {

  constructor() {
    super()


    this.arr1 = React.createRef();
    this.arr2 = React.createRef();
    this.arr3 = React.createRef();
    this.arr4 = React.createRef();
    this.arr5 = React.createRef();
    this.arr6 = React.createRef();
    this.arr7 = React.createRef();
    this.arrExtra = React.createRef();
    this.schedule = React.createRef();

    this.list1 = React.createRef();
    this.list2 = React.createRef();
    this.list3 = React.createRef();
    this.list4 = React.createRef();
    this.list5 = React.createRef();
    this.list6 = React.createRef();
    this.list7 = React.createRef();
    this.listExtra = React.createRef();
  }

  openlist1 = () => {
    this.arr1.current.classList.toggle('imgRotate');
    if(window.innerWidth > 320 && window.innerWidth < 575) {
      this.list1.current.classList.toggle('block11');
      document.querySelectorAll('.common_events_blocks2').forEach(item => {
        item.classList.remove('block55', 'block66', 'block33');
      });
      document.querySelectorAll('.common_events_blocks').forEach(item => {
        item.classList.remove('block22', 'block44',
         'block77', 'blockExtra2');
      });
      this.list4.current.classList.remove('block44');
    }
    else {
      this.list1.current.classList.toggle('block1');
    }
  }
  openlist2 = () => {
    this.arr2.current.classList.toggle('imgRotate');
    if(window.innerWidth > 320 && window.innerWidth < 575) {
      this.list2.current.classList.toggle('block22');
      document.querySelectorAll('.common_events_blocks2').forEach(item => {
        item.classList.remove('block55', 'block66', 'block33');
      });
      document.querySelectorAll('.common_events_blocks').forEach(item => {
        item.classList.remove('block11', 'block44',
          'block77', 'blockExtra2');
      });
      this.list4.current.classList.remove('block44');
    }
    else {
      this.list2.current.classList.toggle('block2');
    }
  }
  openlist3 = () => {
    this.arr3.current.classList.toggle('imgRotate');
    if(window.innerWidth > 320 && window.innerWidth < 575) {
      this.list3.current.classList.toggle('block33');
      document.querySelectorAll('.common_events_blocks2').forEach(item => {
        item.classList.remove('block55', 'block66');
      });
      document.querySelectorAll('.common_events_blocks').forEach(item => {
        item.classList.remove('block22', 'block44',
           'block77', 'blockExtra2');
      });
      this.list4.current.classList.remove('block44');
    }
    else {
        this.list3.current.classList.toggle('block3');
    }
  }
  openlist4 = () => {
    this.arr4.current.classList.toggle('imgRotate');
    if(window.innerWidth > 320 && window.innerWidth < 575) {
      this.list4.current.classList.toggle('block44');
      document.querySelectorAll('.common_events_blocks2').forEach(item => {
        item.classList.remove('block55', 'block66', 'block33');
      });
      document.querySelectorAll('.common_events_blocks').forEach(item => {
        item.classList.remove('block22',
         'block11', 'block77', 'blockExtra2');
      });
    }
    else {
      this.list4.current.classList.toggle('block4');
    }
  }
  openlist5 = () => {
    this.arr5.current.classList.toggle('imgRotate');
    if(window.innerWidth > 320 && window.innerWidth < 575) {
      this.list5.current.classList.toggle('block55');
      document.querySelectorAll('.common_events_blocks2').forEach(item => {
        item.classList.remove('block66', 'block33');
      });
      document.querySelectorAll('.common_events_blocks').forEach(item => {
        item.classList.remove('block22', 'block44',
         'block11', 'block77', 'blockExtra2');
      });
      this.list4.current.classList.remove('block44');
    }
    else {
          this.list5.current.classList.toggle('block5');
    }
  }
  openlist6 = () => {
    this.arr6.current.classList.toggle('imgRotate');
    if(window.innerWidth > 320 && window.innerWidth < 575) {
      this.list6.current.classList.toggle('block66');
      document.querySelectorAll('.common_events_blocks2').forEach(item => {
        item.classList.remove('block55', 'block33');
      });
      document.querySelectorAll('.common_events_blocks').forEach(item => {
        item.classList.remove('block22', 'block44',
         'block11', 'block77', 'blockExtra2');
      });
      this.list4.current.classList.remove('block44');
    }
    else {
          this.list6.current.classList.toggle('block6');
    }
  }
  openlist7 = () => {
    this.arr7.current.classList.toggle('imgRotate');
    if(window.innerWidth > 320 && window.innerWidth < 575) {
      this.list7.current.classList.toggle('block77');
      document.querySelectorAll('.common_events_blocks2').forEach(item => {
        item.classList.remove('block55', 'block33', 'block66');
      });
      document.querySelectorAll('.common_events_blocks').forEach(item => {
        item.classList.remove('block22', 'block44',
         'block11', 'blockExtra2');
      });
      this.list4.current.classList.remove('block44');
    }
    else {
          this.list7.current.classList.toggle('block7');
    }
  }
  openlistExtra = () => {
    this.arrExtra.current.classList.toggle('imgRotate');
    if(window.innerWidth > 320 && window.innerWidth < 575) {
      this.listExtra.current.classList.toggle('blockExtra2');
      document.querySelectorAll('.common_events_blocks2').forEach(item => {
        item.classList.remove('block55', 'block33', 'block66');
      });
      document.querySelectorAll('.common_events_blocks').forEach(item => {
        item.classList.remove('block22', 'block44',
         'block11', 'block77');
      });
      this.list4.current.classList.remove('block44');
    }
    else {
      this.listExtra.current.classList.toggle('blockExtra');
    }
  }


  render() {
    return(
      <div className='wrap__schedule' ref={this.schedule}>
          <div className='schedule' id='lsh'>
                <p className='title_schedule'>Schedule</p>
                <div className='wrap_events'>
                <div className='events2'>
                   <div className='common_events_blocks' ref={this.list1} onClick={this.openlist1}>
                    <div className='wrap_lazy'> <img src={img6} className='common_imgs'  /></div>
                      <div className='big_title'>Warm up<p className='big_title rec' id='rec2'> and welcome</p></div>
                      <p className='low_title spec_low2'>May 21, <span className='show_desc'>Saturday</span> <span className='show_mob'>Sat</span> <span className='wrap_arr'><img src={arrow} ref={this.arr1} className='arrows'/></span></p>
							 	<p className='when_text common_txts panel'>Smart Contract basics. As simple as it gets. Workshops from Cardano and Polkadot</p>
								 
                        <p className='when_text common_txts gold_time'>4 pm - 4.30 pm</p>
                        <p className='when_text common_txts panel'>Pr. Philipp Zahn + Benjamin Senn</p>
                        <p className='when_text common_txts'>Intro to smart contracts. How they work, why are they useful, what do they do. How to represent them in game theory.</p>
                         <p className='when_text common_txts gold_time'>5 pm - 5.30pm</p>
                         <p className='when_text common_txts panel'>Soramitsu Parachain
								 <br/>
								 Dr. Makoto Takemiya</p>
                         <p className='when_text common_txts'>Smart contracts and interoperability; why web assembly language (WASM) is the future of the internet.</p>
                         <p className='when_text common_txts gold_time'>6.00 pm - 6.30 pm</p>
                         <p className='when_text common_txts'>Networking</p>

                        <p className='when_text common_txts panel'>Opening Night of the EmTech in Immersive reality</p>
                        <p className='when_text common_txts gold_time'>from 6 pm</p>
                        <p className='when_text common_txts'>Welcome drinks, light snacks</p>
								<p className='when_text common_txts gold_time'>6.30 pm</p>
                        <p className='when_text common_txts'>Introduction to Metaverse in VR sets and competition by Pax World.</p>
                        <p className='when_text common_txts gold_time'>15 minutes - Hologram show</p>
                        <p className='when_text common_txts'>Pax.World presentation </p>
                        <p className='when_text common_txts'>Night competition. Hit as many Jack Daniels bottles as you can in VR Copy of the bar. </p>
                        <p className='when_text common_txts gold_time'>7.00 pm </p>
                        <p className='when_text common_txts'>Introduction of the Hologram Solution show by MDH Hologram
								<br/>
								Presentation from Olga Cooper</p>
                        <p className='when_text common_txts gold_time'>9.00 pm</p>
                        <p className='when_text common_txts panel'>Introduction of the Ammer Wallet</p>
                        <p className='when_text common_txts'>50% for all the food and drink with Ammer Wallet payments. Music and warm welcome to the EmTech Networking</p>
                   </div>
                   <div className='common_events_blocks' ref={this.list2} onClick={this.openlist2}>
                   <div className='wrap_lazy lazy_spec'><img src={img5} className='common_imgs'/></div>
                          <div className='big_title bio_t'>Sustainability<p className='big_title bio_t' id='hunds'>in Finance and Tech</p></div>
                          <p className='low_title'>May 22, <span className='show_desc'>Sunday</span> <span className='show_mob'>Sun</span> <span className='wrap_arr'><img src={arrow} ref={this.arr2} className='arrows'/></span></p>
                          <p><img src={al} id='al2'/></p>
                          <p className='when_text common_txts gold_time'>2 pm - 2.20 pm</p>
                          <p className='when_text common_txts'><span className='panel'>Keynote from Adnan Al Noori</span>,
                           Founder of the Future Innovation Summit and the Chairman of the Board of the Private Office of Sheikh Saqer Bin Mohamed Al Qasimi and Group of Companies</p>

                          <p className='when_text common_txts gold_time'>2.20 pm - 3.10 pm</p>
                          <p className='when_text common_txts'>Panel: Blockchain powered Smart Cities
                                    Moderator:
                                    Leyla Baghirzade - Founder of Swiss Alternative Financing AG
                                    Board member of Azerbaijan Blockchain Centre
                                    </p>

                          <p className='when_text common_txts'>Panelists: Maxime Nassour | Co-Founder Saphi
                                    Yana Leonova, Deputy General Manager at The Private Office and Group of Companies of Sheikh Saqer Bin Mohammed Al Qasimi </p>
                          <p className='when_text common_txts'>Stefan Kanalga, Founder & CEO | Yes we Trust</p>
									<p className='when_text common_txts gold_time'>3.15 pm - 3.30 pm </p>
                  <p className='when_text common_txts'>Stefan Kanalga, Founder & CEO | Yes we Trust
						<br/>
						Transforming Humanity & Economy with Social Tech</p>
                  <p className='when_text common_txts gold_time'>3.30 pm - 4 pm </p>
									<p className='when_text common_txts panel'>Open discussion. Stablecoins as sustainable solution?</p>
									<p className='when_text common_txts panel'>Moderator:</p>
									<p className='when_text common_txts'>Takhmina Nasimova - Business Development & Emerging Markets | AgAu.io</p>
									<p className='when_text common_txts'>Sophia Lopez - Founder and Chief Operating Officer Kaleido</p>
									<p className='when_text common_txts'>Navroop Sahdev - Founder and CEO  | The Digital Economist</p>
									<p className='when_text common_txts gold_time'>4 pm - 4.30 pm Tether Foundation </p>
									<p className='when_text common_txts'>Plan B with the City of Lugano</p>


                          <p className='when_text common_txts gold_time'>5 pm - 6.30 pm  </p>
								  <p className='when_text common_txts panel'>Description:</p>
								  <p className='when_text common_txts'>This panel will bring together a team of leading experts to discuss the use of blockchain technology for achieving the sustainable development goals (SDGs) outlined by the United Nations (UN).</p>
								  <p className='when_text common_txts panel'>Opening remarks:</p>
								  <p className='when_text common_txts'>Ramesh Ramadoss, Co-chair, IEEE Blockchain Initiative .</p>

								  <p className='when_text common_txts panel'>Panel: IEEE Panel on Blockchain for Achieving Sustainability Goals</p>

                          <p className='when_text common_txts panel'>Moderator:</p>
                          <p className='when_text common_txts'>Wulf Kaal, Professor - University of St. Thomas (Minnesota) | School of Law </p>

                          <p className='when_text common_txts panel'>Panelists:</p>
                          <p className='when_text common_txts'>John deVadoss -  Board Member| Global Business Blockchain Council (GBBC) </p>
                          <p className='when_text common_txts'>Genevieve Leveille - CEO, Agriledger</p>
                          <p className='when_text common_txts'>Maxime Nassour| Co-Founde Saphi</p>
								  <p className='when_text common_txts'>Yu Yuan -  President-Elect | IEEE Standards Association (IEEE SA) </p>

                          <p className='when_text common_txts gold_time'>8 pm - 2 am </p>
                          <p className='when_text common_txts'>Sustainability Green evening. </p>
								  <p className='when_text common_txts'>TED Talk by <span className='panel'>Maxime Nassour|Co-Founder Saphi</span> </p>
								  <p className='when_text common_txts'>Light dinner and networking paired with nice music</p>
                   </div>
                   <div className='common_events_blocks2 spec_block' ref={this.list3} onClick={this.openlist3} >
                   <div className='wrap_lazy lazy_spec'><img src={img4} className='common_imgs spec_imgs' /></div>
                       <div className='big_title bio_t'><p className='big_title bio_t' id='techInWar'>Insights of DeFi</p></div>
                           <p className='low_title'>May 23, <span className='show_desc'>Monday</span> <span className='show_mob'>Mon</span> <span className='wrap_arr'><img src={arrow} ref={this.arr3} className='arrows'/></span></p>
                           <p className='when_text common_txts gold_time'>12.00 pm- 2 pm</p>
                           <p className='when_text common_txts'>How to build a truly decentralized community. Open Lunch with DAOs</p>
                           <p className='when_text common_txts'>0VIX, Cardano, Gelato, Curio DAO, DecipherDAO, KILT protocol and more
									<br/>
									Moderator - one of the Top Swiss Lawyers Florian Ducommun, Partner at Bonnard Lawson International Law Firm
                           </p>
                          <p className='when_text common_txts gold_time'>2 pm - 3 pm</p>
								  <p className='when_text common_txts panel'>Panel: Future of Blockchain</p>
                          <p className='when_text common_txts'>Medha Parlikar , Co-Founder - Casper Labs</p>
                          <p className='when_text common_txts'>Ravikant Agrawal, Vice President of Strategy of Polygon</p>
                          <p className='when_text common_txts'>Nathan Kaiser, ex-chairman Cardano Foundation </p>
								  <p className='when_text common_txts'>Danny O BrienFilecoin, Filecoin Foundation</p>
								  <p className='when_text common_txts'>Alex Davis, Tezos Foundation</p>
								  <p className='when_text common_txts'>Moderated by CEO of Hacken, Dyma Budorin</p>

                          <p className='when_text common_txts gold_time'>3 pm - 4 pm</p>
                          <p className='when_text common_txts panel'>Panel: Cross-chain solutions</p>
                          <p className='when_text common_txts'>KILT Protocol - Ingo Rübe</p>
                          <p className='when_text common_txts'>Curio DAO - Vladimir Kislinskii</p>
								  <p className='when_text common_txts'>European Crypto Initiative (EU carbon credit trade) - Benjamin Senn</p>
								  <p className='when_text common_txts'>Mavryk - Alex Davis</p>

                          <p className='when_text common_txts gold_time'>4 pm - 5 pm</p>
                          <p className='when_text common_txts'>Open workshop on Lending market in DeFi by 0VIX </p>
                          <p className='when_text common_txts'>"Lending market risk assessment via agent-based modelling. An 0VIX case study" </p>
								  <p className='when_text common_txts panel'>Daniele Pinna, Head of Quantitative Research and Investment at 0VIX</p>

                          <p className='when_text common_txts gold_time'>5 pm - 6 pm</p>
                          <p className='when_text common_txts'>DeFi workshop: How to value layer 0 / layer 1 blockchain tokens</p>
								  <p className='when_text common_txts'>SwissBorg - Cyrus Fazel & Alex Fazel, </p>
                          <p className='when_text common_txts'>With Q&A</p>
								  <p className='when_text common_txts gold_time'>6 pm - 6.15 pm </p>
								  <p className='when_text common_txts'>Overview of growth of the ecosystem CH-UAE</p>
                          <p className='when_text common_txts'>Ralf Glabischnig, Crypto Oasis</p>
                          <p className='when_text common_txts gold_time'>6.30 pm - 7 pm</p>
                          <p className='when_text common_txts panel'>Payments and next gen solutions</p>
                          <p className='when_text common_txts'>Ammer Wallet - Victor Ammer</p>
                          <p className='when_text common_txts'>Kauri Finance - Alexey Pavlov</p>

                          <p className='when_text common_txts gold_time'>8 pm - 2 am</p>
                          <p className='when_text common_txts'>WoW White Party at the EmTech Invest Hub</p>
								  <p className='when_text common_txts'>What happens if EmTech, WOW Summit, GuyWay, Tidex and MM Pro representatives meet in one city?
								  <br/>Right! Exclusive party!
								  <br/>WOW EmTech will take place in Davos this week and will gather the most successful market players together!
								  <br/>Limited invite exclusively for Founders, Media, Influencers, VCs, heads of family offices, tech financiers and serious investors!
								  <br/>Get your VIP invitation and enjoy an evening entertainment and networking program.</p>
								  <p className='when_text common_txts panel'>What is waiting for you?</p>
								  <p className='when_text common_txts'>1. Very stylish event with neon light<br/>2. Amazing DJ Set<br/>3. Ultra fine food and drinks</p>
								  <p className='when_text common_txts'>Have a great time with Tier 1 community!<br/>Light dinner and networking paired with nice music</p>
                   </div>

                   <div className='investors' ref={this.list4} onClick={this.openlist4}>
                   <div className='wrap_lazy'><img src={space} className='common_imgs' id='sphere'/></div>
                   <div className='big_title bio_t'><p className='big_title bio_t' id='war1'>The Investor day: Insights from VCs with over 400 millions AUM</p></div>
                       <p className='low_title' id='may24'>May 24, <span className='show_desc'>Tuesday</span> <span className='show_mob'>Tue</span> <span className='wrap_arr'><img src={arrow} ref={this.arr4} className='arrows'/></span></p>
                           <p className='when_text common_txts'>Venture Capitalist community will gather together at the EmTech Investment Hub in Davos May 24th. Among participants are VC funds with over 400 millions AUM, private investors,
                            extremely fast growing blockchain&tech projects.  VCs will share unique insights on the panel discussion: ‘Success is hard to earn: how to eliminate costly mistakes for the Startups’ Funds and investors will shed
                            the light on how it’s better to streamline the process of setting up the business, pitching business models etc.
                          </p>
                       <p className='when_text common_txts'>Each project will not only participate in the *FinTech Start up award*, but also be given valuable assessment and feedback on strategy & business model presentation.</p>
							  <p className='when_text common_txts gold_time'>From 12 pm till 6 pm</p>
							  <p className='when_text common_txts gold_time'>12.00 to 13.00</p>
							  <p className='when_text common_txts'>How do VCs select the projects to invest into. Follow the trends or set your own?!</p>
							  <p className='when_text common_txts panel'>Speakers:</p>
							  <p className='when_text common_txts'>SwissBorg - Shane Kehoe, Managing Partner SwissBorg Ventures</p>
							  <p className='when_text common_txts'>Cypher Capital</p>
							  <p className='when_text common_txts'>Juliet Su , New Tribe Capital </p>
							  <p className='when_text common_txts'>Irina Heaver , Ikigai Ventures </p>
							  <p className='when_text common_txts'>Victor Larionov, Partner of Unirock.partners</p>
							  <p className='when_text common_txts gold_time'>13.00 to 13.30</p>
							  <p className='when_text common_txts'>Smart strategic investors Vs investment as a commodity  - how to find smart investors in Web3?</p>
							  <p className='when_text common_txts panel'>Speakers:</p>
							  <p className='when_text common_txts'>Juliet Su , New Tribe Capital </p>
							  <p className='when_text common_txts'>Irina Heaver , Ikigai Ventures </p>
							  <p className='when_text common_txts gold_time'>13.30 - 14.00 </p>
							  <p className='when_text common_txts'>Behaviour Design Research behind VC investment approach</p>
							  <p className='when_text common_txts panel'>Speakers:</p>
							  <p className='when_text common_txts'>Ms Ari Qayumi - Founder & General Partner, Mindful Venture Capital</p>
							  <p className='when_text common_txts gold_time'>14.00 - 14.30 </p>
							  <p className='when_text common_txts'>Networking Lunch </p>
							  <p className='when_text common_txts gold_time'>14.30 -15.00 </p>
							  <p className='when_text common_txts'>Does the size really matter? Size of the fund, investment ticket size, size of the raise </p>
							  <p className='when_text common_txts panel'>Speakers:</p>
							  <p className='when_text common_txts'>Victor Ammer from Ammer Capital</p>
							  <p className='when_text common_txts gold_time'>14.30 -15.00 </p>
							  <p className='when_text common_txts'>Keynote</p>
							  <p className='when_text common_txts'>Victor Larionov, Partner of Unirock.partners - DO - DON’T</p>
							  <p className='when_text common_txts gold_time'>15.00 - 15.30 </p>
							  <p className='when_text common_txts'>The hottest trends in crypto  - Web3.0, GameFi, NFTs  and applications</p>
							  <p className='when_text common_txts panel'>Speakers:</p>
							  <p className='when_text common_txts'>Juliet Su , New Tribe Capital </p>
							  <p className='when_text common_txts'>Irina Heaver , Ikigai Ventures </p>
							  <p className='when_text common_txts'>Konstantin Andreyev, Principal of Trendomatic / Beneficious Investment Management</p>
							  <p className='when_text common_txts gold_time'>15.30  - 16.00 </p>
							  <p className='when_text common_txts'>NFT a bubble or the biggest trend ?</p>
							  <p className='when_text common_txts panel'>Speakers:</p>
							  <p className='when_text common_txts gold_time'>16.00 -16.30  </p>
							  <p className='when_text common_txts panel'>Goldfingr.</p>
							  <p className='when_text common_txts'>Investment club experience of getting the best Companies on board</p>
							  <p className='when_text common_txts gold_time'>17.00 - 17 30  </p>
							  <p className='when_text common_txts'>Startup growth and investment preferences in Scandinavia</p>
							  <p className='when_text common_txts panel'>Speaker:</p>
							  <p className='when_text common_txts'>Yuriy Ovseenko, Startup Mentor UiA Nyskaping</p>
							  <p className='when_text common_txts gold_time'>6pm to 8 pm </p>
							  <p className='when_text common_txts'>Web3 Shark tank - pitching to VCs </p>
							  <p className='when_text common_txts'>Judges </p>
							  <p className='when_text common_txts'>Juliet Su , New Tribe Capital </p>
							  <p className='when_text common_txts'>Irina Heaver , Ikigai Ventures </p>
							  <p className='when_text common_txts'>Startups:</p>
							  <p className='when_text common_txts'>0VIX, Metabloqs, Pax.World, Saphi, Vlinder, Fitgoo.io</p>
							  <p className='when_text common_txts gold_time'>8 pm till late </p>
							  <p className='when_text common_txts'>VC Bar =  not to be missed </p>
                   </div>
                   <div className='common_events_blocks2 spec_block' ref={this.list5} onClick={this.openlist5}>
                   <div className='wrap_lazy'> <img
                   src={pink}
                   className='common_imgs spec_imgs'
                   /></div>
                       <p className='big_title'>Polygon lounge</p>
                       <p className='low_title spec_low'>May 25, <span className='show_desc'>Wednesday</span> <span className='show_mob'>Wed</span> <span className='wrap_arr'><img src={arrow} ref={this.arr5} className='arrows'/></span></p>
							  <p className='when_text common_txts gold_time'>11:00-12:00</p>
							  <p className='when_text common_txts'>Polygon card collection </p>
                       <p className='when_text common_txts gold_time'>12:00-13:00</p>
                       <p className='when_text common_txts'>Light food and drinks</p>
                       <p className='when_text common_txts gold_time'>13:00-13:30</p>
							  <p className='when_text common_txts panel'>Lessons from Lugano: the City on Blockchain</p>
                       <p className='when_text common_txts'>Find out why and how the City of Lugano moved to blockchain.</p>
							  <p className='when_text common_txts'>Speakers:</p>
                       <p className='when_text common_txts'>Marco Dal Lago, Head of Expansion, Tether and Bitfinex</p>
                       <p className='when_text common_txts'>Pietro Poretti, Director of Economic Development, City of Lugano</p>
                       <p className='when_text common_txts gold_time'>13:30-14:00</p>
							  <p className='when_text common_txts panel'>Digital Identity Revolution</p>
                       <p className='when_text common_txts'>New Web3 solutions are empowering the individual to take control of their data. Polygon’s team will show examples of innovations changing the way online identities and privacy are managed.</p>
                       <p className='when_text common_txts'>Speakers:</p>
                       <p className='when_text common_txts'>Antoni Martin, Co-Founder, Polygon Hermez and PolygonID</p>
                       <p className='when_text common_txts'>Sergi Mata, Global Enterprise Strategy Manager, Polygon </p>

							  <p className='when_text common_txts gold_time'>14:00-14:30</p>
							  <p className='when_text common_txts panel'>DeFi Lending 2.0</p>
                       <p className='when_text common_txts'>An overview of 0vix, the core Polygon money-market protocol. </p>
                       <p className='when_text common_txts'>Speakers:</p>
                       <p className='when_text common_txts'>Garry Krugljakow, Founder and CEO, 0VIX and GOGO Protocol </p>

							  <p className='when_text common_txts gold_time'>14:30-15:00</p>
							  <p className='when_text common_txts panel'>Market Risk in Lending Protocols </p>
                       <p className='when_text common_txts'>A demo of the simulation 0vix uses to stress test their lending solutions in a variety of market conditions.</p>
                       <p className='when_text common_txts'>Speakers:</p>
                       <p className='when_text common_txts'>Daniele Pinna, Head of Quantitative Research and Investment, 0VIX</p>

							  <p className='when_text common_txts gold_time'>15:00-17:30</p>
							  <p className='when_text common_txts panel'>Lounge bar open, use Polygon card to get a discount on food and drinks</p>

                       <p className='when_text common_txts gold_time'>17:30-18:00	</p>
                       <p className='when_text common_txts panel'>Blockchain’s Impact on Global Income Inequality</p>
                       <p className='when_text common_txts'>Web3 has the potential to improve economic conditions for
                       the most disadvantaged members of the global society. This session explores the opportunities
                       blockchain technologies create to diametrically change income distribution around the world.</p>
                       <p className='when_text common_txts'>Speakers: </p>
                       <p className='when_text common_txts'>Ravikant Agrawal, Vice President of Strategy, Polygon</p>
                       <p className='when_text common_txts'>Antoni Martin, Co-Founder, Polygon Hermez and PolygonID</p>

                       <p className='when_text common_txts gold_time'>18:00-18:30</p>
                       <p className='when_text common_txts panel'>The Unlimited Potential of the Decentralized Metaverse</p>
                       <p className='when_text common_txts'>It’s not just fun and games. The metaverse has the potential to touch
                        nearly every aspect of life. Polygon’s metaverse expert will explain how. </p>
                        <p className='when_text common_txts'>Speakers: </p>
                        <p className='when_text common_txts'>Brian Trunzo, Metaverse Lead, Polygon Studios</p>

                        <p className='when_text common_txts gold_time'>18:30-21:30</p>
                        <p className='when_text common_txts panel'>Light food and drinks</p>

                        <p className='when_text common_txts gold_time'>20:00-21:30</p>
                        <p className='when_text common_txts panel'>Jazz band</p>
                   </div>

                   <div className='common_events_blocks' ref={this.list7} onClick={this.openlist7}>
                   <div className='wrap_lazy lazy_spec'><img
                   src={img7}
                   className='common_imgs'
                   /></div>
                      <div className='big_title bio_t'>NFTs<p className='big_title bio_t' id='meta1'>and Metaverse</p></div>
                      <p className='low_title'>May 26, <span className='show_desc'>Thursday</span> <span className='show_mob'>Thu</span> <span className='wrap_arr'><img src={arrow} ref={this.arr7} className='arrows'/></span></p>
                      <p className='when_text common_txts gold_time'>1 pm - 1.20 pm</p>
                      <p className='when_text common_txts'>ShowCase by Pax.World</p>
                      <p className='when_text common_txts gold_time'>1.40 pm - 2 pm</p>
                      <p className='when_text common_txts'>ShowCase by Adresta</p>
                      <p className='when_text common_txts gold_time'>2 pm - 2.30 pm</p>
                      <p className='when_text common_txts'>Metaverse and NFT for Business in Europe and GCC</p>
							 <p className='when_text common_txts panel'>Fireside chat </p>
							 <p className='when_text common_txts'>Hrish Lotlikar - Co-Founder & CEO SuperWorld</p>
							 <p className='when_text common_txts'>Kumardev Chatterjee - NEOM Cognitive Metaverse </p>
							 <p className='when_text common_txts'>David Bundi - Metaverse talks.ch</p>
                      <p className='when_text common_txts gold_time'>2.30pm - 2.50 pm</p>
                      <p className='when_text common_txts'>The Planet's Natural Technology  -  Niyanta Spelman, CEO of Rainforest Partnership </p>
                      <p className='when_text common_txts gold_time'>2.50 pm - 3.00 pm</p>
                      <p className='when_text common_txts'>ShowCase by Metabloqs</p>
                      <p className='when_text common_txts gold_time'>3 pm - 4 pm</p>
							 <p className='when_text common_txts'>Panel 1: Banking on Metaverse</p>
                      <p className='when_text common_txts'>Panel 2: NFT Valuation, Legal and Business Considerations 
							 <br/>Jasmin Karatas, (Moderator), Caroline Taylor, Appraisal Bureau, Cedric Ming, MetaverseTalks</p>
                       <p className='when_text common_txts gold_time'>4 pm - 4.15 pm</p>
                       <p className='when_text common_txts'>Fireside Chat with Dustin Plaintholt and Dre</p>
                       <p className='when_text common_txts'>| Cool & Dre| </p>
                       <p className='when_text common_txts'>Topic "NFTs and Music"</p>

                       <p className='when_text common_txts gold_time'>7 pm - 2 am</p>
                       <p className='when_text common_txts'>Closing Party</p>
                       <p className='when_text common_txts'>Closing Party with DJ Dean from Stil & Taktvoll</p>
                   </div>

                   <div className='common_events_blocks2 spec_block' ref={this.list6} onClick={this.openlist6} style={{display: "none"}}>
                   <div className='wrap_lazy'><img
                   src={img2}
                   className='common_imgs spec_imgs'
                   /></div>
                      <p className='big_title'>Where next?</p>
                      <p className='low_title spec_low'>May 27-28, <span className='show_desc'>Fri-Sat</span> <span className='show_mob'>Fri-Sat</span> <span className='wrap_arr spec_arr2'><img src={arrow} ref={this.arr6} className='arrows'/></span></p>
                          <p className='when_text common_txts'>Monaco for professional investors. Be fast - be first. Investment opportunities.</p>
                   </div>


                </div>
              {/*  <div className='wrap_all_events'>


                    <div className='wrap_each_event'>
                        <p className='date'>May 20, Friday</p>
                        <p className='date2'>Opening Reception</p>
                        <p className='arr_sch'><img src={arrow} ref={this.arr1} onClick={this.openlist1}/></p>
                    </div>
                    <div className='wrap_list_event' ref={this.list1}>
                        <p className='first_col_of_events'>
                          <p className='date1' style={{ display: "none" }}><span className='time_of'>18.00-22.00</span>
                          </p>
                          <p className='date1 date_spec'>From 6 p.m. guests are invited to the opening event and get to know top journalists, our partners and sponsors.</p>
                            <p className='date1 date_spec'>  A jazz concert, a flying dinner, a fireside chat.</p>
                            <p className='date1 date_spec'>  Augmented, virtual and mixed reality dimensions will garnish the evening.</p>
                          <p className='apply_but' style={{ display: "none" }}>Apply for masterclass</p>
                        </p>
                        <div className='second_col_of_events specForMobile1' style={{paddingLeft: '100px'}}>
                          <p className='date1'>Invitation only, with strict RSVP.</p>
                        </div>
                    </div>

                    <div className='wrap_each_event'>
                        <p className='date'>May 21, Saturday</p>
                        <p className='date2'>Biohacking. 300 years or older</p>
                        <p className='arr_sch'><img src={arrow} ref={this.arr2} onClick={this.openlist2}/></p>
                    </div>
                    <div className='wrap_list_event' ref={this.list2}>
                        <p className='first_col_of_events'>
                          <p className='date1 date_spec' ><span className='time_of' style={{display: "none"}}>12:00-21:00</span>
                          <p> What makes it possible? We’ll hear from leading experts.
                                The day of Biohacking is co-hosted by our partners. </p>
                          </p>
                        </p>
                        <div className='second_col_of_events specForMobile1' style={{paddingLeft: '100px'}}>
                          <p className='date1'>Agenda on request.</p>
                        </div>
                    </div>

                    <div className='wrap_each_event'>
                        <p className='date'>May 23, Monday</p>
                        <p className='date2'>Emerging Technologies in War</p>
                        <p className='arr_sch'><img src={arrow} ref={this.arr3} onClick={this.openlist3}/></p>
                    </div>
                    <div className='wrap_list_event' ref={this.list3}>
                        <div className='second_col_of_events'>
                           <p className='date1 specForTablet' style={{width: '436px', paddingLeft: '100px'}}>Real cases that help Ukraine now. What we can learn from it.</p>
                        </div>
                        <p className='first_col_of_events'>
                           <p className='date1 date_spec spec1'><span className='time_of'>7:00 - 10:00</span>  <p>Business media breakfast</p></p>
                           <p className='date1 date_spec spec1' style={{width: '400px'}}><span className='time_of'>13:00 - 17:00</span>
                                <p>→ Cyber war</p>
                                <p>→ Fintech in Crisis</p>
                                <p>→ Volunteering and identity protection</p>
                                <p>→ Regulation</p>
                              </p>
                           <p className='date1 date_spec'><span className='time_of'>20:00 - 22:00</span> <p style={{width: '367px'}} className='spec2'>Blockchain mass adoption.<p>Rebuild Ukraine with transparency</p></p></p>
                           <p className='date1 date_spec'><span className='time_of'>22:00 - 2:00</span>  <p style={{width: '448px'}} className='spec2'>Charity night auction with world famous DJ</p></p>
                           <p></p>
                           <p className='date1 date_spec spec3' style={{marginTop: '48px'}}>Lead by community</p>
                        </p>

                    </div>


                    <div className='wrap_each_event'>
                        <p className='date'>May 24, Tuesday</p>
                        <p className='date2'>Insights of DeFi</p>
                        <p className='arr_sch'><img src={arrow} ref={this.arrExtra} onClick={this.openlistExtra}/></p>
                    </div>
                    <div className='wrap_list_event' ref={this.listExtra}>
                        <div className='second_col_of_events'>
                        <p className='date1 date_spec specForTablet' style={{paddingLeft: '100px'}}>
                              <span className='time_of'>8:00 - 10:00</span>
                              <p style={{width: '482px'}} className='spec4'>Decentralized trading for breakfast</p>
                        </p>
                        <div className='date1 date_spec specForTablet' style={{paddingLeft: '100px'}}>
                              <span className='time_of'>12:00 - 14:30</span>
                              <p style={{width: '378px'}} className='spec4'>Legal Gaps of DeFi. Solutions from top-lawyers</p>
                        </div>
                        <div className='date1 date_spec specForTablet' style={{paddingLeft: '100px'}}>
                              <span className='time_of'>17:00 - 22:00</span>
                              <p style={{width: '346px'}} className='spec4'>Ecosystem leaders. Next step in DeFi</p>
                        </div>
                    </div>
                    <div className='first_col_of_events'>
                              <p className='date1 spec6' style={{paddingLeft: '13px'}}>In partneship with <img src={banc} id='banc'/></p>
                    </div>
                    </div>

                    <div className='wrap_each_event'>
                        <p className='date'>May 25, Wednesday</p>
                        <p className='date2'>Sustainability</p>
                        <p className='arr_sch'><img src={arrow} ref={this.arr4} onClick={this.openlist4}/></p>
                    </div>
                    <div className='wrap_list_event' ref={this.list4}>
                        <div className='second_col_of_events specForMobile3' style={{paddingLeft: '100px'}}>
                          <p className='date1'>From green trends to investments.</p>
                          <p className='date1' style={{width: '300px'}}>Smart cities from The UAE to Eurasia. </p>
                          <p className='date1' style={{width: '304px'}}>What makes the shift? Led by Governments and Intergovernmental bodies.</p>
                          <p className='date1'>The Agenda is to follow.</p>
                        </div>
                        <p className='first_col_of_events'>
                          <img src={al} id='al'/>
                        </p>
                    </div>

                    <div className='wrap_each_event'>
                        <p className='date'>May 26, Thursday</p>
                        <p className='date2'>Global Finance</p>
                        <p className='arr_sch'><img src={arrow} ref={this.arr5} onClick={this.openlist5}/></p>
                    </div>
                    <div className='wrap_list_event' ref={this.list5}>
                        <p className='first_col_of_events'>
                          <p className='date1'><span className='time_of'>8:00 - 10:00</span> <p>Forbes Business Breakfast</p></p>
                          <p className='date1'><span className='time_of'>14:00 - 15:00</span> <p>Banking or Web 3</p></p>
                          <p className='date1'><span className='time_of'>15:15 - 16:15</span> <p>Compliance of Defi</p></p>
                          <p className='date1'><span className='time_of'>16:30 - 17:30</span> <p>Asset management or Trusts</p></p>
                          <p className='date1'><span className='time_of'>20:00 - 21:00</span> <p>Stable coins or gold?</p></p>
                          <p className='date1'><span className='time_of'>22:00 - 2:00</span> <p>Precious Party with non-virtual gold</p></p>
                        </p>
                        <div className='second_col_of_events specForMobile3' style={{paddingLeft: '100px'}}>
                          <p className='date1'>
                              <p className='date1' style={{color: '#f6dba8', fontWeight: 'bolder'}}>Hard Rock Hotel, The Chapel</p>
                              <span className='time_of'>16:00 - 21:30</span>
                              <p className='date1' style={{marginTop: '0px'}}> Monetary Reset Conference</p>
                          </p>

                        </div>
                    </div>

                    <div className='wrap_each_event'>
                        <p className='date'>May 27, Friday</p>
                        <p className='date2'>NFTs and Metaverse</p>
                        <p className='arr_sch'><img src={arrow} ref={this.arr6} onClick={this.openlist6}/></p>
                    </div>
                    <div className='wrap_list_event' ref={this.list6}>
                        <p className='first_col_of_events'>
                          <p className='date1' style={{width: '274px'}}>Deep dive into the topic from experts. Trends for business use.</p>
                        </p>
                        <div className='second_col_of_events spec5' style={{paddingLeft: '100px'}}>
                          <p className='date1'>Agenda is available on the website.</p>
                        </div>
                    </div>

                    <div className='wrap_each_event' id='last_event'>
                        <p className='date'>May 28-29, Weehend</p>
                        <p className='date2' style={{width: '613px'}}>Monaco for professional investors. Investment opportunities</p>
                        <p className='arr_sch'><img src={arrow} ref={this.arr7} onClick={this.openlist7}/></p>
                    </div>
                    <div className='wrap_list_event' id='list7' ref={this.list7}>
                        <p className='first_col_of_events'>
                          <p className='date1'>Private event <br/> at the F1 Race in Monaco.</p>
                        </p>
                        <div className='second_col_of_events spec5' style={{paddingLeft: '100px'}}>
                          <p className='date1'>Agenda on request.</p>
                        </div>
                    </div>

                </div> */}
                </div>
          </div>
      </div>
   )
  }
}

export default Schedule;
