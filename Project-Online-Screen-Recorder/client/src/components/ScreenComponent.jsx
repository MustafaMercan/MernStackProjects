import React from 'react'

const ScreenComponent = ({ closeModal }) => {
    return (
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-white p-8 rounded-lg shadow-lg z-50 w-1/2 h-1/2">
            <div className="modal-content">
                <span className="close fixed top-0 right-0 p-4" onClick={closeModal} >
                    &times;
                </span>
                <div className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4 text-center">
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M8 17l4 4 4-4m-4-5v9" />
                                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                    <p className="leading-relaxed">Screen</p>
                                </div>
                                <input type='checkbox' className='top-0 w-4 h-4' name="screen"/>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx={9} cy={7} r={4} />
                                        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                                    <p className="leading-relaxed">Webcam</p>
                                </div>
                                <input type='checkbox' className='top-0 w-4 h-4' name="webcam"/>

                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M3 18v-6a9 9 0 0118 0v6" />
                                        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
                                    <p className="leading-relaxed">System Sound</p>
                                </div>
                                <input type='checkbox' className='top-0 w-4 h-4' name="sound"/>

                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
                                    <p className="leading-relaxed">Microphone</p>
                                </div>
                                <input type='checkbox' className='top-0 w-4 h-4' name="microphone"/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScreenComponent
