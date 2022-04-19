import React, { useState,useRef } from "react";
import { Transition } from "@headlessui/react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const thisref=useRef();
  return (
    <div>
      <nav className="" style={{backgroundColor:'#0a192f'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h3 className="text-gray-200">LOGO</h3>
              </div>
              <div className="hidden md:block absolute right-28">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-base font-semibold"
                  >
                    About
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-semibold"
                  >
                    Services
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-semibold"
                  >
                    Projects
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-semibold"
                  >
                    Contact
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-semibold"
                  >
                    Follow us
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <span>{isOpen ? (
          
  <div className="block md:hidden">
    <ul>
    <li className="text-gray-200 font-semibold text-md flex justify-start ml-4 m-3">About</li>
    <li className="text-gray-200 font-semibold text-md flex justify-start ml-4 m-3">Contact</li>
    <li className="text-gray-200 m-3 font-semibold text-md flex justify-start ml-4">Services</li>
    <li className="text-gray-200 m-3 pb-4 font-semibold text-md flex justify-start ml-4">Feedback</li>
   
    </ul>
  </div>
 
): (<h1></h1>)}</span>
        </nav>

       

      {/* <header className="bg-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900"></h1>
        </div>
      </header> */}
      <main>
        
      </main>
    </div>
  );
}

export default Navbar;
