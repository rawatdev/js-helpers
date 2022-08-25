import React from "react"
import Banner from "../banner/Banner"
import Features from "../features/Features"
import Hero from "../hero/Hero"
import Navbar from "../navbar/Navbar"
import About from "../about/About"
import useStyles from "./homeStyle"
import Community from "../community/Community"
import Announcement from "../announcement/Announcement"

const Home = () => {
  const { classes } = useStyles()
  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <Features />
      <About />
      <Community />
      <Announcement />
    </div>
  )
}

export default Home
