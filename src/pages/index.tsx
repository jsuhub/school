import React, { FC } from "react"
import Index from "@/components/Index"
import Invitation from "@/components/Invitation"
import Progress from "@/components/Progress"
import Nav from "@/components/Nav"
import Receipt from "@/components/Receipt"

const App: FC = () => (
  <>
    <Index />
    <Invitation />
    <Progress />
    <Nav />
    <Receipt />
  </>
)


export default App