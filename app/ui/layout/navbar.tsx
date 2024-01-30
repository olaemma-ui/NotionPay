
'use client'
import 'keen-slider/keen-slider.min.css'
import { navLinkData } from "@/app/data/data";
import Link from "next/link";
import { useState } from 'react';

export const Navbar : React.FC = ()=>{

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (<>
    <nav className="bg-[#112025] w-full sticky top-0 z-[50]">
        <div className="p-4 md:px-[4em] w-full max-w-[80em] mx-auto">
            <div className="flex md:items-center justify-between">

                <p className="text-white text-2xl font-black font-['Poppins']">
                    Notionpay
                </p>

                
                <div className="md:flex w-[30em] mx-8 hidden justify-around">
                    {
                        navLinkData.map((e) => <Link 
                            className="decoration-0 text-[.8em]"
                            key={e.text} 
                            href={e.to}> 
                            {e.text} 
                        </Link>)
                    }
                </div>

                <button className="h-10 w-full md:visible invisible max-w-[8.5em] px-4 py-3 bg-teal-900 rounded-lg justify-end items-center gap-3.5 inline-flex">
                    <p className="text-white text-[.7em] font-bold font-['Poppins']">
                        Download now 🚀
                    </p>
                </button>

                <button
                    type="button"
                    onClick={() => {setIsOpen(!isOpen)}}
                    className="inline-flex cursor-pointer items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-900 dark:text-gray-400 dark:hover:bg-teal-900 dark:focus:ring-teal-900">
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
            </div>

            <div className={`md:hidden  ${isOpen ? 'flex' : 'hidden'} flex-col transition-all`}>
                    
                    <div className="flex w-full flex-col mx- justify-around">
                        {
                            navLinkData.map((e) => <Link 
                                className="decoration-0 text-[.8em] p-2 px-2 cursor-pointer hover:bg-teal-800 hover:bg-opacity-30 transition-all"
                                key={e.text} 
                                href={e.to}> 
                                {e.text} 
                            </Link>)
                        }
                    </div>

                    <button className="mt-5 h-10 w-full max-w-[8.5em] px-4 py-3 bg-teal-900 rounded-lg justify-end items-center gap-3.5 inline-flex">
                        <p className="text-white text-[.7em] font-bold font-['Poppins']">
                            Download now 🚀
                        </p>
                    </button>
                </div>
        </div>
    </nav>

    
    {/* </div> */}
</>);}
