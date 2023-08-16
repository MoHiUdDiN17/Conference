import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sponsor from '../components/Sponsor'
import Confer from '../components/Confer'
import HomeCom from '../components/homeCom'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <HomeCom></HomeCom>
      <Confer></Confer>
      <Sponsor></Sponsor>
      <Footer></Footer>
    </div>
  )
}
