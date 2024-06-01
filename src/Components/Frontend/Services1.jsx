import React from 'react'
// import PrimaryBtn from '../../components/Button/PrimaryBtn'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <>
            <div

                className="w-full h-[55vh] flex items-center justify-center flex-col lg:py-16
                         md:py-14 sm:py-12 py-10 1g:px-24 md:px-16 sm:px-6 px-4 relative z-10"

                style={{

                    backgroundImage: "url(https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMyOTk3Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                >
             <div className="w-full h-full bg-black/60 absolute top-0 left-0 -z-10"></div>
               <h1 className="1g:text-6xl md:text-5x1 sm:text-2xl text-2xl font-bold
                             text-white uppercase mb-4 text-center">
                Services <span className="text-white">we</span>-Provide{" "}
                <span className="text-white">everything the business needs</span>
            </h1>
            <p className=" text-gray-300 font-medium mb-8 text-sm text-center w-[90%]">
            Fresh potted plants and friendly receptionists, cleaning of electrostatic cleanrooms and cleaning after the company party 
            </p>
            
            <button className="px-10 py-3 uppercase rounded-full text-base text-gray-200 bg-indigo-600 font-medium  flex items-center gap-x-1 hover:bg-indigo-600/70 ease-out duration-500">
             <Link to="/services">View Services</Link> 
               

            </button>
            
        </div >
        </>
    )
}

export default Banner
