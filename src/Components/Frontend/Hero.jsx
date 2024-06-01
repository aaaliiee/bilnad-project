import React from 'react'
// import { Typed } from 'react-typed' 
import {Link} from "react-router-dom"
const Hero = () => {
    return (

        <>

            <div

                className="w-full h-[80vh] flex items-center justify-center flex-col lg:py-16
         md:py-14 sm:py-12 py-10 1g:px-24 md:px-16 sm:px-6 px-4 relative z-10"

                style={{

                    backgroundImage: "url(https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNzI3MjkwMQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="w-full h-full bg-black/50 absolute top-0 left-0 -z-10"></div>
                <h1 className="1g:text-6xl md:text-5x1 sm:text-4xl text-4xl font-bold
             text-white uppercase mb-4 text-center">
                   Our Quility <span className="text-indigo-900">Services</span> AT{" "}
                    <span className="text-indigo-900">Anytime</span>
                </h1>
                <p className="text-lg text-gray-300 font-medium mb-8 text-center w-[60%]">
                Exprience Our your comprehensive  service solutions within Your Ranger.
                </p>

                <button className="px-10 py-3 uppercase rounded-full text-base text-gray-200 bg-indigo-600 font-medium  flex items-center gap-x-1 hover:bg-indigo-600/70 ease-out duration-500">
                  <Link to="/contact">Contact us</Link>  

                </button>
            </div >
        </>
    )
}

export default Hero
