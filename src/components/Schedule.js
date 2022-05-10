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
import space from '../../public/images/Frame 585 12.png';
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
    }
    else {
      this.listExtra.current.classList.toggle('blockExtra');
    }
  }


  render() {
    return(
      <div className='wrap__schedule' ref={this.schedule}>
          <div className='schedule'>
                <p className='title_schedule' id="link_schedule">Schedule</p>
                <div className='wrap_events'>
                <div className='events2'>
                   <div className='common_events_blocks' ref={this.list1} onClick={this.openlist1}>
                    <div className='wrap_lazy'> <img src={img6} className='common_imgs'  /></div>
                      <div className='big_title'>Warm up<p className='big_title rec' id='rec2'> and welcome</p></div>
                      <p className='low_title spec_low2'>May 21, <span className='show_desc'>Saturday</span> <span className='show_mob'>Sat</span> <span className='wrap_arr'><img src={arrow} ref={this.arr1} className='arrows'/></span></p>

                        <p className='when_text common_txts gold_time'>2 pm - 5 pm</p>
                        <p className='when_text common_txts'>Smart Contract basics. Workshops from Cardano and Polkadot.</p>
                         <p className='when_text common_txts gold_time'>6 pm - midnight</p>
                         <p className='when_text common_txts'>Opening Night of the EmTech in Immersive reality.  Welcome
                         drinks and VR-competition from Pax World</p>
                   </div>
                   <div className='common_events_blocks' ref={this.list2} onClick={this.openlist2}>
                   <div className='wrap_lazy lazy_spec'><img
                   src={img5}
                   className='common_imgs'
                   /></div>
                          <div className='big_title bio_t'>Sustainability<p className='big_title bio_t' id='hunds'>in Finance and Tech</p></div>
                          <p className='low_title'>May 22, <span className='show_desc'>Sunday</span> <span className='show_mob'>Sun</span> <span className='wrap_arr'><img src={arrow} ref={this.arr2} className='arrows'/></span></p>
                          <p><img src={al} id='al2'/></p>
                          <p className='when_text common_txts gold_time'>9 am - 11 am </p>
                          <p className='when_text common_txts'>Business Media Breakfast. Sustainability of DAO. Legal and social challenges.</p>
                          <p className='when_text common_txts gold_time'>12 pm - 1 pm</p>
                          <p className='when_text common_txts panel'>Panel: Blockchain for sustainability</p>
                          {/*<p className='when_text common_txts'>John deVadoss, Global Business Blockchain Council (GBBC)
                                  Ramesh Ramadoss, IEEE Blockchain Initiative
                                  Sheila Warren, Crypto Council For Innovation (CCI) - tbd
                                  Maxime Nassour, Saphi Ecosystem
                                  </p>*/}
                          <p className='when_text common_txts gold_time'>1 pm - 2 pm</p>
                          <p className='when_text common_txts panel'>Panel: Bridging GCC and Europe. Payments and fintech legislation</p>
                          {/*<p className='when_text common_txts'>FasTToken</p>
                          <p className='when_text common_txts'>SwissBorg</p>
                          <p className='when_text common_txts'>SEBA - tbd</p>
                          <p className='when_text common_txts'>Abu Dhabi Investment office - tbd</p>*/}
                          <p className='when_text common_txts gold_time'>2 pm - 3 pm</p>
                          <p className='when_text common_txts panel'>Panel: Blockchain powered Smart Cities</p>

                          <p className='when_text common_txts gold_time'>3 pm - 6 pm</p>
                          <p className='when_text common_txts'>Banking and Web 3. Opportunities and examples</p>
                          <p className='when_text common_txts gold_time'>8 pm - 2 am</p>
                          <p className='when_text common_txts'>Light dinner and networking paired with
                           live music Supported by The Private Office of HH Sheikh Saqer al Qasimi</p>

                   </div>
                   <div className='common_events_blocks2 spec_block' ref={this.list3} onClick={this.openlist3} >
                   <div className='wrap_lazy lazy_spec'><img src={img4} className='common_imgs spec_imgs' /></div>
                       <div className='big_title bio_t'><p className='big_title bio_t' id='techInWar'>Insights of DeFi</p></div>
                           <p className='low_title'>May 23, <span className='show_desc'>Monday</span> <span className='show_mob'>Mon</span> <span className='wrap_arr'><img src={arrow} ref={this.arr3} className='arrows'/></span></p>
                           <p className='when_text common_txts gold_time'>9 am - 11 am</p>
                           <p className='when_text common_txts'>Business Media Breakfast.</p>
                           {/*<p className='when_text common_txts'>Meet Future of DeFi in person: open discussion, announcements, interviews
                                No stupid questions exist. Question challenge: “Ask me anything”.
                                </p>*/}
                          <p className='when_text common_txts gold_time'>12 pm - 2 pm</p>
                          <p className='when_text common_txts'>Lunch with DAO. How to build a truly decentralized community.</p>
                          <p className='when_text common_txts gold_time'>2 pm - 4 pm</p>
                          <p className='when_text common_txts panel'>Panel: Future of Blockchain: Polygon, Solana, Near, Ethereum, Cardano, Polka</p>
                          <p className='when_text common_txts panel'>Panel: Cross-chain solutions</p>
                          <p className='when_text common_txts gold_time'>4 pm - 5 pm</p>
                          <p className='when_text common_txts'>Learn and Earn. Easy to use guide into DeFi by SwissBorg</p>
                          <p className='when_text common_txts gold_time'>5 pm - 6 pm</p>
                          <p className='when_text common_txts panel'>Workshop: Where is the money on blockchain? Find opportunities Lending, Staking, LP, Trading</p>
                          <p className='when_text common_txts gold_time'>7 pm - 8 pm</p>
                          <p className='when_text common_txts'>Payments and storage solutions. Presentation and drink from CoinsPaid</p>
                          <p className='when_text common_txts gold_time'>8 pm - 1 am</p>
                          <p className='when_text common_txts'>Evening reception with live music</p>
                   </div>

                   <div className='common_events_blocks' ref={this.list4} onClick={this.openlist4}>
                   <div className='wrap_lazy'><img src={space} className='common_imgs'/></div>
                   <div className='big_title bio_t'><p className='big_title bio_t' id='war1'>Emerging Technologies in crisis. </p></div>
                       <p className='low_title' id='may24'>May 24, <span className='show_desc'>Tuesday</span> <span className='show_mob'>Tue</span> <span className='wrap_arr'><img src={arrow} ref={this.arr4} className='arrows'/></span></p>
                           <p className='when_text common_txts gold_time'>9 am - 11 am</p>
                           <p className='when_text common_txts'>Business media breakfast</p>
                           <p className='when_text common_txts gold_time'>1 pm - 5 pm </p>
                           <p className='when_text common_txts'>Real life case studies</p>
                           <p className='when_text common_txts'>→ Cyber war </p>
                          <p className='when_text common_txts'>→ Fintech in the times of crisis</p>
                          <p className='when_text common_txts'>→ Volunteering and identity protection</p>

                          {/*<p className='when_text common_txts gold_time'>8 pm  - 11 pm </p>
                          <p className='when_text common_txts'>Mass adoption of blockchain</p>
                          <p className='when_text common_txts'>Rebuild with transparency</p>*/}

                   </div>
                   <div className='common_events_blocks2 spec_block' ref={this.list5} onClick={this.openlist5}>
                   <div className='wrap_lazy'> <img
                   src={pink}
                   className='common_imgs spec_imgs'
                   /></div>
                       <p className='big_title'>Polygon lounge</p>
                       <p className='low_title spec_low'>May 25, <span className='show_desc'>Wednesday</span> <span className='show_mob'>Wed</span> <span className='wrap_arr'><img src={arrow} ref={this.arr5} className='arrows'/></span></p>
                       <p className='when_text common_txts gold_time'>10 am to 7 pm</p>
                       <p className='when_text common_txts'>Ecosystem Talks</p>
                       <p className='when_text common_txts'>Matic payments</p>
                       <p className='when_text common_txts'>Special menu</p>

                       <p className='when_text common_txts gold_time'>8 pm - 1 am</p>
                       <p className='when_text common_txts panel'>Polygon evening reception co-hosted with CoinTelegraph</p>
                       <p className='when_text common_txts'>Live Jazz night and cool-off</p>
                       <p className='when_text common_txts panel'>Invite Only</p>
                   </div>

                   <div className='common_events_blocks' ref={this.list7} onClick={this.openlist7}>
                   <div className='wrap_lazy lazy_spec'><img
                   src={img7}
                   className='common_imgs'
                   /></div>
                      <div className='big_title bio_t'>NFTs<p className='big_title bio_t' id='meta1'>and Metaverse</p></div>
                      <p className='low_title'>May 26, <span className='show_desc'>Thursday</span> <span className='show_mob'>Thu</span> <span className='wrap_arr'><img src={arrow} ref={this.arr7} className='arrows'/></span></p>
                      <p className='when_text common_txts gold_time'>9 am - 11 am</p>
                      <p className='when_text common_txts'>Business breakfast with CoinTelegraph. </p>
                      <p className='when_text common_txts gold_time'>12 pm - 4 pm</p>
                      <p className='when_text common_txts'>Digital Art Exposition</p>
                      <p className='when_text common_txts panel'>Panel: Banking in Metaverse.</p>
                      <p className='when_text common_txts'>Showcases: Pax world, GOGO, Adresta and Metablocks</p>
                      <p className='when_text common_txts panel'>Panel: NFT Valuation & Legal Considerations</p>
                      <p className='when_text common_txts gold_time'>7 pm - 2 am</p>
                      <p className='when_text common_txts'>Closing Party</p>
                      <p className='when_text common_txts'>Electro Space Out Party with Supersstar DJ Stil Taktvoll</p>
                      <p className='when_text common_txts'>NFT Auction Saphi</p>
                   </div>

                   <div className='common_events_blocks2 spec_block' ref={this.list6} onClick={this.openlist6}>
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
                           <p className='date1 date_spec'><span className='time_of'>20:00 - 22:00</span> <p style={{width: '367px'}} className='spec2'>Blockchain mass adoption.<p> Rebuild Ukraine with transparency</p></p></p>
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
                          <p className='date1' style={{width: '274px'}}>Deep dive into  the topic from experts. Trends for business use.</p>
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
                          <p className='date1'>Private event  <br/> at the F1 Race in Monaco.</p>
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
