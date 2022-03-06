import { useEffect } from "react"
import AOS from 'aos'
import Navbar from "../components/organism/Navbar"
import MainBanner from "../components/organism/MainBanner"
import TransactionStep from "../components/organism/TransactionStep"
import FeaturedGames from "../components/organism/FeaturedGames"
import Reached from "../components/organism/Reached"
import Story from "../components/organism/Story"
import Footer from "../components/organism/Footer"

export default function Home() {
    useEffect(() => {
        AOS.init()
    })
  return (
    <div>
    <Navbar />
    <MainBanner />
    <TransactionStep />
 
   <FeaturedGames />
   <Reached />
    <Story />
    <Footer />
    </div>
  )
}

