import * as React from "react"
import NavBar from "../components/navbar"
import Footer from "../components/footer"
import { ConsentForm } from "../components/ConsentForm"

const Layout = ({ children }) => {
  return (
    <div id="global-wrapper" className="flex flex-col min-h-screen bg-olive">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <ConsentForm color="blue" />
      <Footer />
    </div>
  )
}

export default Layout