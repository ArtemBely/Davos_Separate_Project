import React from 'react';
import insider from "../../public/images/insider.svg";
import forbes from "../../public/images/forbes.svg";

class Media extends React.Component {

  constructor() {

    super()

    this.slide1 = React.createRef();
    this.slide2 = React.createRef();
    this.slide3 = React.createRef();
    this.slide4 = React.createRef();
    this.slide5 = React.createRef();
    this.move_right1 = React.createRef();
    this.move_right2 = React.createRef();
    this.move_right3 = React.createRef();
    this.move_right4 = React.createRef();
    this.move_right5 = React.createRef();
    this.wrap_move1 = React.createRef();
    this.wrap_move2 = React.createRef();
    this.wrap_move3 = React.createRef();
    this.wrap_move4 = React.createRef();
    this.wrap_move5 = React.createRef();
}

componentDidMount() {
  //window.addEventListener('load', () => {
    setInterval(() => {
      setTimeout(() => {
        this.showSlide2();
      }, 0);
      setTimeout(() => {
        this.showSlide3();
      }, 4000);
      setTimeout(() => {
        this.showSlide4();
      }, 8000);
      setTimeout(() => {
        this.showSlide5();
      }, 12000);
      setTimeout(() => {
        this.showSlide1();
      }, 16000);
    }, 20000);
  //});
}

showSlide1 = () => {

  document.querySelectorAll('.move_right').forEach(right => {
    if(right.classList.contains('move_right_start')) {
      right.classList.remove('move_right_start');
      right.classList.add('opaForRight');
    }
  });
  document.querySelectorAll('.wrap_move').forEach(move => {
    if(move.classList.contains('slide_color')) {
      move.classList.remove('slide_color');
      move.classList.add('opaForRight');
    }
  });
  this.wrap_move1.current.classList.add('slide_color');
  this.move_right1.current.classList.contains('opaForRight') ?
  this.move_right1.current.classList.remove('opaForRight') : null;
  this.move_right1.current.classList.add('move_right_start');
}

showSlide2 = () => {
  document.querySelectorAll('.move_right').forEach(right => {
    if(right.classList.contains('move_right_start')) {
      right.classList.remove('move_right_start');
      right.classList.add('opaForRight');
    }
  });
  document.querySelectorAll('.wrap_move').forEach(move => {
    if(move.classList.contains('slide_color')) {
      move.classList.remove('slide_color');
      move.classList.add('opaForRight');
    }
  });
  this.wrap_move2.current.classList.add('slide_color');
  this.move_right2.current.classList.contains('opaForRight') ?
  this.move_right2.current.classList.remove('opaForRight') : null;
  this.move_right2.current.classList.add('move_right_start');
}
showSlide3 = () => {
  document.querySelectorAll('.move_right').forEach(right => {
    if(right.classList.contains('move_right_start')) {
      right.classList.remove('move_right_start');
      right.classList.add('opaForRight');
    }
  });
  document.querySelectorAll('.wrap_move').forEach(move => {
    if(move.classList.contains('slide_color')) {
      move.classList.remove('slide_color');
      move.classList.add('opaForRight');
    }
  });
  this.wrap_move3.current.classList.add('slide_color');
  this.move_right3.current.classList.contains('opaForRight') ?
  this.move_right3.current.classList.remove('opaForRight') : null;
  this.move_right3.current.classList.add('move_right_start');
}
showSlide4 = () => {
  document.querySelectorAll('.move_right').forEach(right => {
    if(right.classList.contains('move_right_start')) {
      right.classList.remove('move_right_start');
      right.classList.add('opaForRight');
    }
  });
  document.querySelectorAll('.wrap_move').forEach(move => {
    if(move.classList.contains('slide_color')) {
      move.classList.remove('slide_color');
      move.classList.add('opaForRight');
    }
  });
  this.wrap_move4.current.classList.add('slide_color');
  this.move_right4.current.classList.contains('opaForRight') ?
  this.move_right4.current.classList.remove('opaForRight') : null;
  this.move_right4.current.classList.add('move_right_start');
}
showSlide5 = () => {
  document.querySelectorAll('.move_right').forEach(right => {
    if(right.classList.contains('move_right_start')) {
      right.classList.remove('move_right_start');
      right.classList.add('opaForRight');
    }
  });
  document.querySelectorAll('.wrap_move').forEach(move => {
    if(move.classList.contains('slide_color')) {
      move.classList.remove('slide_color');
      move.classList.add('opaForRight');
    }
  });
  this.wrap_move5.current.classList.add('slide_color');
  this.move_right5.current.classList.contains('opaForRight') ?
  this.move_right5.current.classList.remove('opaForRight') : null;
  this.move_right5.current.classList.add('move_right_start');
}

  render() {

    return (

      <div className='wrap_media'>

          <div className='media'>

                <div className="media_title">Media</div>

                              <div className='wrap_media_brands'>

                                  <div className='each_down_slide' onClick={this.showSlide1}><p className='wrap_imgs_brands'><img src={insider} className="imgs_brands"/></p>
                                        <div className='wrap_move' ref={this.wrap_move1}><p className='move_right' ref={this.move_right1}></p></div>
                                  </div>

                                  <div className='each_down_slide' onClick={this.showSlide2}><p className='wrap_imgs_brands'><img src={forbes} className="imgs_brands"/></p>
                                        <div className='wrap_move' ref={this.wrap_move2}><p className='move_right' ref={this.move_right2}></p></div>
                                  </div>

                                  <div className='each_down_slide' onClick={this.showSlide3}><p className='wrap_imgs_brands'><img src={insider} className="imgs_brands"/></p>
                                        <div className='wrap_move' ref={this.wrap_move3}><p className='move_right' ref={this.move_right3}></p></div>
                                  </div>

                                  <div className='each_down_slide' onClick={this.showSlide4}><p className='wrap_imgs_brands'><img src={forbes} className="imgs_brands"/></p>
                                        <div className='wrap_move' ref={this.wrap_move4}><p className='move_right' ref={this.move_right4}></p></div>
                                  </div>

                                  <div className='each_down_slide' onClick={this.showSlide5}><p className='wrap_imgs_brands'><img src={insider} className="imgs_brands"/></p>
                                        <div className='wrap_move' ref={this.wrap_move5}><p className='move_right' ref={this.move_right5}></p></div>
                                  </div>

                              </div>

                              <div className="brands_content">
                                 <p className="inside_title">Exercitationem ullam corporis suscipit</p>
                                 <p className="inside_content">
                                   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                   laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                   architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                   sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                   voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum numquam eius modi
                                   tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                 </p>
                                 <p className="full_art">Read full article</p>
                                 <p className="gold_inside_content">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit </p>
                              </div>

                       </div>

                </div>

          )
    }
}

export default Media;
