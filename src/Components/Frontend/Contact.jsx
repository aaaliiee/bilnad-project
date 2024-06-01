
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4a3cm1x', 'template_9405t04', form.current, {
        publicKey: 'xgwiqmWX4-w7Jqlti',
      })
      .then(
        () => {
            alert("Message has Been Sent Successfully")
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return (
        <>
        <div className='bg-gray-600'>

        
            <div className='w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4'>
                <h6 className='text-lg font-medium text-white flex items-center gap-x-2 mb-6'>
                    
                    Contact Us--Send a Message || <span className='text-indigo-900 font-bold'>Get Quick Response</span>
                </h6>
                <form ref={form} onSubmit={sendEmail} action="#" method="POST" className="mx-auto mt-16 w-[80%] sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-md font-semibold leading-6 text-gray-300">
                                First Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first-name"
                                    placeholder='First Name'
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="first-name" className="block text-md font-semibold leading-6 text-gray-300">
                                Surname
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="sur_name"
                                    id="first-name"
                                    placeholder='sur_name'
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="first-name" className="block text-md font-semibold leading-6 text-gray-300">
                                Telehone Number
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="tel"
                                    name="telephone_number"
                                    id="first-name"
                                    placeholder='phone Number'
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="first-name" className="block text-md font-semibold leading-6 text-gray-300">
                                When Do You want help?
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="user_date"
                                    id="first-name"
                                    placeholder='07/12/2024'
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="first-name" className="block text-md font-semibold leading-6 text-gray-300">
                               Address
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="tel"
                                    name="user_address"
                                    id="first-name"
                                    placeholder=' Enter Full Address'
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="chose" className="block text-md font-semibold leading-6 text-gray-300">
                                Location...city
                            </label>
                           
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="user_location"
                                    id="first-name"
                                    placeholder='Which city'
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-md font-semibold leading-6 text-gray-300">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder='Enter working Email'
                                    id="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                       



                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-md font-semibold leading-6 text-gray-300">
                                Message....
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                placeholder='Please Address Your Location and Contact Number specifically>>>>> Thanks!'
                                    name="message"
                                    id="message"
                                    rows={4}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>
                        </div>

                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            value="send"
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Let's talk
                        </button>
                    </div>
                </form>

            </div>
            </div>
        </>
    )
}

export default Contact
