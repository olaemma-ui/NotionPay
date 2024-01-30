import Link from "next/link";
import Image from "next/image";
import me from '../../assets/images/Screenshot - Copy.png';
import kenny from '../../assets/images/aluko.jpeg';
import { ApplestoreSvg, FacebookIcon, InstagramIcon, LinkedinIcon, PlaystoreSvg, XIcon } from "../components/svg_components";

export const Footer: React.FC = ()=>{
    return (<>
        <div className="w-full min-h-96 bg-[#112025] p-5 md:p-[4em]">

            <div className="max-w-[80em] md:px-[4em]">
                <div className="md:flex gap-4 justify-between">
                    <div className="left">
                        <p className="text-white text-2xl font-black font-['Poppins']">
                            Notionpay
                        </p>
                        <div className="text-slate-400 text-base font-medium font-['Poppins'] mt-3 leading-relaxed">
                            A peer-to-peer   wallet    system enabling borderless USD transfers made for Nigerians
                        </div>

                        <div className="justify-start items-start gap-4 flex flex-wrap mt-3">
                            <Link href={'#'} className="cursor-pointer hover:text-white transition-all text-slate-500 text-sm font-medium font-['Poppins'] leading-snug">Product</Link>
                            <Link href={'#'} className="cursor-pointer hover:text-white transition-all text-slate-500 text-sm font-medium font-['Poppins'] leading-snug">Features</Link>
                            <Link href={'#'} className="cursor-pointer hover:text-white transition-all text-slate-500 text-sm font-medium font-['Poppins'] leading-snug">Pricing</Link>
                            <Link href={'#'} className="cursor-pointer hover:text-white transition-all text-slate-500 text-sm font-medium font-['Poppins'] leading-snug">Resources</Link>
                            <Link href={'#'} className="cursor-pointer hover:text-white transition-all text-slate-500 text-sm font-medium font-['Poppins'] leading-snug">Careers</Link>
                            <Link href={'#'} className="cursor-pointer hover:text-white transition-all text-slate-500 text-sm font-medium font-['Poppins'] leading-snug">Help</Link>
                            <Link href={'#'} className="cursor-pointer hover:text-white transition-all text-slate-500 text-sm font-medium font-['Poppins'] leading-snug">Privacy</Link>
                        </div>
                    </div>

                
                    <div className="flex flex-col gap-5 mt-8 mb-5">
                        <PlaystoreSvg className="cursor-pointer" />
                        <ApplestoreSvg className="cursor-pointer" />
                    </div>
                    
                </div>
                <hr className="h-px  my-5"/>
                <div className="flex justify-between">
                    <div className="text-slate-400 text-sm font-medium font-['Poppins'] leading-snug">
                        © 2021 Clearbillz. All rights reserved.
                    </div>
                    <div className="flex gap-6 flex-wrap">
                        <FacebookIcon className="cursor-pointer" fill={"white"} />
                        <XIcon className="cursor-pointer" fill={"white"}/>
                        <InstagramIcon className="cursor-pointer" fill={"white"}/>
                        <LinkedinIcon className="cursor-pointer" fill={"white"}/>
                    </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-4 justify-between items-center">
                    <Link   href={"https://www.linkedin.com/in/emmanuel-tejumola-9324851a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
                            className="flex gap-3 items-center">
                        <Image  alt={'Ola Emma'} 
                                src={me} 
                                className="rounded-full w-10 h-10" />
                            <div className="">
                                <p className="text-white text-">
                                    Ola Emma 
                                </p>
                                <p className="text-white/60 text-xs">
                                    Frontend Developer 
                                </p>
                            </div>
                    </Link>
                    <Link   href={"https://www.linkedin.com/in/kehinde-aluko-265231151?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
                            className="flex gap-3 items-center mt-3">
                        <Image  alt={'Aluko Kehinde'} 
                                src={kenny} 
                                className="rounded-full w-10 h-10" />
                           <div className="">
                                <p className="text-white text-">
                                    Aluko Kehinde
                                </p>
                                <p className="text-white/60 text-xs">
                                    UI/UX Designer
                                </p>
                           </div>
                    </Link>
                </div>
            </div>
        </div>
    </>);
}