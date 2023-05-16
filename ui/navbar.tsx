import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
    return (
      <nav className="bg-dark shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
            <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/logo.svg"
        alt="Next.js Logo"
        width={40}
        height={40}
        priority
        />
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              {/* <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
              <a href="#" className="border-primary text-gray-100 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium" aria-current="page">Dashboard</a>
              <a href="#" className="border-transparent text-gray-200 hover:border-gray-300 hover:text-gray-100 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">Team</a>
              <a href="#" className="border-transparent text-gray-200 hover:border-gray-300 hover:text-gray-100 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">Projects</a>
              <a href="#" className="border-transparent text-gray-200 hover:border-gray-300 hover:text-gray-100 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">Calendar</a>
            </div>
          </div>
          
          <div className="-mr-2 flex items-center sm:hidden">
            {/* <!-- Mobile menu button --> */}
            <button type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
              {/* <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg> */}
              {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
              {/* <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg> */}
            </button>
          </div>
        </div>
      </div>
  
      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 pb-3 pt-2">
          {/* <!-- Current: "border-indigo-500 bg-indigo-50 text-indigo-700", Default: "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800" --> */}
          <a href="#" className="border-indigo-500 bg-indigo-50 text-indigo-700 block border-l-4 py-2 pl-3 pr-4 text-base font-medium" aria-current="page">Dashboard</a>
          <a href="#" className="border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 block border-l-4 py-2 pl-3 pr-4 text-base font-medium">Team</a>
          <a href="#" className="border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 block border-l-4 py-2 pl-3 pr-4 text-base font-medium">Projects</a>
          <a href="#" className="border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 block border-l-4 py-2 pl-3 pr-4 text-base font-medium">Calendar</a>
        </div>
      </div>
    </nav>
    )
}
