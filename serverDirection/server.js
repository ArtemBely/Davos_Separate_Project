(()=>{"use strict";var e,t={330:(e,t,a)=>{var n=a(297),r=a.n(n),c=a(146),s=a(315),i=a.n(s),l=a(827),o=a.n(l),m=a(317),p=a.n(m),u=a(867),d=a.n(u),h=a(168),v=a.n(h);const f=require("react-loadable-visibility/loadable-components");var g=a.n(f),E=a(819),_=a.n(E),y=a(12),N=a.n(y);const w=a.p+"images/Logo.svg",b=a.p+"images/Subtract-2.svg",k=require("react-scroll");const S=function(e){p()(s,e);var t,a,n=(t=s,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=v()(t);if(a){var r=v()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return d()(this,e)});function s(){var e;return i()(this,s),e=n.call(this),N()(_()(e),"addClass",(function(){e.head.current.classList.toggle("active"),e.nan.current.classList.toggle("active")})),e.head=r().createRef(),e.nan=r().createRef(),e}return o()(s,[{key:"render",value:function(){return r().createElement("div",{className:"wrap__header",id:"wrap_header"},r().createElement("div",{className:"header"},r().createElement("div",{className:"navigation"},r().createElement(c.NavLink,{to:"/"},r().createElement("img",{src:w,id:"logo"})),r().createElement(c.NavLink,{to:"/",id:"mobileLogo"},r().createElement("img",{src:b})),r().createElement("div",{className:"header__burger",ref:this.head,onClick:this.addClass},r().createElement("span",null)),r().createElement("ul",{className:"navigation-list",ref:this.nan},r().createElement("li",{className:"navigation-item"},r().createElement(k.Link,{activeClass:"active",className:"navigation-link",to:"what_is",spy:!0,smooth:!0,hashSpy:!0,duration:700,isDynamic:!0,onClick:this.addClass,onSetActive:this.handleSetActive,onSetInactive:this.handleSetInactive,ignoreCancelEvents:!1},"What is EmTech")),r().createElement("li",{className:"navigation-item"},r().createElement(k.Link,{activeClass:"active",className:"navigation-link",to:"why_to",spy:!0,smooth:!0,hashSpy:!0,duration:700,isDynamic:!0,onClick:this.addClass,onSetActive:this.handleSetActive,onSetInactive:this.handleSetInactive,ignoreCancelEvents:!1},"Why to participate")),r().createElement("li",{className:"navigation-item"},r().createElement(k.Link,{activeClass:"active",className:"navigation-link",to:"link_speak",spy:!0,smooth:!0,hashSpy:!0,duration:700,isDynamic:!0,onClick:this.addClass,onSetActive:this.handleSetActive,onSetInactive:this.handleSetInactive,ignoreCancelEvents:!1},"Speakers")),r().createElement("li",{className:"navigation-item news_hide"},r().createElement(k.Link,{activeClass:"active",className:"navigation-link",to:"link_schedule",spy:!0,smooth:!0,hashSpy:!0,duration:700,isDynamic:!0,onClick:this.addClass,onSetActive:this.handleSetActive,onSetInactive:this.handleSetInactive,ignoreCancelEvents:!1},"Schedule")),r().createElement("li",{className:"navigation-item"},r().createElement(k.Link,{activeClass:"active",className:"navigation-link",to:"link_partners",spy:!0,smooth:!0,hashSpy:!0,duration:700,isDynamic:!0,onClick:this.addClass,onSetActive:this.handleSetActive,onSetInactive:this.handleSetInactive,ignoreCancelEvents:!1},"Partners")),r().createElement("li",{className:"navigation-item nav-login"},r().createElement(c.NavLink,{to:"#",className:"navigation-link",id:"login"},"Log in"))))))}}]),s}(r().Component),x=a.p+"images/mainScreen.png",C=a.p+"images/Rectangle 90.png";var I=a(482);const R=function(e){p()(c,e);var t,a,n=(t=c,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=v()(t);if(a){var r=v()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return d()(this,e)});function c(){var e;return i()(this,c),e=n.call(this),N()(_()(e),"popup",(function(){e.setState({isOpen4:!0})})),N()(_()(e),"popup2",(function(){e.setState({isOpen5:!0})})),e.state={isOpen4:!1,isOpen5:!1},e}return o()(c,[{key:"render",value:function(){var e=this;return r().createElement(r().Fragment,null,r().createElement("div",{className:"popup",style:{display:this.state.isOpen4?"block":"none"}},r().createElement("div",{className:"popup__body"},r().createElement("div",{className:"popup__content"},r().createElement("div",{className:"popup__header"},r().createElement("h2",{className:"popup-title"},"Become a partner"),r().createElement("img",{src:I.Z,className:"popup__close",onClick:function(){return e.setState({isOpen4:!1})}})),r().createElement("p",{className:"popup__main-paragraph"},"Fill out the form, our ",r().createElement("br",null),"manager will contact you"),r().createElement("form",{action:"/sendRequest",className:"popup__form",method:"POST"},r().createElement("input",{type:"text",name:"name",className:"popup__input",placeholder:"Name",required:!0}),r().createElement("input",{type:"text",name:"purpose",className:"popup__input",placeholder:"Purpose",required:!0}),r().createElement("input",{type:"text",name:"phone_number",className:"popup__input",placeholder:"Phone number",required:!0}),r().createElement("input",{type:"text",name:"email",className:"popup__input",placeholder:"Email",required:!0}),r().createElement("div",{className:"popup__footer"},r().createElement("button",{className:"popup__footer-btn"},"Send"),r().createElement("p",{className:"popup__footer-paragraph"},"By clicking on the «Send» button you ",r().createElement("br",null),"confirm your consent to the processing ",r().createElement("br",null),"of data and agree to the privacy policy")))))),r().createElement("div",{className:"popup2",style:{display:this.state.isOpen5?"block":"none"}},r().createElement("div",{className:"popup__body"},r().createElement("div",{className:"popup__content2"},r().createElement("div",{className:"popup__header"},r().createElement("h2",{className:"popup-title"},"Become a participant"),r().createElement("img",{src:I.Z,className:"popup__close",onClick:function(){return e.setState({isOpen5:!1})}})),r().createElement("p",{className:"popup__main-paragraph"},"Fill out the form, our ",r().createElement("br",null),"manager will contact you"),r().createElement("form",{action:"/sendRequest/participant",className:"popup__form",method:"POST"},r().createElement("input",{type:"text",name:"name",className:"popup__input",placeholder:"Company name",required:!0}),r().createElement("input",{type:"email",name:"purpose",className:"popup__input",placeholder:"Email",required:!0}),r().createElement("input",{type:"tel",name:"phone_number",className:"popup__input",placeholder:"Attachments",required:!0}),r().createElement("div",{className:"popup__footer"},r().createElement("button",{type:"submit",className:"popup__footer-btn"},"Send"),r().createElement("p",{className:"popup__footer-paragraph"},"By clicking on the «Send» button you ",r().createElement("br",null),"confirm your consent to the processing ",r().createElement("br",null),"of data and agree to the privacy policy")))))),r().createElement("div",{className:"blur"}),r().createElement("div",{className:"wrap__lead"},r().createElement("img",{src:x,alt:"main-image",className:"lead__image"}),r().createElement("div",{className:"wrap_rect"},r().createElement("img",{src:C}))),r().createElement("div",{className:"wrap_main_title"},r().createElement("div",{className:"main_title1"},r().createElement("div",{className:"lead__container"},r().createElement("img",{src:w,alt:"logo",className:"lead__logo"})),r().createElement("div",{className:"wrap__sections"},r().createElement("div",{className:"description"},r().createElement("p",{className:"description__title"},"The future is now"),r().createElement("p",{className:"description__paragraph"},"May 21-26, 2022"),r().createElement("p",{className:"description__paragraph"},"Davos, Switzerland")),r().createElement("p",{className:"become_a_partner partner1",onClick:this.popup},"Become a partner"),r().createElement("p",{className:"become_a_partner partic",onClick:this.popup2},"Become a participant")))))}}]),c}(r().Component),T=a.p+"images/image 12.png",q=function(){return r().createElement("div",{className:"wrap_emtech",id:"what_is"},r().createElement("div",{className:"emtech"},r().createElement("div",{className:"wrap_texts"},r().createElement("p",{className:"emtech_title"},"What is EmTech Invest Hub"),r().createElement("p",{className:"emtech_text"},"The EmTech Invest Hub is one of the most exclusive Annual Davos Events from Tech Leaders and Professional Investors for community and corporations. It combines top networking, hightech shows and impact investment deal flow.")),r().createElement("div",null,r().createElement("img",{src:T,style:{position:"absolute"},id:"steel1"}))))};var A=a(81);const P=a.p+"images/Group 4921.jpg",L=a.p+"images/Group 492 — копия 2.jpg",D=a.p+"images/Group 792.jpg",O=a.p+"images/Group 492_spec.jpg",j=function(){return r().createElement("div",{className:"wrap_when"},r().createElement("div",{className:"when",id:"why_to"},r().createElement("p",null),r().createElement("div",{className:"when1"},r().createElement("p",{className:"when_title"},"Where"),r().createElement("p",{className:"when_text text2"},"Promenade 63, Davos, Switzerland")),r().createElement("div",{className:"when2"},r().createElement("p",{className:"when_title"},"When"),r().createElement("p",{className:"when_text text2"},"May 21-26, 2022")),r().createElement("div",{className:"when3"},r().createElement("p",{className:"when_title"},"For whom"),r().createElement("p",{className:"when_text text3"},"for professional investors,  tech entrepreneurs, corporates and media")),r().createElement("p",null),r().createElement("div",{className:"when4"},r().createElement("p",{className:"when_title why1"},"Why to participate"),r().createElement("p",{className:"when_text why2"},"For the first time in Davos you’ll be able to become a part of a historical mixed reality event. EmTech Metaverse is opening its space for Davos guests. All correlated activities and special guests are appearing at the International EmTech Investment Forum at the Promenade 63. "),r().createElement("p",null),r().createElement("p",{className:"when_text why2"},"So central, no one missed it. So big, everyone talks about it. Be a part of the future. As the Future is Now.")),r().createElement("img",{src:A.Z,id:"oracles"}),r().createElement("img",{src:P,id:"oraclesPlanch"}),r().createElement("img",{src:L,id:"opaclesBigPhone"}),r().createElement("img",{src:O,id:"oracleSpec576"}),r().createElement("div",{id:"oraclesSmallPhone"},r().createElement("img",{src:D}))))},F=a.p+"images/image 20.jpg",M=a.p+"images/Rectangle 287.png",B=a.p+"images/Rectangle 294.png",G=function(){return r().createElement("div",{className:"wrap_team",style:{display:"none"}},r().createElement("div",{className:"team"},r().createElement("p",{id:"team1"},"Team"),r().createElement("div",null,r().createElement("p",{className:"each_speaker"},r().createElement("img",{src:M,className:"each_img_speak"})),r().createElement("p",{className:"each_speaker_name"},"Alena Yudina")),r().createElement("div",null,r().createElement("p",{className:"each_speaker"},r().createElement("img",{src:F,className:"each_img_speak"})),r().createElement("p",{className:"each_speaker_name"},"Natalia Pogonchenko")),r().createElement("div",null,r().createElement("p",{className:"each_speaker"}),r().createElement("p",{className:"each_speaker_name"},"Konstantin Negachev")),r().createElement("div",null,r().createElement("p",{className:"each_speaker"}),r().createElement("p",{className:"each_speaker_name"},"Katie Aarson")),r().createElement("div",{style:{display:"none"}},r().createElement("p",{className:"each_speaker"}),r().createElement("p",{className:"each_speaker_name"},"Vlatko Gigov")),r().createElement("div",null,r().createElement("p",{className:"each_speaker"}),r().createElement("p",{className:"each_speaker_name"},"Milton Guarderas")),r().createElement("div",null,r().createElement("p",{className:"each_speaker"},r().createElement("img",{src:B,className:"each_img_speak"})),r().createElement("p",{className:"each_speaker_name"},"Kirill Povetev")),r().createElement("div",null,r().createElement("p",{className:"each_speaker"}),r().createElement("p",{className:"each_speaker_name"},"Ekaterina Lymbourides"))))};var H=a(394);const z=a.p+"images/inst_ico.svg",Z=a.p+"images/facebook_ico.svg",W=a.p+"images/instagram.svg",U=a.p+"images/youtube.svg";const V=function(e){p()(c,e);var t,a,n=(t=c,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=v()(t);if(a){var r=v()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return d()(this,e)});function c(){return i()(this,c),n.apply(this,arguments)}return o()(c,[{key:"render",value:function(){return r().createElement("div",{className:"wrap__footer"},r().createElement("div",{itemScope:!0,itemType:"http://schema.org/Organization",className:"footer"},r().createElement("link",{itemProp:"url",href:"https://emtechinvest.com/"}),r().createElement("div",{className:"footer__logo"},r().createElement("img",{itemProp:"logo",src:w,className:"footer__logo-img"})),r().createElement("p",{className:"each_foot_link",id:"nav_links_foot1"},r().createElement(k.Link,{activeClass:"active",className:"footer_nav",to:"what_is",spy:!0,smooth:!0,hashSpy:!0,duration:700,isDynamic:!0,onSetActive:this.handleSetActive,onSetInactive:this.handleSetInactive,ignoreCancelEvents:!1},"What is EmTech")),r().createElement("p",{className:"each_foot_link",id:"nav_links_foot2"},r().createElement(k.Link,{activeClass:"active",className:"footer_nav",to:"why_to",spy:!0,smooth:!0,hashSpy:!0,duration:700,isDynamic:!0,onSetActive:this.handleSetActive,onSetInactive:this.handleSetInactive,ignoreCancelEvents:!1},"Why to participate")),r().createElement("p",{className:"each_foot_link",id:"nav_links_foot3"},r().createElement(k.Link,{activeClass:"active",className:"footer_nav",to:"link_speak",spy:!0,smooth:!0,hashSpy:!0,duration:700,isDynamic:!0,onSetActive:this.handleSetActive,onSetInactive:this.handleSetInactive,ignoreCancelEvents:!1},"Speakers")),r().createElement("p",{className:"each_foot_link",id:"nav_links_foot4"},r().createElement(k.Link,{activeClass:"active",className:"footer_nav",to:"link_schedule",spy:!0,smooth:!0,hashSpy:!0,duration:700,isDynamic:!0,onSetActive:this.handleSetActive,onSetInactive:this.handleSetInactive,ignoreCancelEvents:!1},"Schedule")),r().createElement("p",{className:"each_foot_link",id:"nav_links_foot5"},r().createElement(k.Link,{activeClass:"active",className:"footer_nav",to:"link_partners",spy:!0,smooth:!0,hashSpy:!0,duration:700,isDynamic:!0,onSetActive:this.handleSetActive,onSetInactive:this.handleSetInactive,ignoreCancelEvents:!1},"Partners")),r().createElement("a",{href:"tel:+41 79 269 53 60",itemProp:"telephone",className:"each_foot_link",id:"tel1"},"+41 79 269 53 60"),r().createElement("a",{href:"mailto:info@emtechassociation.com",itemProp:"email",className:"each_foot_link footer-link",id:"mailto"},"info@emtechassociation.com"),r().createElement("a",{href:"#",className:"each_foot_link hidden_policy"},"Privacy policy"),r().createElement("a",{href:"#",className:"each_foot_link hidden_policy"},"Refund and cancellation policy"),r().createElement("p",{className:"each_foot_link",id:"collab"},"In collaboration with ",r().createElement("span",{id:"bold_emtech"},"EmTech Metaverse")),r().createElement("a",{href:"https://emtechassociation.com/",itemProp:"name",className:"each_foot_link",id:"emtech2"},"International EmTech Investment Association"),r().createElement("a",{rel:"nofollow",href:"https://www.linkedin.com/events/6922285420902825984/about/",id:"lnkdin"},r().createElement("img",{src:z,className:"footer__link3-img"})),r().createElement("a",{rel:"nofollow",href:"https://www.facebook.com/Emtechinvest-109159918432447/?notif_id=1650919970525933&notif_t=page_user_activity&ref=notif",id:"fb1"},r().createElement("img",{src:Z,className:"footer__link3-img"})),r().createElement("a",{rel:"nofollow",href:"https://www.youtube.com/channel/UCDy7yH4NLFDsWvn3wS3kVYQ",id:"youtube"},r().createElement("img",{src:U,className:"footer__link3-img"})),r().createElement("a",{rel:"nofollow",href:"https://www.instagram.com/emtechinvest/",id:"insta1"},r().createElement("img",{src:W,className:"footer__link3-img"})),r().createElement("p",{className:"wrap_up"},r().createElement(k.Link,{activeClass:"active",className:"footer_nav",to:"wrap_header",spy:!0,smooth:!0,hashSpy:!0,duration:700,isDynamic:!0,onSetActive:this.handleSetActive,onSetInactive:this.handleSetInactive,ignoreCancelEvents:!1},r().createElement("img",{src:H.Z})))))}}]),c}(r().Component),K=a.p+"images/star-2.png";const Y=function(e){p()(c,e);var t,a,n=(t=c,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=v()(t);if(a){var r=v()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return d()(this,e)});function c(){var e;return i()(this,c),e=n.call(this),N()(_()(e),"openlist",(function(){e.arr1.current.classList.toggle("imgRotate"),e.finance.current.classList.toggle("show_finance")})),e.arr1=r().createRef(),e.list1=r().createRef(),e.finance=r().createRef(),e}return o()(c,[{key:"render",value:function(){return r().createElement("div",{className:"wrap_finance"},r().createElement("div",{className:"finance",ref:this.finance,onClick:this.openlist},r().createElement("p",{className:"wrap_star"},r().createElement("img",{src:K,id:"star"})),r().createElement("div",{className:"wrap_future"},r().createElement("p",{className:"future_title"},"Future of Finance"),r().createElement("p",{className:"low_title",id:"may25"},"May 25, Wednesday"),r().createElement("p",{className:"agendas",id:"for_i"},"For institutional and private investors only"),r().createElement("span",{className:"wrap_arr2"},r().createElement("img",{src:H.Z,ref:this.arr1,className:"arrows"}))),r().createElement("div",{className:"low_grids"},r().createElement("p",{className:"agendas",id:"ag"},"The EmTech Invest Hub traditionally hosts the Day for professional investors and traders. Together with International Financial entities we will discuss Monetary policies, Crypto as diversification factor for VCs and their integration in TradeFi."),r().createElement("p",{className:"agendas",id:"low_agenda"},"The event is for institutional and private investors.")),r().createElement("div",{className:"low_grids middle_grid",id:"lm"},r().createElement("p",{className:"panels2"},"AGENDA"),r().createElement("p",{className:"gold_time2"},"14:00 - 15:00"),r().createElement("p",{className:"agendas spec_agenda"},"Late Lunch & Networking"),r().createElement("p",{className:"gold_time2"},"15:00 - 15:15"),r().createElement("p",{className:"agendas spec_agenda"},"Keynote from the one\u2028 of the top Invest Funds")),r().createElement("div",{className:"low_grids3"},r().createElement("p",{className:"gold_time2"},r().createElement("span",{className:"panels2"},"PANELS")," 15:30 - 18:30 "),r().createElement("p",{className:"agendas agendas_panel"},"→ Are Cryptocurrencies\u2028 a good hedge against inflation?"),r().createElement("p",{className:"agendas agendas_panel"},"→ DLT, Crypto and Global Trade"),r().createElement("p",{className:"agendas agendas_panel"},"→ Monetary Rest Forecasts")),r().createElement("div",{className:"low_sponsors"})))}}]),c}(r().Component),X=a.p+"images/874528 1.jpg",Q=function(){return r().createElement("div",{className:"wrap_location"},r().createElement("div",{className:"location"},r().createElement("p",{className:"speaker0 loc0"},"Location"),r().createElement("p",{className:"map"},r().createElement("img",{src:X,id:"maps"})),r().createElement("p",{className:"address"},"Promenade 63, Davos Platz"),r().createElement("a",{rel:"nofollow",href:"https://g.page/exdavos?share",className:"address add_link"},"Open map")))},J=a.p+"images/Strategic_logo.png";var $=a(424),ee=a(42);const te=a.p+"images/Group 513.svg",ae=a.p+"images/Group 505.svg",ne=function(){return r().createElement(r().Fragment,null,r().createElement("div",{className:"strategic"},r().createElement("h3",{className:"strategic__title"},"Strategic partnerships"),r().createElement("div",{className:"wrap_str"},r().createElement("div",{className:"str"},r().createElement("div",{className:"strategic__contact",id:"alena1"},r().createElement("div",{className:"startegic__wrap"},r().createElement("img",{src:J,alt:"logo",className:"startegic__logo",id:"ql_logo"})),r().createElement("p",{className:"strategic__contact-name yudina"},"Alena Yudina"),r().createElement("p",{className:"strategic__contact-position"},"Managing Director"),r().createElement("p",{className:"strategic__contact-email"},r().createElement("span",{className:"info"},"E-mail"),"a.yudina@qlstrategy.ch"),r().createElement("p",{className:"strategic__contact-phone"},r().createElement("span",{className:"info"},"Mobile"),"+41 79 269 53 60")),r().createElement("div",{className:"strategic__contact vesnea2"},r().createElement("div",{className:"startegic__wrap"},r().createElement("img",{src:te,alt:"logo",className:"startegic__logo"})),r().createElement("p",{className:"strategic__contact-name vlatko"},"Vlatko Gigov"),r().createElement("p",{className:"strategic__contact-position"},"Executive Director"),r().createElement("p",{className:"strategic__contact-email"},r().createElement("span",{className:"info"},"E-mail"),"vlatko@vesnea.com"),r().createElement("p",{className:"strategic__contact-phone"},r().createElement("span",{className:"info"},"Mobile"),"+41 79 915 56 02")),r().createElement("div",{className:"strategic__contact milton_wrap"},r().createElement("div",{className:"startegic__wrap"},r().createElement("img",{src:ae,alt:"logo",className:"startegic__logo"})),r().createElement("p",{className:"strategic__contact-name milton"},"Milton Guarderas"),r().createElement("p",{className:"strategic__contact-position",id:"ceo"},"CEO"),r().createElement("p",{className:"strategic__contact-email"},r().createElement("span",{className:"info"},"E-mail"),"Investormilton@bridgingnetworks.com"),r().createElement("p",{className:"strategic__contact-phone",style:{display:"none"}},r().createElement("span",{className:"info"},"Mobile"),"+491 515 881 83 70")))),r().createElement("button",{className:"download__strategic"},r().createElement("div",{className:"download-wrap__strategic"},r().createElement("img",{className:"arrow-button__strategic",src:$.Z,alt:"Download"}),r().createElement("img",{className:"arrow-button__strategic2",src:ee.Z,alt:"Download"}),r().createElement("a",{href:"https://drive.google.com/file/d/1C1FsHMBhubfKq2IGAvwzvw8ewy3Xc5x6/view?usp=sharing",className:"strategic-donwload__text"},"Download presentation")))))};var re=g()((function(){return a.e(592).then(a.bind(a,592))}),{fallback:r().createElement("div",null,"Loading...")}),ce=g()((function(){return a.e(831).then(a.bind(a,831))}),{fallback:r().createElement("div",null,"Loading...")}),se=g()((function(){return a.e(888).then(a.bind(a,888))}),{fallback:r().createElement("div",null,"Loading...")}),ie=g()((function(){return a.e(191).then(a.bind(a,191))}),{fallback:r().createElement("div",null,"Loading...")});g()((function(){return a.e(889).then(a.bind(a,889))}),{fallback:r().createElement("div",null,"Loading...")});const le=function(e){p()(c,e);var t,a,n=(t=c,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=v()(t);if(a){var r=v()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return d()(this,e)});function c(){return i()(this,c),n.apply(this,arguments)}return o()(c,[{key:"render",value:function(){return r().createElement("div",{className:"wrap_davos"},r().createElement(S,null),r().createElement(R,null),r().createElement(q,null),r().createElement(j,null),r().createElement(ce,null),r().createElement(se,null),r().createElement(Y,null),r().createElement(ie,null),r().createElement(G,null),r().createElement(re,null),r().createElement(ne,null),r().createElement(Q,null),r().createElement(V,null))}}]),c}(r().Component);const oe=function(e){p()(c,e);var t,a,n=(t=c,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=v()(t);if(a){var r=v()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return d()(this,e)});function c(){return i()(this,c),n.apply(this,arguments)}return o()(c,[{key:"render",value:function(){return r().createElement("p",null,r().createElement("p",{className:"wrap_noMatch_header"},r().createElement(S,null)),r().createElement("p",{className:"wrap_alert"},r().createElement("p",{className:"oops"},"Sorry, but we can't find this page. Try going back to the  ",r().createElement("a",{href:"/",className:"main_page_return"},"home page")),r().createElement("p",{className:"mistake404"},"404")),r().createElement("p",{className:"wrap_noMatch_footer"},r().createElement(V,null)))}}]),c}(r().Component),me=[{path:"/",exact:!0,component:le},{component:oe}];const pe=function(e){p()(s,e);var t,a,n=(t=s,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=v()(t);if(a){var r=v()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return d()(this,e)});function s(){return i()(this,s),n.apply(this,arguments)}return o()(s,[{key:"render",value:function(){return r().createElement("div",{className:"main_wrap"},r().createElement(c.Switch,null,me.map((function(e,t){return r().createElement(c.Route,{key:1,path:e.path,exact:e.exact,component:e.component})}))))}}]),s}(r().Component);var ue=a(127),de=a.n(ue);const he=require("react-dom/server"),ve=require("cookie-parser");var fe=a.n(ve);const ge=require("body-parser");var Ee=a.n(ge);const _e=require("serialize-javascript");var ye=a.n(_e);const Ne=require("express-validator");var we=a.n(Ne);const be=require("express-session");var ke=a.n(be);require("mongoose");const Se=require("passport");var xe=a.n(Se);const Ce=require("connect-flash");var Ie=a.n(Ce);const Re=require("fs");var Te=a.n(Re);const qe=require("path");var Ae=a.n(qe);const Pe=require("http");var Le=a.n(Pe);const De=require("https");var Oe=a.n(De);const je=require("@babel/runtime/helpers/asyncToGenerator");var Fe=a.n(je);const Me=require("@babel/runtime/regenerator");var Be=a.n(Me);const Ge=require("nodemailer");var He=a.n(Ge),ze=a(127).Router();ze.post("/",(function(e,t,a){var n="\n<p> Данные о партнере </p>\n<ul>\n  <li> Name: ".concat(e.body.name," </li>\n  <li> Purpose: ").concat(e.body.purpose," </li>\n  <li> Number: ").concat(e.body.phone_number," </li>\n  <li> Email: ").concat(e.body.email," </li>\n</ul>\n  ");function r(){return(r=Fe()(Be().mark((function e(){var t,a;return Be().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=He().createTransport({host:"smtp.yandex.ru",port:465,secure:!0,auth:{user:"project1@acorn.ws",pass:"qwertyuiop987654321"},tls:{rejectUnauthorized:!1}}),e.next=3,t.sendMail({from:'"Order from site" <project1@acorn.ws>',to:"guests@emtechinvest.com",subject:"New partner ✔",text:"Hello world?",html:n});case 3:a=e.sent,console.log("Message sent: %s",a.messageId),console.log("Preview URL: %s",He().getTestMessageUrl(a));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){return r.apply(this,arguments)}().catch(console.error),t.redirect("/")})),ze.post("/participant",(function(e,t,a){var n="\n<p> Данные о партнере </p>\n<ul>\n  <li> Name: ".concat(e.body.name," </li>\n  <li> Purpose: ").concat(e.body.purpose," </li>\n  <li> Number: ").concat(e.body.phone_number," </li>\n</ul>\n  ");function r(){return(r=Fe()(Be().mark((function e(){var t,a;return Be().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=He().createTransport({host:"smtp.yandex.ru",port:465,secure:!0,auth:{user:"project1@acorn.ws",pass:"qwertyuiop987654321"},tls:{rejectUnauthorized:!1}}),e.next=3,t.sendMail({from:'"Order from site" <project1@acorn.ws>',to:"guests@emtechinvest.com",subject:"New participant ✔",text:"Hello world?",html:n});case 3:a=e.sent,console.log("Message sent: %s",a.messageId),console.log("Preview URL: %s",He().getTestMessageUrl(a));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){return r.apply(this,arguments)}().catch(console.error),t.redirect("/")}));const Ze=ze;var We=de()(),Ue={key:Te().readFileSync(Ae().resolve("src/server/ssl/emtechinvest.key")),cert:Te().readFileSync(Ae().resolve("src/server/ssl/emtechinvest.pem"))};a(201),We.use((function(e,t,a){t.setHeader("Cache-Control","no-cache, no-store, must-revalidate"),t.setHeader("Pragma","no-cache"),t.setHeader("Expires","0"),t.setHeader("Access-Control-Allow-Origin","*"),t.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization"),a()})),We.use(de().static("public")),We.use(Ee().json()),We.use(Ee().urlencoded({extended:!1})),We.use(de().urlencoded({extended:!1})),We.use(we()()),We.use(fe()()),We.use(ke()({secret:"mysecret",resave:!1,saveUnitialized:!1})),We.use(Ie()()),We.use(xe().initialize()),We.use(xe().session()),We.use("/sendRequest",Ze),We.get("/robots.txt",(function(e,t){var a=Ae().resolve("public/robots.txt");t.sendFile(a)})),We.get("/sitemap.xml",(function(e,t){var a=Ae().resolve("public/sitemap.xml");t.sendFile(a)})),We.get(["/","/sendRequest"],(function(e,t,a){var n=me.find((function(t){return(0,c.matchPath)(e.url,t)}))||{};(n.fetchInitialData?n.fetchInitialData(e.path):Promise.resolve()).then((function(a){var n={data:a},s=(0,he.renderToString)(r().createElement(c.StaticRouter,{location:e.url,context:n},r().createElement(pe,{data:a}))),i='<!DOCTYPE html>\n            <html>\n                <head>\n                  <title>International EmTech Investment Forum in Davos</title>\n                  <meta name="description" content="The International EmTech Investment Forum in Davos combines top networking, high tech shows and impact investment deal flow">\n                  <link rel="stylesheet" type="text/css" href="../main.css">\n                  <link rel="shortcut icon" href="/images/Subtract (1).ico" type="image/x-icon">\n                  <link rel="canonical" href="https://emtechinvest.com/">\n                    <meta name="viewport" content="width=device-width, initial-scale=1">\n\n                    <meta property="og:url" content="https://emtechinvest.com/">\n                    <meta property="og:type" content="website">\n                    <meta property="og:title" content="International EmTech Investment Forum in Davos">\n                    <meta property="og:description" content="The International EmTech Investment Forum in Davos combines top networking, high tech shows and impact investment deal flow">\n                    <meta property="og:image" content="https://emtechinvest.com/images/Group 300.svg">\n\n                    \x3c!-- Twitter Meta Tags --\x3e\n                    <meta name="twitter:card" content="summary_large_image">\n                    <meta property="twitter:domain" content="emtechinvest.com">\n                    <meta property="twitter:url" content="https://emtechinvest.com/">\n                    <meta name="twitter:title" content="International EmTech Investment Forum in Davos">\n                    <meta name="twitter:description" content="The International EmTech Investment Forum in Davos combines top networking, high tech shows and impact investment deal flow">\n                    <meta name="twitter:image" content="https://emtechinvest.com/images/Group 300.svg">\n\n                      <script src=\'bundles/bundle.js\' defer><\/script>\n                        <script>window.__INITIAL_DATA__= '.concat(ye()(a),"<\/script>\n\n                          \x3c!-- Global site tag (gtag.js) - Google Analytics --\x3e\n                          <script async src=\"https://www.googletagmanager.com/gtag/js?id=G-N6XLQ0TJ9H\"><\/script>\n                          <script>\n                          setTimeout(() => {\n                              window.dataLayer = window.dataLayer || [];\n                              function gtag(){dataLayer.push(arguments);}\n                              gtag('js', new Date());\n\n                              gtag('config', 'G-N6XLQ0TJ9H');\n                            }, 10000)\n                            <\/script>\n\n                          </head>\n                        <body>\n                       <div id=\"app\">\n                     ").concat(s,"\n                  </div>\n                </body>\n            </html>");return t.send(i)})).catch(a)})),We.get("/*",(function(e,t){var a=(0,he.renderToString)(r().createElement(c.StaticRouter,null,r().createElement(oe,null)));t.status(404).send('<!DOCTYPE html>\n        <html>\n            <head>\n              <title>International EmTech Investment Association</title>\n                   <link rel="stylesheet" type="text/css" href="../main.css">\n                     <link rel="shortcut icon" href="/images/Vector.ico" type="image/x-icon">\n                     <meta name="viewport" content="width=device-width, initial-scale=1">\n                  <script src=\'/bundle.js\' defer><\/script>\n            </head>\n            <body>\n                 <div id="app">\n                    <div className=\'main_wrap\'>\n                       '.concat(a,"\n                  </div>\n            </div>\n      </body>\n  </html>"))})),We.use((function(e,t,a){var n=new Error("Noooo");n.status=404,a(n)}));var Ve=Le().createServer(We),Ke=Oe().createServer(Ue,We);Ve.listen(8080,(function(){console.log("connected on http!")})),Ke.listen(443,(function(){console.log("connected on https!")}))},81:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"images/Group 492.jpg"},42:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"images/Vector (1).svg"},394:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"images/Vector 42.svg"},482:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"images/cross.svg"},424:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"images/download-arrow.svg"},819:e=>{e.exports=require("@babel/runtime/helpers/assertThisInitialized")},315:e=>{e.exports=require("@babel/runtime/helpers/classCallCheck")},827:e=>{e.exports=require("@babel/runtime/helpers/createClass")},12:e=>{e.exports=require("@babel/runtime/helpers/defineProperty")},168:e=>{e.exports=require("@babel/runtime/helpers/getPrototypeOf")},317:e=>{e.exports=require("@babel/runtime/helpers/inherits")},867:e=>{e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},346:e=>{e.exports=require("babel-regenerator-runtime")},201:e=>{e.exports=require("dotenv/config")},127:e=>{e.exports=require("express")},297:e=>{e.exports=require("react")},146:e=>{e.exports=require("react-router-dom")}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var c=a[e]={exports:{}};return t[e](c,c.exports,n),c.exports}n.m=t,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,a)=>(n.f[a](e,t),t)),[])),n.u=e=>"serverDirection/"+e+".server.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",e={179:1},n.f.require=(t,a)=>{e[t]||(t=>{var a=t.modules,r=t.ids,c=t.runtime;for(var s in a)n.o(a,s)&&(n.m[s]=a[s]);c&&c(n);for(var i=0;i<r.length;i++)e[r[i]]=1})(require("../"+n.u(t)))},n(346),n(330)})();