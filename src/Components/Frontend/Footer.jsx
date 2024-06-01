import { Dumbbell, Link, MapPin, Phone, MailOpen, Facebook, Instagram, Youtube, GithubIcon } from 'lucide-react'
import React from 'react';
// import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <>
        <div className='bg-gray-800'>

        
            <div className='w-full h-auto flex items-center justify-center flex-col bg-black/30 py-16 lg:px-24 md:px-16 sm:px-6 px-4'>
                <div className='w-full h-auto flex items-start lg:justify-between md:justify-between sm:justify-center justify-center gap-5 mb-10 flex-wrap'>
                    <div className='lg:w-[30%] md:w-[30%] sm:w-full h-auto p-2 flex lg:items-starts md:items-starts sm:items-center items-center flex-col justify-center '></div>
                    <Link className=' w-fit text-3xl text-indigo-600 font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative mb-3'>
                        Xtreme MMA
                        <Dumbbell className='w-5 h-4 text-indigo-600 -rotate-45 absolute top-0 left-[46%] translate-x-[-50%]' />
                    </Link>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a]'>BILNAD</h1>
                    <p className='text-base text-gray-100 font-medium mb-4 lg:text-start md:test-start sm:text-center text-center'>
                    Once you have chosen your basic services, you can easily add specific services based on your needs to create your unique and complete business service. Why not take the opportunity to raise the mood and well-being of your employees?
                    </p>
                    <div className='w-full h-auto space-y-2'>
                        <div className='w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-indigo-600 ease-out  duration-300 curser-pointer '>
                            <MapPin className='w-5 h-5' />
                            <p className='text-base'>123 Main Street Stockholm </p>
                        </div>
                        <div className='w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-indigo-600 ease-out  duration-300 curser-pointer '>
                            <MailOpen className='w-5 h-5' />
                            <p className='text-base'>mbilalahsan247@gmail.com</p>
                        </div>
                        <div className='w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-indigo-600 ease-out  duration-300 curser-pointer '>
                            <Phone className='w-5 h-5' />
                            <p className='text-base'>+46 76 445 38 57</p>
                        </div>
                        <div className='lg:w-[65%] md:w-[65%] sm:w-full w-full h-auto p-2 flex items-center lg:justify-end md:justify-end sm:justify-center justify-center flex-wrap gap-5'>

                            <div className='lg:w-[30%] md:w-[48%] sm:w-[48%]  h-auto flex items-center flex-col justify-center'>
                                <h2 className='text-lg text-gray-100 font-bold mb-4'>Services</h2>
                                <div className='w-full h-auto'>
                                    <ul className='w-full h-auto space-y-2'>
                                        <li className='w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center'>
                                            Home Cleaning
                                        </li>
                                        <li className='w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center'>
                                          Office cleaning
                                        </li>
                                        <li className='w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center'>
                                           Relocation assistence
                                        </li>
                                        <li className='w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center'>
                                            Cleaning
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='lg:w-[30%] md:w-[48%] sm:w-[48%] w-[30%] h-auto flex items-center flex-col justify-center'>
                                <h2 className='text-lg text-gray-100 font-bold mb-4'>Quick Link</h2>
                                <div className=' h-auto'>
                                    <ul className='w-full h-auto space-y-2'>
                                       <li className='w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center'>
                                            About us
                                        </li>
                                        <li className='w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center'>
                                            Priceing Plan
                                        </li>
                                        <li className='w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center'>
                                            Locations
                                        </li>
                                        <li className='w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center'>
                                            Contact Us
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CopyRights Line  */}
                <div className='w-full h-[1.5px] flex items-center lg:bg-gray-900 md:bg-gray-800 sm:bg-transparent bg-transparent relative'>
                    <div className='w-full h-auto flex items-center lg:justify-between md:justify-between sm:justify-center justify-center absolute -top-4 left-[50%] translate-x-[-50%] flex-wrap-reverse gap-y-4'>
                        <p className='text-sm text-gray-400 font-normal  py-1 px-4 rounded-md  lg:bg-gray-900 md:bg-gray-800 sm:bg-transparent bg-transparent '>
                            @2024 Bilnad---Rights Are Reserved.
                        </p>
                        <div className=' h-auto flex items-center justify-center'>
                            <ul className='w-full h-auto flex items-center justify-center gap-x-4'>
                                <li className='w-8 h-8 cursor-pointer flex items-center justify-center text-white  bg-indigo-900 py-1 px-4 rounded-md  hover:text-white ease-out duration-700'>
                                    <a href="https://www.facebook.com/" target='_blank'> <Facebook className='w-5 h-5'/></a>
                                </li>
                                <li className='w-8 h-8 cursor-pointer flex items-center justify-center text-white bg-indigo-900 py-1 px-4 rounded-md hover:text-white ease-out duration-700'>
                                <a href="https://www.instagram.com/" target='_blank'> <Instagram className='w-5 h-5'/></a>
                                </li>
                                <li className='w-8 h-8 cursor-pointer flex items-center justify-center text-white bg-indigo-900 py-1 px-4 rounded-md hover:text-white ease-out duration-700'>
                                <a href="https://www.Youtube.com/" target='_blank'> <Youtube className='w-5 h-5'/></a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </>
    )
}

export default Footer
