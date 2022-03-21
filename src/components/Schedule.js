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

    this.list1 = React.createRef();
    this.list2 = React.createRef();
    this.list3 = React.createRef();
    this.list4 = React.createRef();
    this.list5 = React.createRef();
    this.list6 = React.createRef();
    this.list7 = React.createRef();
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

  render() {
    return(
      <div className='wrap__schedule'>
          <div className='schedule'>
                <p className='title_schedule' id="link_schedule">Schedule</p>

                <div className='wrap_all_events'>


                    <div className='wrap_each_event'>
                        <p className='date'>May 21, Saturday</p>
                        <p className='date2'>Gala Opening Reception</p>
                        <p className='arr_sch'><img src={arrow} ref={this.arr1} onClick={this.openlist1}/></p>
                    </div>
                    <div className='wrap_list_event' ref={this.list1}>
                        <p className='first_col_of_events'>
                          <p className='date1'><span className='time_of'>18.00-22.00</span>
                          </p>
                          <p className='date1 date_spec'>Guests are invited to celebrate the unity of two worlds.</p>
                          <p className='apply_but'>Apply for masterclass</p>
                        </p>
                        <div className='second_col_of_events'>
                          <p className='date1'>A jazz concert, a dinner from a world-famous chef, a fireside chat. This time it will feel different.</p>
                          <p className='date1'>Augmented, virtual and mixed reality dimensions will garnish the evening. Invitation only, with strict RSVP.</p>
                        </div>
                    </div>

                    <div className='wrap_each_event'>
                        <p className='date'>May 22, Sunday</p>
                        <p className='date2'>Biohacking</p>
                        <p className='arr_sch'><img src={arrow} ref={this.arr2} onClick={this.openlist2}/></p>
                    </div>
                    <div className='wrap_list_event' ref={this.list2}>
                        <p className='first_col_of_events'>
                          <p className='date1 date_spec'><span className='time_of'>12:00-21:00</span>
                          <p> 300 years or older. What makes it possible? We will hear from leading experts.</p>
                          </p>
                        </p>
                        <div className='second_col_of_events'>
                          <p className='date1'>The day of Biohacking is co-hosted by our partners. Agenda on request.</p>
                        </div>
                    </div>

                    <div className='wrap_each_event'>
                        <p className='date'>May 23, Monday</p>
                        <p className='date2'>Insights of DeFi</p>
                        <p className='arr_sch'><img src={arrow} ref={this.arr3} onClick={this.openlist3}/></p>
                    </div>
                    <div className='wrap_list_event' ref={this.list3}>
                        <p className='first_col_of_events'>
                           <p className='date1 date_spec'><span className='time_of'>8:00 - 10:00</span>  <p>Decentralized trading for breakfast</p></p>
                           <p className='date1 date_spec'><span className='time_of'>12:00 - 14:30</span>  <p>Legal Gaps of DeFi. Solutions from top-lawyers</p></p>
                           <p className='date1 date_spec'><span className='time_of'>17:00 - 22:00</span> <p>Ecosystem leaders. Dive into Solana, Near, Harmony and Cardano and more</p></p>
                        </p>
                        <div className='second_col_of_events'>
                           <p className='date1'>In partneship with <img src={banc} id='banc'/></p>
                        </div>
                    </div>


                    <div className='wrap_each_event'>
                        <p className='date'>May 24, Tuesday</p>
                        <p className='date2'>Sustainability</p>
                        <p className='arr_sch'><img src={arrow} ref={this.arr4} onClick={this.openlist4}/></p>
                    </div>
                    <div className='wrap_list_event' ref={this.list4}>
                        <p className='first_col_of_events'>
                          <img src={al} id='al'/>
                        </p>
                        <div className='second_col_of_events'>
                          <p className='date1'>From green trends to corporate responsibilities.</p>
                          <p className='date1'>Smart cities from UAE to Eurasia. What makes the shift?</p>
                          <p className='date1'>Led by Governments and Intergovernmental bodies. The Agenda is to follow.</p>
                        </div>
                    </div>

                    <div className='wrap_each_event'>
                        <p className='date'>May 25, Wednesday</p>
                        <p className='date2'>Global Finance</p>
                        <p className='arr_sch'><img src={arrow} ref={this.arr5} onClick={this.openlist5}/></p>
                    </div>
                    <div className='wrap_list_event' ref={this.list5}>
                        <p className='first_col_of_events'>
                          <p className='date1'><span className='time_of'>8:00 - 10:00</span> <p>Media Business Breakfast</p></p>
                          <p className='date1'><span className='time_of'>12:00 - 15:00</span> <p>Future of crypto banking</p></p>
                        </p>
                        <div className='second_col_of_events'>
                          <p className='date1'><span className='time_of'>17:30 - 22:00</span> <p> Global Monetary Reset <img src={monetary} id='monetary'/></p></p>
                          <p className='date1'>The event is a «scenario-based» debate focused on the current state of Monetary Policy. Confirmed speaker from IMF.</p>
                        </div>
                    </div>

                    <div className='wrap_each_event'>
                        <p className='date'>May 26, Thursday</p>
                        <p className='date2'>NFTs under review</p>
                        <p className='arr_sch'><img src={arrow} ref={this.arr6} onClick={this.openlist6}/></p>
                    </div>
                    <div className='wrap_list_event' ref={this.list6}>
                        <p className='first_col_of_events' style={{opacity: 0}}>
                          <p className='date1'>Entertainment technologies are going hand by hand with NFT, collectibles,
                           IP rights challenges and high tech that makes our leisure time more exciting. Let’s dive into it!</p>
                          <p className='date1'>The weekend mood is guaranteed by the best DJs at the evening reception.</p>
                        </p>
                        <div className='second_col_of_events'>
                          <p className='date1'>Entertainment technologies are going hand by hand with NFT, collectibles,
                           IP rights challenges and high tech that makes our leisure time more exciting. Let’s dive into it!</p>
                          <p className='date1'>The weekend mood is guaranteed by the best DJs at the evening reception.</p>
                        </div>
                    </div>

                    <div className='wrap_each_event' id='last_event'>
                        <p className='date'>May 27-28, Friday</p>
                        <p className='date2'>Monaco for professional investors</p>
                        <p className='arr_sch'><img src={arrow} ref={this.arr7} onClick={this.openlist7}/></p>
                    </div>
                    <div className='wrap_list_event' id='list7' ref={this.list7}>
                        <p className='first_col_of_events' style={{opacity: 0}}>
                          <p className='date1'>Entertainment technologies are going hand by hand with NFT, collectibles,
                           IP rights challenges and high tech that makes our leisure time more exciting. Let’s dive into it!</p>
                          <p className='date1'>The weekend mood is guaranteed by the best DJs at the evening reception.</p>
                        </p>
                        <div className='second_col_of_events'>
                          <p className='date1'>Private event at the F1 Race in Monaco.</p>
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
