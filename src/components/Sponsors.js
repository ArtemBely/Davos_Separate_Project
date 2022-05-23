import React from 'react';
import oracles from '../../public/images/Group 492.jpg';
import quest from '../../public/images/Group 584.png';
import max from '../../public/images/Maxime N.Nassour.png';
import emi from '../../public/images/Emi Lorincz.png';
import kris from '../../public/images/Kristina Lucrezia Cornèr.png';
import caroline from '../../public/images/Caroline Taylor.png';
import al from '../../public/images/Alena Udina.png';
import bak from '../../public/images/Georg Bak.png';
import bundi from '../../public/images/David Bundi.png';
import dustin from '../../public/images/Dustin Plantholt.png';
import dobrauz from '../../public/images/Guenther Dobrauz.png';
import mark from '../../public/images/Jean Marc Seigneur.png';
import zhang from '../../public/images/James Zhang.png';
import ernst from '../../public/images/Ekkehard Ernst.png';
import arys from '../../public/images/Thierry Arys Ruiz.png';
import noorani from '../../public/images/Adnan Al Noorani.png';
import leonova from '../../public/images/Dr. Leonova.png';
import zahn from '../../public/images/Philipp Zahn.png';
import ammer from '../../public/images/Victor Ammer (1) 1.png';
import marina from '../../public/images/Marina Markezic.png';
import garry from '../../public/images/Garry Krugljakow.png';
import flückiger from '../../public/images/LeonieFlückiger.png';
import yuan from '../../public/images/Yu Yuan.png';
import ramesh from '../../public/images/Ramesh Ramadoss.png';
import john from '../../public/images/John deVadoss.png';
import oliver from '../../public/images/Oliver Mag Gingrich.png';
import olga from '../../public/images/Olga Cooper.png';
import frank from '../../public/images/Frank Fitzgerald.png';
import dietz from '../../public/images/Joel Dietz.png';
import pinna from '../../public/images/Daniele Pinna.png';
import nov from '../../public/images/vln.png';
import lar from '../../public/images/Victor Larionov.png';
import kumardev from '../../public/images/Kumardev Chatterjee.png';
import florian from '../../public/images/Florian Ducommun.png';
import anna from '../../public/images/Anna Tutova.png';
import ahmed from '../../public/images/Sheraz Ahmed.png';
import palma from '../../public/images/Giovanni Palma.png';
import pavlov from '../../public/images/Alexey Pavlov.png';
import senn from '../../public/images/Benjamin Senn.png';
import bud from '../../public/images/Dyma Budorin.png';
import fed from '../../public/images/Federica Palma.png';
import jasmin from '../../public/images/Jasmin Karatas.png';
import oskar from '../../public/images/Oscar L. Andrade.png';
import fazel from '../../public/images/alexander Fazel.png';
import fazel2 from '../../public/images/cyrus fazel.png';
import wyss from '../../public/images/Matthias Wyss.png';
import megha from '../../public/images/Megha Shrestha.png';
import kehoe from '../../public/images/Shane Kehoe.png';
import ming from '../../public/images/Cedric Ming.png';
import leyla from '../../public/images/Leyla Baghirzade.png';
import ibAlk from '../../public/images/IbrahimAlk.png';
import takh from '../../public/images/Takhmina Nasimova.png';
import illul from '../../public/images/Joshua Ellul.png';
import close from '../../public/images/cross.svg';
import lev from '../../public/images/l.png';
import kaal from '../../public/images/kaal.png';
import ber from '../../public/images/ber.png';
import nophoto from '../../public/images/No Photo.png';
import vovchok from '../../public/images/vovchok.png';
import jsu from '../../public/images/jsu.png';
import drmak from '../../public/images/drmak.png';
import ingo from '../../public/images/ingo.png';
import feld from '../../public/images/feld.png';
import ralf from '../../public/images/ralf.png'

import { Cooper } from '../../public/bio/cooper';
import { Leonova } from '../../public/bio/leonova';
import { Arys } from '../../public/bio/arys';
import { Ernst } from '../../public/bio/ernst';
import { Lorinz } from '../../public/bio/lorinz';
import { Zhang } from '../../public/bio/zhang';
import { Seigneur } from '../../public/bio/seigneur';
import { Dobrauz } from '../../public/bio/dobrauz';
import { Plantholt } from '../../public/bio/plantholt';
import { Megha } from '../../public/bio/megha';
import { Ramesh } from '../../public/bio/ramesh';
import { Yuan } from '../../public/bio/yuan';
import { DeVadoss } from '../../public/bio/deVadoss';
import { Ellul } from '../../public/bio/ellul';
import { Corner } from '../../public/bio/corner';
import { Garry } from '../../public/bio/garry';
import { Mag } from '../../public/bio/mag';
import { Fitz } from '../../public/bio/fitz';
import { Ming } from '../../public/bio/ming';
import { Taylor } from '../../public/bio/taylor';
import { Bundi } from '../../public/bio/bundi';
import { Pinna } from '../../public/bio/pinna';
import { Florian } from '../../public/bio/florian';
import { Ahmed } from '../../public/bio/ahmed';
import { Fazel } from '../../public/bio/fazel';
import { Kehoe } from '../../public/bio/kehoe';
import { Cfazel } from '../../public/bio/cfazel';
import { Budorin } from '../../public/bio/budorin';
import { Palma } from '../../public/bio/palma';
import { Leyla } from '../../public/bio/leyla';
import { Agra } from '../../public/bio/agra';
import { Martin } from '../../public/bio/martin';
import { Mata } from '../../public/bio/mata';
import { Brian } from '../../public/bio/brian';
import { Poretti } from '../../public/bio/poretti';
import { Lago } from '../../public/bio/lago';


class Sponsors extends React.Component {

  constructor() {

    super()

    this.state = {
      name,
      bio: ''
    }

    this.bioRef = React.createRef();
  }

  eachSpeaker = () => {
    return(
      <div className='block_inside'>
          <p className='name_in_bio'>{this.state.name}</p>
          <p className='bio_inside'>{this.state.bio}</p>
      </div>
    )
  }

  closeBio = () => {
    this.setState({ name: '', bio: '' });
    this.bioRef.current.classList.remove('bio_show');
  }

    render() {

      return (
          <div className="wrap_sponsors" id='link_speak'>

          <div className='wrap_bio' ref={this.bioRef}>
                <div className='bio_block'>
                      <img src={close} onClick={this.closeBio} className='close_bio'/>
                      {this.eachSpeaker()}
                </div>
          </div>

                <div className="sponsors">
                    <div className='wrap_each_speaker0'>
                       <p className='speaker0'>Speakers</p>
                       <p className='speaker_text'>Will be announced soon</p>
                    </div>
                    <div className='wrap_each_speaker'>
                    <div className='each_speaker del1'>
                            <p className='wrap_photo_sponsor'><img src={noorani} className='each_quest' id='noorani'/></p>
                            <p className='name_of_speaker'>Adnan Al Noorani</p>
                            <p className='descr_of_speaker'>Founder of the Future Innovation Summit
                             and the Chairman of the Board of the Private Office of
                             Sheikh Saqer Bin Mohamed Al Qasimi and Group of Companies</p>
                     </div>
                       <div className='each_speaker'>
                              <p className='wrap_photo_sponsor'><img src={zahn} className='each_quest'/></p>
                              <p className='name_of_speaker'>Philipp Zahn</p>
                              <p className='descr_of_speaker'>Lecturer at University of St. Gallen - HSG</p>
                       </div>
                       <div className='each_speaker'>
                              <p className='wrap_photo_sponsor'><img src={ammer} className='each_quest'/></p>
                              <p className='name_of_speaker'>Victor Ammer</p>
                              <p className='descr_of_speaker'>CEO of Trustody</p>
                       </div>
                       <div className='each_speaker del1'>
                              <p className='wrap_photo_sponsor'><img src={wyss} className='each_quest'/></p>
                              <p className='name_of_speaker'>Matthias Wyss</p>
                              <p className='descr_of_speaker'>CEO of Pax.World</p>
                      </div>
                      <div className='each_speaker del1'>
                              <p className='wrap_photo_sponsor'><img src={max} className='each_quest'/></p>
                              <p className='name_of_speaker'>Maxime N.Nassour</p>
                              <p className='descr_of_speaker'>Co-Founder & CEO of Saphi international Holding Corp.</p>
                       </div>
                       <div className='each_speaker'>
                              <p className='wrap_photo_sponsor'><img src={marina} className='each_quest'/></p>
                              <p className='name_of_speaker'>Marina Markezic</p>
                              <p className='descr_of_speaker'>Co-Founder of European Crypto Initiative</p>
                       </div>
                       <div className='each_speaker del1' onClick={() => {
                                 this.setState({ name: "Garry Krugljakow",
                                                 bio: <Garry />
                                 });
                                 this.bioRef.current.classList.add('bio_show');
                           }}>
                              <p className='wrap_photo_sponsor'><img src={garry} className='each_quest'/></p>
                              <p className='name_of_speaker'>Garry Krugljakow</p>
                              <p className='descr_of_speaker'>Founder of 0VIX, Gogo Protocol</p>
                       </div>
                       <div className='each_speaker del1'>
                              <p className='wrap_photo_sponsor'><img src={oskar} className='each_quest'/></p>
                              <p className='name_of_speaker'>Oscar L. Andrade</p>
                              <p className='descr_of_speaker'>CEO and Founder of Bancambios</p>
                      </div>
                      <div className='each_speaker del1' onClick={() => {
                                this.setState({ name: "Emi Lorincz",
                                                bio: <Lorinz />
                                });
                                this.bioRef.current.classList.add('bio_show');
                          }}>
                              <p className='wrap_photo_sponsor'><img src={emi} className='each_quest' id='emi'/></p>
                              <p className='name_of_speaker'>Emi Lorincz</p>
                              <p className='descr_of_speaker'>Director of Sales and Business Development in LEDGER</p>
                       </div>
                       <div className='each_speaker del1' onClick={() => {
                                 this.setState({ name: "Kristina Lucrezia Cornèr",
                                                 bio: <Corner />
                                 });
                                 this.bioRef.current.classList.add('bio_show');
                           }}>
                               <p className='wrap_photo_sponsor'><img src={kris} className='each_quest' id='kris'/></p>
                               <p className='name_of_speaker'>Kristina Lucrezia Cornèr</p>
                               <p className='descr_of_speaker'>The Editor-in-Chief of Cointelegraph</p>
                        </div>
                        <div className='each_speaker del1'>
                                <p className='wrap_photo_sponsor'><img src={al} className='each_quest' id='alena'/></p>
                                <p className='name_of_speaker'>Alena Yudina</p>
                                <p className='descr_of_speaker'>Managing director of Quantum Leap Strategy AG, Host of the EmTech Invest Hub</p>
                         </div>
                         <div className='each_speaker del1'>
                                 <p className='wrap_photo_sponsor'><img src={palma} className='each_quest'/></p>
                                 <p className='name_of_speaker'>Giovanni Palma</p>
                                 <p className='descr_of_speaker'>Founder of MDH Hologram</p>
                          </div>
                         <div className='each_speaker del1' onClick={() => {
                                   this.setState({ name: "Federica Palma",
                                                   bio: <Palma />
                                   });
                                   this.bioRef.current.classList.add('bio_show');
                             }}>
                                 <p className='wrap_photo_sponsor'><img src={fed} className='each_quest'/></p>
                                 <p className='name_of_speaker'>Federica Palma</p>
                                 <p className='descr_of_speaker'>Director Studio Tangram srl</p>
                         </div>
                         <div className='each_speaker del1' onClick={() => {
                                   this.setState({ name: "Olga Cooper",
                                                   bio: <Cooper />
                                   });
                                   this.bioRef.current.classList.add('bio_show');
                             }}>
                                      <p className='wrap_photo_sponsor'><img src={olga} className='each_quest' id='olga'/></p>
                                      <p className='name_of_speaker'>Olga Cooper</p>
                                      <p className='descr_of_speaker'>Marketing and Business Development Director at MDH Hologram Ltd.</p>
                               </div>
                               <div className='each_speaker del1' onClick={() => {
                                         this.setState({ name: "Oliver Mag Gingrich",
                                                         bio: <Mag />
                                         });
                                         this.bioRef.current.classList.add('bio_show');
                                   }}>
                                               <p className='wrap_photo_sponsor'><img src={oliver} className='each_quest' id='oliver'/></p>
                                               <p className='name_of_speaker'>Oliver Mag Gingrich</p>
                                               <p className='descr_of_speaker'>Creative Director of MDH Hologram Ltd.</p>
                              </div>

                            <div className='each_speaker del1'>
                                    <p className='wrap_photo_sponsor'><img src={flückiger} className='each_quest' id='leonie'/></p>
                                    <p className='name_of_speaker'>Leonie Flückiger</p>
                                    <p className='descr_of_speaker'>Co-Founder of Adresta AG</p>
                             </div>
                             <div className='each_speaker del1' onClick={() => {
                                       this.setState({ name: "Yu Yuan",
                                                       bio: <Yuan />
                                       });
                                       this.bioRef.current.classList.add('bio_show');
                                 }}>
                                     <p className='wrap_photo_sponsor'><img src={yuan} className='each_quest' id='yuan'/></p>
                                     <p className='name_of_speaker'>Yu Yuan</p>
                                     <p className='descr_of_speaker'>President-Elect of IEEE Standards Association</p>
                              </div>
                              <div className='each_speaker del1' onClick={() => {
                                        this.setState({ name: "David Bundi",
                                                        bio: <Bundi />
                                        });
                                        this.bioRef.current.classList.add('bio_show');
                                  }}>
                                      <p className='wrap_photo_sponsor'><img src={bundi} className='each_quest' id='bundi'/></p>
                                      <p className='name_of_speaker'>David Bundi</p>
                                      <p className='descr_of_speaker'>Co-Founder and President of MetaverseTalks</p>
                               </div>

                               <div className='each_speaker del1' onClick={() => {
                                         this.setState({ name: "Dr. Yana Leonova",
                                                         bio: <Leonova />
                                         });
                                         this.bioRef.current.classList.add('bio_show');
                                   }}>
                                       <p className='wrap_photo_sponsor'><img src={leonova} className='each_quest' id='leonova'/></p>
                                       <p className='name_of_speaker'>Dr. Yana Leonova</p>
                                       <p className='descr_of_speaker'>A Deputy GM and a Head of Innovation and
                                                      Technology in the Private Office of HH Sheikh Saqer al Qasimi</p>
                                </div>

                                 <div className='each_speaker del1' onClick={() => {
                                           this.setState({ name: "Thierry Arys Ruiz",
                                                           bio: <Arys />
                                           });
                                           this.bioRef.current.classList.add('bio_show');
                                     }}>
                                         <p className='wrap_photo_sponsor'><img src={arys} className='each_quest' id='arys'/></p>
                                         <p className='name_of_speaker'>Thierry Arys Ruiz</p>
                                         <p className='descr_of_speaker'>Chairman & CEO, AgAu AG,
                                                        Founder of Tarco Think Tank</p>
                                  </div>
                                  <div className='each_speaker del1' onClick={() => {
                                            this.setState({ name: "Ekkehard Ernst",
                                                            bio: <Ernst />
                                            });
                                            this.bioRef.current.classList.add('bio_show');
                                      }}>
                                          <p className='wrap_photo_sponsor'><img src={ernst} className='each_quest'/></p>
                                          <p className='name_of_speaker'>Ekkehard Ernst</p>
                                          <p className='descr_of_speaker'>AI specialist at ILO,
                                                        President of Geneva Macro Labs & Future of Work</p>
                                   </div>
                                   <div className='each_speaker del1' onClick={() => {
                                             this.setState({ name: "James Zhang",
                                                             bio: <Zhang />
                                             });
                                             this.bioRef.current.classList.add('bio_show');
                                       }}>
                                           <p className='wrap_photo_sponsor'><img src={zhang} className='each_quest'/></p>
                                           <p className='name_of_speaker'>James Zhang</p>
                                           <p className='descr_of_speaker'>Senior Director,
                                                        Investment & Enterprise,
                                                        UNCTAD</p>
                                    </div>
                                    <div className='each_speaker del1' onClick={() => {
                                              this.setState({ name: "Jean Marc Seigneur",
                                                              bio: <Seigneur />
                                              });
                                              this.bioRef.current.classList.add('bio_show');
                                        }}>
                                            <p className='wrap_photo_sponsor'><img src={mark} className='each_quest' id='mark'/></p>
                                            <p className='name_of_speaker'>Jean Marc Seigneur</p>
                                            <p className='descr_of_speaker'>Director CAS DLT & Blockchain,
                                                        University of Geneva,
                                                        Academic Member at ITU</p>
                                     </div>
                                     <div className='each_speaker del1' onClick={() => {
                                               this.setState({ name: "Guenther Dobrauz",
                                                               bio: <Dobrauz />
                                               });
                                               this.bioRef.current.classList.add('bio_show');
                                         }}>
                                             <p className='wrap_photo_sponsor'><img src={dobrauz} className='each_quest' id='dobrauz'/></p>
                                             <p className='name_of_speaker'>Guenther Dobrauz</p>
                                             <p className='descr_of_speaker'>Partner & Leader PwC Legal Switzerland</p>
                                      </div>
                                      <div className='each_speaker del1' onClick={() => {
                                                this.setState({ name: "Dustin Plantholt",
                                                                bio: <Plantholt />
                                                });
                                                this.bioRef.current.classList.add('bio_show');
                                          }}>
                                              <p className='wrap_photo_sponsor'><img src={dustin} className='each_quest'/></p>
                                              <p className='name_of_speaker'>Dustin Plantholt</p>
                                              <p className='descr_of_speaker'>Forbes Monaco Editor “Crypto” & Founder of Crypterns.com</p>
                                       </div>
                                       <div className='each_speaker del1' style={{display: "none"}}>
                                               <p className='wrap_photo_sponsor'><img src={quest} className='each_quest'/></p>
                                               <p className='name_of_speaker'>Sheila Warren</p>
                                               <p className='descr_of_speaker'></p>
                                        </div>
                                        <div className='each_speaker del1' onClick={() => {
                                                  this.setState({ name: "Ramesh Ramadoss",
                                                                  bio: <Ramesh />
                                                  });
                                                  this.bioRef.current.classList.add('bio_show');
                                            }}>
                                                <p className='wrap_photo_sponsor'><img src={ramesh} className='each_quest'/></p>
                                                <p className='name_of_speaker'>Ramesh Ramadoss</p>
                                                <p className='descr_of_speaker'> Co-chair of IEEE Blockchain Initiative</p>
                                         </div>
                                         <div className='each_speaker del1' onClick={() => {
                                                   this.setState({ name: "John deVadoss",
                                                                   bio: <DeVadoss />
                                                   });
                                                   this.bioRef.current.classList.add('bio_show');
                                             }}>
                                                 <p className='wrap_photo_sponsor'><img src={john} className='each_quest'/></p>
                                                 <p className='name_of_speaker'>John deVadoss</p>
                                                 <p className='descr_of_speaker'>Board Member of Global Business Blockchain Council</p>
                                  </div>
                                  <div className='each_speaker del1' onClick={() => {
                                            this.setState({ name: "Frank Fitzgerald",
                                                            bio: <Fitz />
                                            });
                                            this.bioRef.current.classList.add('bio_show');
                                      }}>
                                          <p className='wrap_photo_sponsor'><img src={frank} className='each_quest'/></p>
                                          <p className='name_of_speaker'>Frank Fitzgerald</p>
                                          <p className='descr_of_speaker'>Founder of Pax.World</p>
                               </div>
                               <div className='each_speaker del1'>
                                       <p className='wrap_photo_sponsor'><img src={dietz} className='each_quest'/></p>
                                       <p className='name_of_speaker'>Joel Dietz</p>
                                       <p className='descr_of_speaker'>CEO of Metametaverse</p>
                            </div>
                            <div className='each_speaker del1' onClick={() => {
                                      this.setState({ name: "Daniele Pinna",
                                                      bio: <Pinna />
                                      });
                                      this.bioRef.current.classList.add('bio_show');
                                }}>
                                    <p className='wrap_photo_sponsor'><img src={pinna} className='each_quest'/></p>
                                    <p className='name_of_speaker'>Daniele Pinna</p>
                                    <p className='descr_of_speaker'>Head of Quantitative Research, Investment at 0VIX</p>
                         </div>
                         <div className='each_speaker del1'>
                                 <p className='wrap_photo_sponsor'><img src={nov} className='each_quest'/></p>
                                 <p className='name_of_speaker'>Vladimir Novitskiy</p>
                                 <p className='descr_of_speaker'>Founder of GoWeb Capital</p>
                      </div>
                      <div className='each_speaker del1'>
                              <p className='wrap_photo_sponsor'><img src={lar} className='each_quest'/></p>
                              <p className='name_of_speaker'>Victor Larionov</p>
                              <p className='descr_of_speaker'>Partner of Unirock.partners</p>
                   </div>
                   <div className='each_speaker del1'>
                           <p className='wrap_photo_sponsor'><img src={kumardev} className='each_quest'/></p>
                           <p className='name_of_speaker'>Kumardev Chatterjee</p>
                           <p className='descr_of_speaker'>Co-Founder of NEOM Cognitive Metaverse</p>
                    </div>
                    <div className='each_speaker del1' onClick={() => {
                              this.setState({ name: "Florian Ducommun",
                                              bio: <Florian />
                              });
                              this.bioRef.current.classList.add('bio_show');
                        }}>
                            <p className='wrap_photo_sponsor'><img src={florian} className='each_quest'/></p>
                            <p className='name_of_speaker'>Florian Ducommun</p>
                            <p className='descr_of_speaker'>Partner at Bonnard Lawson International Law Firm</p>
                     </div>
                     <div className='each_speaker del1'>
                             <p className='wrap_photo_sponsor'><img src={anna} className='each_quest'/></p>
                             <p className='name_of_speaker'>Anna Tutova</p>
                             <p className='descr_of_speaker'>CEO of Coinstelegram</p>
                      </div>
                      <div className='each_speaker del1' onClick={() => {
                                this.setState({ name: "Sheraz Ahmed",
                                                bio: <Ahmed />
                                });
                                this.bioRef.current.classList.add('bio_show');
                          }}>
                              <p className='wrap_photo_sponsor'><img src={ahmed} className='each_quest'/></p>
                              <p className='name_of_speaker'>Sheraz Ahmed</p>
                              <p className='descr_of_speaker'>Crypto Valley Association, Managing Partner at STORM Partners</p>
                       </div>

                        <div className='each_speaker del1'>
                                <p className='wrap_photo_sponsor'><img src={pavlov} className='each_quest'/></p>
                                <p className='name_of_speaker'>Alexey Pavlov</p>
                                <p className='descr_of_speaker'>Founder of Kauri.Finance </p>
                         </div>
                         <div className='each_speaker del1'>
                                 <p className='wrap_photo_sponsor'><img src={senn} className='each_quest'/></p>
                                 <p className='name_of_speaker'>Benjamin Senn</p>
                                 <p className='descr_of_speaker'>European Crypto Initiative</p>
                          </div>
                         <div className='each_speaker del1' onClick={() => {
                                   this.setState({ name: "Dyma Budorin",
                                                   bio: <Budorin />
                                   });
                                   this.bioRef.current.classList.add('bio_show');
                             }}>
                                 <p className='wrap_photo_sponsor'><img src={bud} className='each_quest'/></p>
                                 <p className='name_of_speaker'>Dyma Budorin</p>
                                 <p className='descr_of_speaker'>Founder and CEO of Hacken</p>
                          </div>

                          <div className='each_speaker del1' onClick={() => {
                                    this.setState({ name: "Caroline Taylor",
                                                    bio: <Taylor />
                                    });
                                    this.bioRef.current.classList.add('bio_show');
                              }}>
                                  <p className='wrap_photo_sponsor'><img src={caroline} className='each_quest' /></p>
                                  <p className='name_of_speaker'>Caroline Taylor</p>
                                  <p className='descr_of_speaker'>Founder of Appraisal Bureau</p>
                           </div>
                           <div className='each_speaker del1' style={{display: "none"}}>
                                   <p className='wrap_photo_sponsor'><img src={bak} className='each_quest'/></p>
                                   <p className='name_of_speaker'>Georg Bak</p>
                                   <p className='descr_of_speaker'>MetaverseTalks</p>
                            </div>
                            <div className='each_speaker del1'>
                                    <p className='wrap_photo_sponsor'><img src={jasmin} className='each_quest'/></p>
                                    <p className='name_of_speaker'>Jasmin Karatas</p>
                                    <p className='descr_of_speaker'>Solopreneur, Gamification Advisor & Strategic Designer</p>
                             </div>

                           <div className='each_speaker del1' onClick={() => {
                                     this.setState({ name: "Alexander Fazel",
                                                     bio: <Fazel />
                                     });
                                     this.bioRef.current.classList.add('bio_show');
                               }}>
                                   <p className='wrap_photo_sponsor'><img src={fazel} className='each_quest'/></p>
                                   <p className='name_of_speaker'>Alexander Fazel </p>
                                   <p className='descr_of_speaker'>Chief Partnerships Officer at SwissBorg</p>
                            </div>
                             <div className='each_speaker del1' onClick={() => {
                                       this.setState({ name: "Cyrus Fazel",
                                                       bio: <Cfazel />
                                       });
                                       this.bioRef.current.classList.add('bio_show');
                                 }}>
                                     <p className='wrap_photo_sponsor'><img src={fazel2} className='each_quest'/></p>
                                     <p className='name_of_speaker'>Cyrus Fazel</p>
                                     <p className='descr_of_speaker'>Founder and CEO of SwissBorg</p>
                             </div>
                             <div className='each_speaker del1' onClick={() => {
                                       this.setState({ name: "Megha Shrestha",
                                                       bio: <Megha />
                                       });
                                       this.bioRef.current.classList.add('bio_show');
                                 }}>
                                     <p className='wrap_photo_sponsor'><img src={megha} className='each_quest'/></p>
                                     <p className='name_of_speaker'>Megha Shrestha</p>
                                     <p className='descr_of_speaker'>CEO of Metabloqs</p>
                             </div>
                             <div className='each_speaker del1' onClick={() => {
                                       this.setState({ name: "Cedric Ming",
                                                       bio: <Ming />
                                       });
                                       this.bioRef.current.classList.add('bio_show');
                                 }}>
                                     <p className='wrap_photo_sponsor'><img src={ming} className='each_quest'/></p>
                                     <p className='name_of_speaker'>Cedric Ming</p>
                                     <p className='descr_of_speaker'>Co-Founder and Vice President of MetaverseTalks</p>
                             </div>
                             <div className='each_speaker del1' onClick={() => {
                                       this.setState({ name: "Shane Kehoe",
                                                       bio: <Kehoe />
                                       });
                                       this.bioRef.current.classList.add('bio_show');
                                 }}>
                                     <p className='wrap_photo_sponsor'><img src={kehoe} className='each_quest'/></p>
                                     <p className='name_of_speaker'>Shane Kehoe</p>
                                     <p className='descr_of_speaker'>Managing Partner of SwissBorg Ventures</p>
                             </div>
                             <div className='each_speaker del1' onClick={() => {
                                       this.setState({ name: "Leyla Baghirzade",
                                                       bio: <Leyla />
                                       });
                                       this.bioRef.current.classList.add('bio_show');
                                 }}>
                                     <p className='wrap_photo_sponsor'><img src={leyla} className='each_quest'/></p>
                                     <p className='name_of_speaker'>Leyla Baghirzade</p>
                                     <p className='descr_of_speaker'>Founder of Swiss Alternative Financing AG. Board member of Azerbaijan Blockchain Centre </p>
                             </div>
                              <div className='each_speaker del1' onClick={() => {
                                        this.setState({ name: "Joshua Ellul",
                                                        bio: <Ellul />
                                        });
                                        this.bioRef.current.classList.add('bio_show');
                                  }}>
                                     <p className='wrap_photo_sponsor'><img src={illul} className='each_quest'/></p>
                                     <p className='name_of_speaker'>Joshua Ellul</p>
                                     <p className='descr_of_speaker'>Chairman of Malta Digital Innovation Authority, Director of Center for DLT at University of Malta</p>
                    </div>
                    <div className='each_speaker del1'>
                                     <p className='wrap_photo_sponsor'><img src={ibAlk} className='each_quest'/></p>
                                     <p className='name_of_speaker'>Ibrahim Alkurd</p>
                                     <p className='descr_of_speaker'>Founder Lavaliere Capital Management</p>
                             </div>
                    <div className='each_speaker del1'>
                                     <p className='wrap_photo_sponsor'><img src={takh} className='each_quest'/></p>
                                     <p className='name_of_speaker'>Takhmina Nasimova</p>
                                     <p className='descr_of_speaker'>Business Development AgAu.io</p>
                             </div>
                    <div className='each_speaker del1'>
                                     <p className='wrap_photo_sponsor'><img src={quest} className='each_quest'/></p>
                                     <p className='name_of_speaker'>Shane Kehoe</p>
                                     <p className='descr_of_speaker'>Managing Partner at SwissBorg Ventures</p>
                             </div>
                    <div className='each_speaker del1' style={{display: "none"}}>
                                     <p className='wrap_photo_sponsor'><img src={quest} className='each_quest'/></p>
                                     <p className='name_of_speaker'>Felipe Duarte</p>
                                     <p className='descr_of_speaker'>Founder of The DAOist</p>
                             </div>
                    <div className='each_speaker del1'>
                                     <p className='wrap_photo_sponsor'><img src={quest} className='each_quest'/></p>
                                     <p className='name_of_speaker'>Ari Qayumi</p>
                                     <p className='descr_of_speaker'> Stanford Behavior Design Researcher, CEO at Mindful Venture Capital</p>
                             </div>
                    <div className='each_speaker del1'>
                                     <p className='wrap_photo_sponsor'><img src={ber} className='each_quest'/></p>
                                     <p className='name_of_speaker'>Marc P. Bernegger</p>
                                     <p className='descr_of_speaker'>Co-Founder of AltAlpha Digital</p>
                             </div>
                    <div className='each_speaker del1'>
                                     <p className='wrap_photo_sponsor'><img src={quest} className='each_quest'/></p>
                                     <p className='name_of_speaker'>Ray Wang</p>
                                     <p className='descr_of_speaker'> Founder, Chairman, & Principal Analyst of Constellation Research </p>
                             </div>
                    <div className='each_speaker del1' onClick={() => {
                              this.setState({ name: "Ravikant Agrawal",
                                              bio: <Agra />
                              });
                              this.bioRef.current.classList.add('bio_show');
                        }}>
                                     <p className='wrap_photo_sponsor'><img src={quest} className='each_quest'/></p>
                                     <p className='name_of_speaker'>Ravikant Agrawal</p>
                                     <p className='descr_of_speaker'>Vice President of Strategy at Polygon</p>
                             </div>
                        <div className='each_speaker del1' onClick={() => {
                                  this.setState({ name: "Antoni Martin",
                                                  bio: <Martin />
                                  });
                                  this.bioRef.current.classList.add('bio_show');
                            }}>
                                         <p className='wrap_photo_sponsor'><img src={nophoto} className='each_quest'/></p>
                                     <p className='name_of_speaker'>Antoni Martin</p>
                                     <p className='descr_of_speaker'>Co-Founder of Polygon Hermez and PolygonID</p>
                             </div>
                          <div className='each_speaker del1' onClick={() => {
                                    this.setState({ name: "Sergi Mata",
                                                    bio: <Mata />
                                    });
                                    this.bioRef.current.classList.add('bio_show');
                              }}>
                                     <p className='wrap_photo_sponsor'><img src={nophoto} className='each_quest'/></p>
                                     <p className='name_of_speaker'>Sergi Mata</p>
                                     <p className='descr_of_speaker'>Global Enterprise Strategy Manager at Polygon</p>
                             </div>
                          <div className='each_speaker del1' onClick={() => {
                                    this.setState({ name: "Brian Trunzo",
                                                    bio: <Brian />
                                    });
                                    this.bioRef.current.classList.add('bio_show');
                              }}>
                                           <p className='wrap_photo_sponsor'><img src={nophoto} className='each_quest'/></p>
                                     <p className='name_of_speaker'>Brian Trunzo</p>
                                     <p className='descr_of_speaker'>Metaverse Lead at Polygon Studios</p>
                             </div>
                            <div className='each_speaker del1'  onClick={() => {
                                      this.setState({ name: "Pietro Poretti",
                                                      bio: <Poretti />
                                      });
                                      this.bioRef.current.classList.add('bio_show');
                                }}>
                                     <p className='wrap_photo_sponsor'><img src={nophoto} className='each_quest'/></p>
                                     <p className='name_of_speaker'>Pietro Poretti</p>
                                     <p className='descr_of_speaker'>Director of the Economic Promotion Division, The City of Lugano</p>
                             </div>
                    <div className='each_speaker del1' onClick={() => {
                              this.setState({ name: "Marco Dal Lago",
                                              bio: <Lago />
                              });
                              this.bioRef.current.classList.add('bio_show');
                        }}>
                                     <p className='wrap_photo_sponsor'><img src={nophoto} className='each_quest'/></p>
                                     <p className='name_of_speaker'>Marco Dal Lago</p>
                                     <p className='descr_of_speaker'>Head of Expansion Tether and Bitfinex</p>
                             </div>
                          <div className='each_speaker del1'>
                                 <p className='wrap_photo_sponsor'><img src={kaal} className='each_quest'/></p>
                                 <p className='name_of_speaker'>Dr. Wulf Kaal</p>
                                 <p className='descr_of_speaker'>Professor of Law at the University of St.Thomas School of Law, Co-Founder at DEVxDAO</p>
                       </div>
                       <div className='each_speaker del1'>
                              <p className='wrap_photo_sponsor'><img src={lev} className='each_quest'/></p>
                              <p className='name_of_speaker'>Genevieve Leveille</p>
                              <p className='descr_of_speaker'>CEO & Principal Founder of AgriLedger</p>
                       </div>
                       <div className='each_speaker del1'>
                                        <p className='wrap_photo_sponsor'><img src={jsu} className='each_quest'/></p>
                                        <p className='name_of_speaker'>Juliet Su</p>
                                        <p className='descr_of_speaker'>Partner of NewTribe.capital</p>
                                </div>
                             <div className='each_speaker del1'>
                                    <p className='wrap_photo_sponsor'><img src={vovchok} className='each_quest'/></p>
                                    <p className='name_of_speaker'>Maria Vovchok</p>
                                    <p className='descr_of_speaker'>MC EmTech Invest Hub</p>
                          </div>
                          <div className='each_speaker del1'>
                                 <p className='wrap_photo_sponsor'><img src={drmak} className='each_quest'/></p>
                                 <p className='name_of_speaker'>Dr. Makoto Takemiya</p>
                                 <p className='descr_of_speaker'>CEO of Soramitsu</p>
                          </div>
                          <div className='each_speaker del1'>
                                 <p className='wrap_photo_sponsor'><img src={ingo} className='each_quest'/></p>
                                 <p className='name_of_speaker'>Ingo Ruebe</p>
                                 <p className='descr_of_speaker'>Founder of KILT Protocol and CEO of B T E BOTLabs Trusted</p>
                          </div>
                          <div className='each_speaker del1'>
                                 <p className='wrap_photo_sponsor'><img src={feld} className='each_quest'/></p>
                                 <p className='name_of_speaker'>Olga Feldmeier</p>
                                 <p className='descr_of_speaker'>Co Founder and Chairman of the Board of SMART VALOR</p>
                          </div>
                          <div className='each_speaker del1'>
                                 <p className='wrap_photo_sponsor'><img src={ralf} className='each_quest'/></p>
                                 <p className='name_of_speaker'>Ralf Glabischnig</p>
                                 <p className='descr_of_speaker'>Founder of Crypto Oasis</p>
                          </div>

                    </div>
                </div>
          </div>
      )

    }

}

export default Sponsors;
