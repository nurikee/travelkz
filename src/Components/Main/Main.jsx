import React, {useEffect} from "react";
import './main.css'
import img from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import img5 from '../Assets/img5.jpg'
import img6 from '../Assets/img6.jpg'
import {GrMapLocation} from 'react-icons/gr'
import {BsClipboardCheck} from 'react-icons/bs'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX ',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and  adventurous activities'
    },

    {
        id:2,
        imgSrc: img2,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: "Huayna Picchu is a mountain in Peru, rising over Machu Picchu ,the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular."
    },

    {
        id:3,
        imgSrc: img3,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: "Huayna Picchu is a mountain in Peru, rising over Machu Picchu ,the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular."
    },

    
    {
        id:4,
        imgSrc: img4,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: "Huayna Picchu is a mountain in Peru, rising over Machu Picchu ,the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular."
    },

    
    {
        id:5,
        imgSrc: img5,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: "Huayna Picchu is a mountain in Peru, rising over Machu Picchu ,the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular."
    },

    
    {
        id:6,
        imgSrc: img6,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: "Huayna Picchu is a mountain in Peru, rising over Machu Picchu ,the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular."
    }
]


const Main = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    }, []) 

    return (
        <section className="main container section">
            <div data-aos="fade-up" className="secTitle">
                <h3 className="title">
                    Most visited destinations
                </h3>
            </div>


            <div className="secContent grid">
                {


                }

                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, 
                        description}) =>{
                        return(
                            <div key={id} data-aos="fade-up"
                            className="singleDestination">
                                {

                                }

                                <div className="imageDiv">
                                    <img src={imgSrc} alt=
                                    {destTitle}/>
                                </div>

                                <div className="cardInfo">
                                    <h4 className="desTitle">
                                        {destTitle}
                                    </h4>

                                    <span className="continent flex">
                                        <GrMapLocation className="icon"/>
                                        <span className="name">
                                            {location}
                                        </span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>
                                                {fees}
                                            </h5>
                                        </div>
                                    </div>


                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    
                                    <button className="btn flex">
                                        DETAILS
                                        <BsClipboardCheck className="icon"/>

                                    </button>
                                </div>
                            

                            </div>
                            )

                        })
                }

            </div>
        </section>
    )
}



export default Main;