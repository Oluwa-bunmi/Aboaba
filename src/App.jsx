import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Education from "./pages/Education"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/education-donation" element={<Education/>}/>
    </Routes>
      
    </>
  )
}

export default App
