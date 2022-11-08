import React, {useState} from "react";
import img1 from '../Assets/img-9.jpg'
import img2 from '../Assets/img-2.jpg'
import img3 from '../Assets/img-3.jpg'
import img4 from '../Assets/img-4.jpg'
import img5 from '../Assets/img-8.jpg'
import CardItem from "./CardItem";
import './cards.css'




const Cards = () => {


    return (
        <section className="cards container">
        <div className='cards'>
          <h1>Check out these EPIC Destinations!</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem
                  src= {img1}
                  text='Explore the hidden waterfall deep inside the Amazon Jungle'
                  label='Adventure'
                  path='/products'
                />
                <CardItem
                  src= {img2}
                  text='Travel through the Islands of Bali in a Private Cruise'
                  label='Luxury'
                  path='/products'
                />
              </ul>
              <ul className='cards__items'>
                <CardItem
                  src= {img3}
                  text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                  label='Mystery'
                  path='/products'
                />
                <CardItem
                  src= {img4}
                  text='Experience Football on Top of the Himilayan Mountains'
                  label='Adventure'
                  path='/products'
                />
                <CardItem
                  src= {img5}
                  text='Ride through the Sahara Desert on a guided camel tour'
                  label='Adrenaline'
                  path='/products'
                />
              </ul>
            </div>
          </div>
        </div>
        </section>
      );



}

export default Cards;