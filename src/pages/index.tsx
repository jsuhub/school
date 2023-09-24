import React, { FC, useEffect, useState } from "react"
import Index from "@/components/Index"
import Invitation from "@/components/Invitation"
import Progress from "@/components/Progress"
import Nav from "@/components/Nav"
import Receipt from "@/components/Receipt"
import Head from "next/head"

const App: FC = () => {

  useEffect(() => {
    const audio = new Audio("./music.mp3")
    function play() {
      audio.play();
    }
    document.addEventListener('touchstart', play);
    
  }, []);

  return (
    <>
      <Head>
        <title>吉首大学校友</title>
      </Head>
      <Index />
      <Invitation />
      <Progress />
      <Nav />
      <Receipt />
    </>
  )
}


export default App