import React from 'react';
import arrow from '../../public/images/Vector 42.svg';
import banc from '../../public/images/Bancambios.png';
import al from '../../public/images/al quazimi.png';
import monetary from '../../public/images/photo_2022-03-02_20-20-06 1.png';

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
    this.list1.current.classList.toggle('dispGrid');
  }
  openlist2 = () => {
    this.arr2.current.classList.toggle('imgRotate');
    this.list2.current.classList.toggle('dispGrid');
  }
  openlist3 = () => {
    this.arr3.current.classList.toggle('imgRotate');
    this.list3.current.classList.toggle('dispGrid');
  }
  openlist4 = () => {
    this.arr4.current.classList.toggle('imgRotate');
    this.list4.current.classList.toggle('dispGrid');
  }
  openlist5 = () => {
    this.arr5.current.classList.toggle('imgRotate');
    this.list5.current.classList.toggle('dispGrid');
  }
  openlist6 = () => {
    this.arr6.current.classList.toggle('imgRotate');
    this.list6.current.classList.toggle('dispGrid');
  }
  openlist7 = () => {
    this.arr7.current.classList.toggle('imgRotate');
    this.list7.current.classList.toggle('dispGrid');
  }
  openlistExtra = () => {
    this.arrExtra.current.classList.toggle('imgRotate');
    this.listExtra.current.classList.toggle('dispGrid');
  }

  render() {
    return(
      <div className='wrap__schedule'>
          <div className='schedule'>
                <p className='title_schedule' id="link_schedule">Schedule</p>

                <div className='wrap_all_events'>


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

                </div>

          </div>
      </div>
   )
  }
}

export default Schedule;
