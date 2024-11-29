import React from 'react'
import Hero from '../Hero/Hero'
import Card from '../Cards/Card'
import Slide from '../Slides/Slide'
import Review from '../Reviews/Review'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Quotation from '../Quotation/Quotation'


export default function FrontPage() {
  return (
    <div>
        <Navbar/>
       <Hero/>
      <Quotation/>
      <Card/>
      <Slide/>
      <Review/>
      <Footer/>
    </div>
  )
}
