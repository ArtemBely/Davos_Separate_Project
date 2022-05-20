import React from 'react';
import close from '../../public/images/cross.svg';

class RegButton extends React.Component{

  constructor() {

    super()

    this.win = React.createRef();
  }



showMenu = () => {
  this.win.current.classList.add('bio_show');
}

closeBio = () => {
  this.win.current.classList.remove('bio_show');
}

  render() {

        return (
             <div className="wrap_buttons_reg">

               <div className='wrap_reg' ref={this.win}>
                  <div className='reg_window'>
                     <form action='/reg/send_request_to_participate' method='POST' className='reg_form1'>
                         <input type='email' name='email' placeholder='Email' className='email_inp' required />
                         <button type='submit' className='sub_button'>Registration</button>
                         <img src={close} onClick={this.closeBio} className='close_bio' id='spec_close2'/>
                     </form>
                  </div>
               </div>

                <div className='buttons_hub'>
                    <p className='hub_menu' onClick={this.showMenu}>Registration</p>
        				</div>
             </div>

        )
  }

}

export default RegButton;
