import Faq from '@/components/faq'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import RecentEvents from '@/components/recentEvents'
import Search from '@/components/search'
import UpcomingEvents from '@/components/upcomingEvents'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Search />
      <UpcomingEvents />
      <RecentEvents />
      <Faq />
      <Footer />
    </>
  )
}
