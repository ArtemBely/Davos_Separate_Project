import React from 'react';
import insider from "../../public/images/insider.svg";
import forbes from "../../public/images/forbes-logo 2.svg";

class Media extends React.Component{

  constructor() {

    super()


}

  render() {
    return (
      <div className='wrap_media'>
          <div className='media'>
              <p className="media_title">Media</p>
              <div className='wrap_media_brands'>
                  <img src={insider} className="imgs_brands"/>
                  <img src={forbes} className="imgs_brands"/>
                  <img src={insider} className="imgs_brands"/>
                  <img src={forbes} className="imgs_brands"/>
                  <img src={insider} className="imgs_brands"/>
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
