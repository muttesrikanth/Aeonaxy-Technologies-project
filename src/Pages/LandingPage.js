import React from 'react'
import Filters from '../components/Filters';
import Footer from '../components/Footer';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import Press from '../components/Press';
import RatingReviews from '../components/RatingReviews';
import Reviews from '../components/Reviews';
import Summary from '../components/Summary';

const LandingPage = () => {
  return (
    <div>
       <Header/>
      <Summary/>
      <Reviews/>
      <Filters/>
      <RatingReviews/>
      <Press/>
      <GetStarted/>
      <Footer/>
    </div>
  )
}

export default LandingPage
