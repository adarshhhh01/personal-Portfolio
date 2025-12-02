import React from 'react'
// import wareBg from '../assets/images/ware-bg.png';
import img4 from '../assets/images/img4.png';
import About2 from './about';

const Services = () => {
  return (
    <div>
        <section id="services" className="bg-[#050505] text-white h-screen">
            
  <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
    
    <div className="w-full md:w-1/2 space-y-6">
      <p className="text-sm tracking-[0.25em] text-gray-400 uppercase">
        Hello
      </p>
        
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
        I’M <span className="text-white">Adarsh </span>
      </h1>

      <p className="text-sm sm:text-base text-gray-300 max-w-md">
         A passionate full-stack developer from Jabalpur, Madhya Pradesh. I love building real-time applications and AI-driven solutions that create meaningful impact,
        I transform ideas into intuitive and visually stunning designs.
      </p>

      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white">
            ✓
          </div>
          <div>
            <p className="text-xl font-bold">10+</p>
            <p className="text-xs uppercase tracking-wide text-gray-400">
              Skills Mastered
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white">
            ✓
          </div>
          <div>
            <p className="text-xl font-bold">5+</p>
            <p className="text-xs uppercase tracking-wide text-gray-400">
              Completed Project
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white">
            ✓
          </div>
          <div>
            <p className="text-xl font-bold"></p>
            <p className="text-xs uppercase tracking-wide text-gray-400">
              Happy Learner
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full md:w-1/2 flex justify-center">
      <div className="relative max-w-sm">

        <div className="absolute -top-6 -right-30 grid grid-cols-3 gap-2 opacity-20">
          <div className="h-30 w-30 bg-gray-700"></div>
          <div className="h-30 w-30 bg-gray-800"></div>
          <div className="h-30 w-30 bg-gray-700"></div>
          <div className="h-30 w-30 bg-gray-800"></div>
          <div className="h-30 w-30 bg-gray-700"></div>
          <div className="h-30 w-30 bg-gray-800"></div>
        </div>

        <div className="absolute -left-16 bottom-4 h-60 w-60 rounded-full border border-orange-500/30"></div>
        <div className="absolute -right-16 top-8 h-60 w-60 rounded-full border border-orange-500/40"></div>

        <div className="absolute top-15 right-15 flex gap-1">
          <span className="h-6 w-1 rounded-full bg-orange-400 rotate-6"></span>
          <span className="h-6 w-1 rounded-full bg-orange-400 -rotate-6"></span>
        </div>

        <div className="absolute bottom-6 right-40 z-30 flex gap-1">
          <span className="h-1 w-6 rounded-full bg-orange-400"></span>
          <span className="h-1 w-6 rounded-full bg-orange-400"></span>
        </div>

        
        <img
          src={img4}
          alt="Profile"
          className="relative z-10 w-200"
        />
      </div>
    </div>
  </div>
</section>
<About2/>
    </div>
  )
}

export default Services