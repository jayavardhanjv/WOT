import { Outlet } from "react-router-dom"
 import Navbar from "./components/navbar/Navbar"
import Main from "./pages/Main"
import Play_page from "./pages/Play_page"

function App() {
 
  return (
    <>
      <Navbar />
      {/* <Main /> */}
      <Play_page />
    </>
  )
}

export default App
