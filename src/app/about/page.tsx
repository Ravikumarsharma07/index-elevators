import BackBtn from '@/components/about/BackBtn'
import Header from '@/components/about/Header'
import Hero from '@/components/about/Hero'
import OurMachines from '@/components/about/OurMachines'
import OurMission from '@/components/about/OurMission'
import ContactUs from '@/components/home/ContactUs'
import React from 'react'

const Page = () => {
  return (
    <main className='bg-[#F2F2F2] min-h-screen'>
      <BackBtn />
      <Header />
      <Hero />
      <OurMission />
      <OurMachines />
      <ContactUs />
    </main>
  )
}

export default Page
