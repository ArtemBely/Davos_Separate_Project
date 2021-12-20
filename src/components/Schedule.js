import React from 'react';
import arrow from '../../public/images/Vector 42.svg';

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
                        <p className='date'>16 January, Sunday</p>
                        <p className='date2'>Executives for Youth</p>
                        <p className='arr_sch'><img src={arrow} ref={this.arr1} onClick={this.openlist1}/></p>
                    </div>
                    <div className='wrap_list_event' ref={this.list1}>
                        <p className='first_col_of_events'>
                          <p className='date1'>12.00-18.00 — Masterclasses</p>
                          <p className='date1'>18.00-21.00 — Networking reception</p>
                          <p className='date1 date_spec'>6 hours. 4 Executives. 4 groups of 10 Young leaders. Unique opportunity.</p>
                          <p className='apply_but'>Apply for masterclass</p>
                        </p>
                        <div className='second_col_of_events'>
                          <p className='date1'>Masterclasses from Masterminds: business, growth and achievements.</p>
                          <p className='date1'>This event starts the same way as new generations start the epoch.</p>
                          <p className='date1'>The best investment in the future generation is education. The best education is out of practice and experience.
                           The best practice and experience brings success!</p>
                          <p className='date1'>For aspiring young leaders under 35 years old. The masterclass is available in VR format.</p>
                          <p className='date1'>We are welcoming empowerment foundations and entities to join us for this session.</p>
                          <p className='date1'> Masterclass will be followed by a networking reception.</p>
                        </div>
                    </div>

                    <div className='wrap_each_event'>
                        <p className='date'>17 January, Monday</p>
                        <p className='date2'>Technologies of the Future</p>
                        <p className='arr_sch'><img src={arrow} ref={this.arr2} onClick={this.openlist2}/></p>
                    </div>
                    <div className='wrap_list_event' ref={this.list2}>
                        <p className='first_col_of_events'>
                          <p className='date1'>9:00-11:00 — Business Breakfast</p>
                          <p className='date1 date_spec'>14:00-16:00 — Startup Pitch competition /
                           trends of AI show / presentation of Robotics</p>
                          <p className='date1'>16:00-17:30 — Media Hub</p>
                          <p className='date1'>19:00-22:00 — Evening Reception</p>
                        </p>
                        <div className='second_col_of_events'>
                          <p className='date1'>The opening night is dedicated to the technologies of the future.</p>
                          <p className='date1'>This is a show-and-tell powered by truly impactful innovations.</p>
                          <p className='date1'>The Gala Reception is accompanied by the most impressive technologies that everyone can touch, feel, and use.</p>
                          <p className='date1'>Come along and experience it for yourself!</p>
                        </div>
                    </div>

                    <div className='wrap_each_event'>
                        <p className='date'>18 January, Tuesday</p>
                        <p className='date2'>Beyond Blockchain</p>
                        <p className='arr_sch'><img src={arrow} ref={this.arr3} onClick={this.openlist3}/></p>
                    </div>
                    <div className='wrap_list_event' ref={this.list3}>
                        <p className='first_col_of_events' style={{opacity: 0}}>
                          <p className='date1'>The future of decentralization. What comes next?</p>
                          <p className='date1'>We delve deep into the discussion about what’s next for the crypto scene
                          and provide unfiltered thoughts and questions like…</p>
                          <p className='date1'>What would blockchain mass adoption look like?</p>
                          <p className='date1'>Are digital collectibles - which are backed by NFTs -  redefining art space?</p>
                        </p>
                        <div className='second_col_of_events'>
                          <p className='date1'>The future of decentralization. What comes next?</p>
                          <p className='date1'>We delve deep into the discussion about what’s next for the crypto scene
                          and provide unfiltered thoughts and questions like…</p>
                          <p className='date1'>What would blockchain mass adoption look like?</p>
                          <p className='date1'>Are digital collectibles - which are backed by NFTs -  redefining art space?</p>
                          <p className='date1'>How does regulation in this field adjust?</p>
                          <p className='date1'>Future-proof innovations side by side with governmental bodies to lighten the topic.</p>
                        </div>
                    </div>


                    <div className='wrap_each_event'>
                        <p className='date'>19 January, Wednesday</p>
                        <p className='date2'>Other Worlds</p>
                        <p className='arr_sch'><img src={arrow} ref={this.arr4} onClick={this.openlist4}/></p>
                    </div>
                    <div className='wrap_list_event' ref={this.list4}>
                        <p className='first_col_of_events' style={{opacity: 0}}>
                          <p className='date1'>The future of decentralization. What comes next?</p>
                          <p className='date1'>We delve deep into the discussion about what’s next for the crypto scene
                          and provide unfiltered thoughts and questions like…</p>
                          <p className='date1'>What would blockchain mass adoption look like?</p>
                          <p className='date1'>Are digital collectibles - which are backed by NFTs -  redefining art space?</p>
                        </p>
                        <div className='second_col_of_events'>
                          <p className='date1'>Alternative realities.</p>
                          <p className='date1'>Look around and discover yourselves in the middle of augmented and virtual realities, metaverse,
                           digital immortality that are already a part of our world.</p>
                          <p className='date1'>We create synergies across the future worlds.</p>
                          <p className='date1'>We open the space at Davos for everyone so we can truly be without borders.</p>
                        </div>
                    </div>

                    <div className='wrap_each_event'>
                        <p className='date'>20 January, Thursday</p>
                        <p className='date2'>150 Years Old</p>
                        <p className='arr_sch'><img src={arrow} ref={this.arr5} onClick={this.openlist5}/></p>
                    </div>
                    <div className='wrap_list_event' ref={this.list5}>
                        <p className='first_col_of_events' style={{opacity: 0}}>
                          <p className='date1'>The future of decentralization. What comes next?</p>
                          <p className='date1'>We delve deep into the discussion about what’s next for the crypto scene
                          and provide unfiltered thoughts and questions like…</p>
                          <p className='date1'>What would blockchain mass adoption look like?</p>
                          <p className='date1'>Are digital collectibles - which are backed by NFTs -  redefining art space?</p>
                        </p>
                        <div className='second_col_of_events'>
                          <p className='date1'>Longevity comes from science.</p>
                          <p className='date1'>150 years old is not a dream but our future.</p>
                          <p className='date1'>Med-, Health- and Bio- Tech will be our focus with more to show and learn from.</p>
                          <p className='date1'>It will include the best Innovations for human well-being.</p>
                        </div>
                    </div>

                    <div className='wrap_each_event'>
                        <p className='date'>21 January, Friday</p>
                        <p className='date2'>Art Class</p>
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

                    <div className='wrap_each_event'>
                        <p className='date'>22-23 January, Sunday</p>
                        <p className='date2'>Ski and Spa</p>
                        <p className='arr_sch'><img src={arrow} ref={this.arr7} onClick={this.openlist7}/></p>
                    </div>
                    <div className='wrap_list_event' id='list7' ref={this.list7}>
                        <p className='first_col_of_events' style={{opacity: 0}}>
                          <p className='date1'>Entertainment technologies are going hand by hand with NFT, collectibles,
                           IP rights challenges and high tech that makes our leisure time more exciting. Let’s dive into it!</p>
                          <p className='date1'>The weekend mood is guaranteed by the best DJs at the evening reception.</p>
                        </p>
                        <div className='second_col_of_events'>
                          <p className='date1'>There’s an enormous amount of research and investment going into sports,
                           winter sports including. Are you an avid skier, snowboarding fan or do you seek to conquer the highest peaks,
                            powering your ascents with data? Then join us on this journey.</p>
                          <p className='date1'>The weekend mood is guaranteed by the best DJs at the evening reception.</p>
                        </div>
                    </div>

                </div>

          </div>
      </div>
   )
  }
}

export default Schedule;
