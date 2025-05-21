import { BrowserRouter } from "react-router-dom"
import Navbar from './Components/navbar';
import Hero from './Components/Hero';
import Legacy from './Components/legacy';
import Precision from './Components/precision';
import Logistic from './Components/logistic';
import Footer from './Components/footer'


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Hero />
        <Legacy />
        <Precision />
        <Logistic />
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
