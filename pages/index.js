import Head from 'next/head'
import Image from 'next/image'
import Business from '../components/Home/Business'
import Company from '../components/Home/Company'
import Expertise from '../components/Home/Expertise'
import Hero from '../components/Home/Hero'
import Innovative from '../components/Home/Innovative'
import Nav from '../components/Home/Nav'
import Result from '../components/Home/Result'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <>
      {/* <Nav/>  */}
      <Hero/>
      <Company/>
      <Expertise/>
      <Business/>
      <Result/>
      <Innovative/>
   </>
  )
}
