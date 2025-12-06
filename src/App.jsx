
import img1 from './assets/images/img1.png';
import { motion } from 'framer-motion';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';




function App() {


  return (
    <>
      <div id="home" className='min-h-screen'>
        <div>
         <Navbar/>
          <main>
            <div className="main justify-center grid grid-cols-">
              <div className='grid grid-cols- justify-center object-cover -mt-24'>
                
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                >
                  <p className="text-[40px] md:text-[120px] font-extrabold tracking-[0.2em] text-black">
                     I’M A <span> . </span>  UI/UX
                  </p>
                  <p className="text-[80px] md:text-[150px] font-extrabold leading-none text-black z-12 top-2">
                    DE<span className="text-transparent stroke">SIGN</span>ER
                  </p>
                </motion.div>

                <motion.img
                  className='h-200 top-20 text-center relative z-10  object-contain'
                  src={img1}
                  alt=""
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
                />
              </div>
            </div>
            <div className="right"></div>
          </main>
        </div>
      </div>
        
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
      
    </>
    
  )
}

export default App
