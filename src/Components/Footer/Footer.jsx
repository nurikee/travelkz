import React, {useEffect} from "react";
import './footer.css'
import video2 from '../Assets/horse.mp4'
import {TbSend} from 'react-icons/tb'
import {GiEarthAmerica} from 'react-icons/gi'
import {FiTwitter} from 'react-icons/fi'
import {FiChevronRight} from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    }, [])



    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4" ></video>
            </div>

        <div className="secContent conatainer">

            <div className="contactDiv flex">

                <div data-aos="fade-up" className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with us</h2>
                </div>
            

                <div className="inputDiv flex">
                <input type="text" placeholder="Enter email address" />
                <button data-aos="fade-up" className="btn flex" type="submit">
                    SEND<TbSend className='icon'/>
                </button>
                </div>


            
            </div>

            <div className="footerCard flex">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                        
                        <a data-aos="fade-up" data-aos-duration='4000' href="" className="logo flex">
                            <GiEarthAmerica className='icon'/>
                        Travel
                        </a>

                    </div>

                    <div data-aos="fade-up"
                    className="footerParagraph">
                    The reason mostly comes down to one man we at Merriam-Webster hold especially dear: Noah Webster. Our lexicographical father (brothers George and Charles Merriam bought the rights to Noah Webster’s 1841 dictionary after Webster died) was a great believer in spelling reform and wanted English spelling to make more sense—and if the English of his homeland had more logic to it than its British parent, so much the better. He decided that travel needed only one l in its past and present participle forms.
                    </div>
                    
                    <div data-aos="fade-up" data-aos-duration='4000'className="footerSocials flex">
                    <FiTwitter className="icon"/>
                    <FiTwitter className="icon"/>
                    <FiTwitter className="icon"/>
                    </div>
                </div>

                <div className="footerLinks grid">
                    {/*1*/}
                    <div data-aos="fade-up" data-aos-duration='3000' className="linkGroup">
                        <span className="groupTitle">
                            Our AGENCY
                        </span>

                        <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Services
                        </li>

                        <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Insurance
                        </li>

                        <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Agnecy
                        </li>

                        <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Tourism
                        </li>

                        <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Payment
                        </li>
                    </div>

                    

                     {/*2*/}
                    <div data-aos="fade-up" data-aos-duration='4000'className="linkGroup">
                        <span className="groupTitle">
                            Partners
                        </span>

                        <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Bookings
                        </li>

                        <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Rentcars
                        </li>

                        <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        HostelWorld
                        </li>

                        <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Trivago
                        </li>

                        <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        TripAdvisor
                        </li>
                    </div>

                     {/*3*/}
                    <div data-aos="fade-up" data-aos-duration='5000' className="linkGroup">
                        <span className="groupTitle">
                            LAST MINUTE
                        </span>

                        <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        London
                        </li>

                        <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        California
                        </li>

                        <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Astana
                        </li>

                        <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Paris
                        </li>

                        <li className="footerList flex">
                        <FiChevronRight className='icon'/>
                        Moscow
                        </li>
                    </div>

                </div>


                <div className="footerDiv flex">
                    <small>BEST TRAVEL WEBSITE THEME</small>
                    <small>COPYRIGHTS RESERVED - ALMATY 2022</small>
                </div>
            </div>

        

        </div>
        
        </section>
    )
}

export default Footer;