
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
                            className="decoration-0 text-[.8em] text-white"
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
                    className="inline-flex cursor-pointer items-center p-2 focus:outline-none w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  ">
                    <span className="sr-only">Open main menu</span>
                    {/* <svg
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
                    </svg> */}
                    <div className={""+(isOpen ? '' : 'flex flex-col')+""}>
                        <svg
                            className={"w-5 h transition-all "+(isOpen ? 'rotate-45' : '')+" "}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 8"
                        >
                            <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 7h15M1"
                            />
                        </svg>
                        <svg
                            className={"w-5 h transition-all "+(isOpen ? 'absolute -rotate-45 top-[2.2em] right-[2em]' : '')+" "}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 8"
                        >
                            <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 7h15M1"
                            />
                        </svg>
                        <svg
                            className={"w-5 h "+(isOpen ? 'hidden' : '')+""}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 8"
                        >
                            <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 7h15M1"
                            />
                        </svg>
                    </div>
                </button>
            </div>

            <div className={`md:hidden  ${isOpen ? 'flex h-[17em]' : 'invisible absolute -z-99 h-0'} flex-col transition-[height]`}>
                    
                    <div className={"flex w-full flex-col mx- justify-around "+(isOpen ? '' : 'hidden')+""}>
                        {
                            navLinkData.map((e) => <Link 
                                className="decoration-0 text-[.8em] p-2 px-2 cursor-pointer hover:bg-teal-800 hover:bg-opacity-30 transition-all mt-2"
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
