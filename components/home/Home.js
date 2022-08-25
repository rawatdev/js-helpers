import React from "react"
import Banner from "../banner/Banner"
import Features from "../features/Features"
import Hero from "../hero/Hero"
import Navbar from "../navbar/Navbar"
import About from "../about/About"
import useStyles from "./homeStyle"
import Community from "../community/Community"

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
    </div>
  )
}

export default Home
