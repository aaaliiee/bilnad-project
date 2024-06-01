import React from 'react';
// import SecondaryBtn from "../../components/Button/SecondaryBtn";
import {Link} from "react-router-dom"

const About = () => {
    return (

        <>
        <div className='bg-gray-700'>

       
    <div className="w-full h-auto flex items-center justify-between gap-7 1g:py-16 md:py-14 sm:py-12 py-10 1g:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse">

            <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relativeoverflow-hidden rounded-lg">
             <img
             src="https://images.unsplash.com/photo-1580451299338-3658f5b11930?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NDk1NDM4OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="About image"

                className="w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover"/>
            </div>
             <div className='h-auto lg:w-[50%] md:w-full sm:w-full w-full lg:text-start md:text-start sm:text-start text-center'>
                <h6 className="text-lg font-bold text-gray-200 flex items-centers lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 mb-3">Meet <span className='font-xl text-indigo-500'>BILAND</span></h6>
                <h1 className='lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold text-gray-100 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-o'>
                Quality-Assured Service Lets You Focus On What's Most Important </h1>
                    <p className='lg:text-base md:text-base sm:text-sm text-sm text-gray-300 font-medium mb-4'>
                    A good workplace requires its service. It can be about living up to work environment requirements, having sparkling clean premises before an important meeting or being able to offer well-stocked vending machines and good coffee for the break.
                    </p>
                    
                    <p className='lg:text-base md:text-base sm:text-sm text-sm text-white font-bold mb-4'>^Get A Trusted Services "From Our Home to Yours"^</p>
                    {/* <SecondaryBtn className ="lg:w-auto md:w-auto sm:w-full w-full px-7 py-2 text-base font-medium uppercase justify-center" > <Link to="/contact">Become a Member</Link></SecondaryBtn> */}
                    <div className='items-center'>
                      <Link to="/contact">
                      <button className='text-base text-gray-200 bg-indigo-600 font-medium px-3 py-1.5 rounded-full  gap-x-1 hover:bg-indigo-600/70 ease-out duration-500 sm:my-9'>Contact Us</button>
                      </Link>
                    </div>
             </div>
      </div >
      </div>
    </>
    
  )
}

export default About
