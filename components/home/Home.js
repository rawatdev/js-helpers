import React from "react"
import Banner from "../banner/Banner"
import Features from "../features/Features"
import Hero from "../hero/Hero"
import Navbar from "../navbar/Navbar"
import useStyles from "./homeStyle"

const Home = () => {
  const { classes } = useStyles()
  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <Features />
    </div>
  )
}

export default Home
