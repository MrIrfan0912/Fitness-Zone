import React from 'react'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Footer from '../Components/footer'
import MeetTheTrainers from '../Components/MeetTheTRainers'
import FeaturedClasses from '../Components/FeaturedClasses'
import Memberships from '../Components/Memberships'
import Gallery from '../Components/GallerySection'
import AboutSection from '../Components/AboutSection'


function Home() {
  return (
    <>
      <Navbar/> 
      <Slider/>
      <AboutSection/>
      <MeetTheTrainers/>
      <FeaturedClasses/>
      <Memberships/>
      <Gallery/>
      
      <Footer/>
    </>
  )
}

export default Home
