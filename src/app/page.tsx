'use client'

import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Faq from '@/components/faq'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import RecentEvents from '@/components/recentEvents'
import Search from '@/components/search'
import UpcomingEvents from '@/components/upcomingEvents'

export default function Home() {

  useEffect(()=>{
    AOS.init({ once: true, duration: 1000});
  },[])

  return (
    <>
      <Hero />
      <Search />
      <UpcomingEvents />
      <RecentEvents />
      <Faq />
      <Footer />
    </>
  )
}
