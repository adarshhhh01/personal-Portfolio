
import img1 from './assets/images/img1.png';
import Services from './pages/Services';
import About2 from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './components/footer';
import Navbar from './components/navbar';




function App() {


  return (
    <>
      <div id="home" className='min-h-screen'>
        <div>
         <Navbar/>
          <main>
            <div className="main justify-center grid grid-cols-">
              <div className='grid grid-cols- justify-center object-cover -mt-24'>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-[40px] md:text-[120px] font-extrabold tracking-[0.2em] text-black">
                     I’M A <span> . </span>  UI/UX
                  </p>
                  <p className="text-[80px] md:text-[150px] font-extrabold leading-none text-black z-12 top-2">
                    DE<span className="text-transparent stroke">SIGN</span>ER
                  </p>
                </div>
                <img className='h-200 top-20 text-center relative z-10  object-contain' src={img1} alt="" />
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
