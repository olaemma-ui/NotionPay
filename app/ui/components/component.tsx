'use client'
import Image, { StaticImageData } from "next/image";
import mobile from "@/app/assets/images/Group 38.png"
import app from "@/app/assets/images/Fintech1 1-1.svg"
import comp from "@/app/assets/images/Component 1.svg"
import wallet from "@/app/assets/images/Group 36.png"

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { 
    ApplestoreSvg, 
    PlaystoreSvg, 
    SvgFull, 
    SvgLeft, 
    SvgRight, 
    Jiggle,
    SymTric,
    WishHelp,
    ReseCurb,
    WelyTics,
    ArrowUp,
    ArrowDown,
    SvgProps,
    EmailIcon
} from "./svg_components";
import Link from "next/link";
import { faq } from "@/app/data/data";
import React, { Children, ReactNode, useState } from "react";


interface CardProps{
    title: string,
    body: string,
    image: string,
    addPaddingTop?: boolean,
    reverse?: boolean,
}


export interface CarouselItemProps{
    image: StaticImageData,
    name: string,
    title: string,
    body: string,
    id: number,
}

export interface Contact{
    title: string,
    icon?: ReactNode,
    fotterText?: string,
    footerComponent?: ReactNode,
}

export interface InputProps{
    label?: string,
    placeholder?: string,
    type?: React.HTMLInputTypeAttribute,
    id?: string,
}

export const Banner : React.FC = ()=>{

    return (<>
        <section className="bg-[#112025]">
            <SvgLeft className=" z-[1]"/>
            
            <div className="max-w-[80em] w-full mx-auto md:flex flex-col justify-center items-center  md:pt-[2em]">
                {/* <div className="p-4 md:pr-0 mx py-[7.5vh] bg-white"> */}
                    <div className="md:flex flex-wrap justify-between p-4 pb-0 md:px-[4em] gap-4 max-w-[80em] w-full">
                        <div className="lg:max-w-[35em] flex flex-col justify-center">
                    
                            <div className="h-[2.1em] max-w-[20em] bg-white w-full rounded-2xl p-4 px-1 flex items-center justify-start">
                                <div className=" bg-teal-900 p-1 px-4 rounded-3xl">
                                    <p className="text-center text-white text-sm font-medium font-['Poppins'] p-0 m-0">
                                        Fast
                                    </p>
                                </div>
                                <p className="ml-2 text-black h-[1.2em] text-opacity-75 text-[.8em] font-normal font-['ABeeZee']">
                                    Limitless foreign transactions 💯
                                </p>
                            </div>

                            <p className="mt-8 text-white md:text-[2em] text-[1.5em] font-bold font-['Poppins'] leading-10">
                                A peer-to-peer &nbsp;   
                                <Image
                                    src={wallet}
                                    className="inline w-[4em]"
                                    alt={'mobile'}/>    
                                    &nbsp;
                                system enabling borderless USD transfers made for Nigerians
                            </p>

                            <p className="mt-8 text-white text-opacity-50 text-lg font-medium font-['Poppins']">
                                Send & receive money to family and friends to and from abroad, also make seamless transactions, sales, purchases & subscriptions without limits.
                            </p>

                            <div className="flex mt-8 pb-5">
                                <PlaystoreSvg className="cursor-pointer" />
                                <ApplestoreSvg className="cursor-pointer ml-3" />
                            </div>
                            
                        </div>

                        <div className=" md:mt-0 mt-12 max-w-[27em] lg:mx-0 md:mx-auto">
                            <Image
                                src={mobile}
                                objectFit=""
                                className="w-full p-0 "
                                alt={'mobile'}/>
                        </div>
                    </div>
                {/* </div> */}
            </div>
            <SvgRight className="-right-[0em] -top-[9em] w-[20em] -z-" />
            <SvgFull className="md:right-[20em] md:block hidden md:top-[30em] lg:top-[10em] z-[1]" />

        </section>
    </>);
}

const animation = { duration: 50000, easing: (t: number) => t }
export const Investors : React.FC = ()=>{
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        renderMode: "performance",
        drag: false,
        created(s) {
          s.moveToIdx(5, true, animation)
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
      });
    return (<>
        <div className="">
            <div ref={sliderRef} className="keen-slider my-5 -z-20 md:px-[4em] max-w-[80em] mx-auto">
                <div className="keen-slider__slide flex gap-6">
                    <Jiggle />
                    <SymTric />
                    <WishHelp />
                    <ReseCurb />
                    <WelyTics />
                </div>
                <div className="ml-5 keen-slider__slide flex gap-6">
                    <Jiggle />
                    <SymTric />
                    <WishHelp />
                    <ReseCurb />
                    <WelyTics />
                </div>
            </div>
        </div>
    </>);
}

export const FinancialCard : React.FC <CardProps> =(props: CardProps)=>{
    return (<>
            <div className={`${props.addPaddingTop ? 'pt-5' : ''} sm:mt-0 mt-5 bg-zinc-300 bg-opacity-30 mb-5 justify-around items-center rounded-2xl sm:flex gap-4 w-full lg:max-w-[50em] max-w-[45em] mx-auto`}>
                <Image
                    src={props.image}
                    objectFit=""
                    className="p-0 "
                    alt={'mobile'}/>

                <div className="p-4">
                    <div className="text-teal-900 text-xl font-medium font-['Poppins']">
                        {props.title}
                    </div>
                    <div className="max-w-[30em] mt-5 w-full text-teal-900 text-opacity-90 text-xs font-medium font-['Poppins']">
                        {props.body}
                        <br/>
                    </div>
                    <div className="flex mt-5 pl-0 justify-start">
                        <PlaystoreSvg className="cursor-pointer lg:w-auto md:w-full ml-0 pl-0" />
                        <ApplestoreSvg className="cursor-pointer ml-3 lg:w-auto md:w-full" />
                    </div>
                </div>
            </div>
        
    </>);
}

export const SubFinancial : React.FC =() =>{
    return (<>
        {/* <div className="md:px-[4em] p-4 lg:flex gap-4 mt-5"> */}
            <div className="w-full max-w-[20em] mx-auto max-h-[18rem] w-h-full bg-amber-500 rounded-2xl px-[3em] pt-[1.9em] md:pb-0">
                <Image
                    src={app}
                    objectFit=""
                    className="p-0"
                    alt={'mobile'}/>
            </div>
        {/* </div> */}
    </>);
}

export const SubInterface : React.FC = ()=>{
    return (<>
        <div className="w-full max-w-[20em] items-center mx-auto max-h-[18rem] w-h-full rounded-2xl">
            <Image
                src={comp}
                className="p-0 "
                alt={'mobile'}/>
        </div>
    
    </>);
}


export const TransactionCard : React.FC<CardProps> = (props: CardProps) =>{

    return (<>
        <div className={`
           ${props.reverse ? 'flex-row-reverse' : ''} flex flex-wrap items-center justify-around gap-4 md:p-[3em] p-5 bg-white rounded-2xl w-full max-w-[70em] mx-auto
        `}>
           <div className="lg:p-4">
                <div className="text-teal-900 text-3xl font-bold font-['Poppins']">
                    {props.title}
                </div>
                <div className="mt-5 w-full max-w-[30em] text-teal-900 text-opacity-90 text-sm font-medium font-['Poppins']">
                    {props.body}
                    <br/>
                </div>
                <div className="mt-5 ">
                    <Link href='/' className="text-red-600">
                        Learn more
                    </Link>
                </div>
            </div>

            <Image
                src={props.image}
                objectFit="fit"
                className="p-0 h-72 mt-5"
                alt={'mobile'}/>
        </div>
    </>);
}


export const Accordion: React.FC =() =>{
    return (<>
        <>
            {/* component */}
            <div className="m-2 space-y-2">
                {
                    faq.map((elem) => <div key={elem.id}
                        className="group flex flex-col gap-2 shadow p-5 text-white"
                        tabIndex={1}>
                        <div className="flex cursor-pointer items-center justify-between">
                            <span className="text-slate-800 text-md font-medium font-['Poppins']">
                                {elem.title}
                            </span>
                            <ArrowDown className="transition-all duration-500 group-focus:-rotate-180"/>
                        </div>
                        <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                            <p className="text-slate-500 text-base font-medium font-['Poppins'] leading-relaxed">
                                {elem.body}
                            </p>
                        </div>
                    </div>
                )}
            </div>
            </>

    </>);
}

interface CarouselProps{
    items: CarouselItemProps[]
}
export const Carousel : React.FC<CarouselProps> =(props: CarouselProps)=>{
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const [loaded, setLoaded] = useState<boolean>(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    })

    console.log({props});
    
  
    return (<>
        <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
                {
                    props.items.map((element) => <CarouselItem key={element.id} {...element} />)
                }
            </div>
        </div>

        {loaded && instanceRef.current && (
        <div className="flex justify-center m-4">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"w-[.5em] h-[.5em] rounded-full mx-1" + (currentSlide === idx ? " bg-black" : " bg-gray-400")}
              ></button>
            )
          })}
        </div>
      )}
    </>);
}

const CarouselItem : React.FC<CarouselItemProps> = (props: CarouselItemProps)=>{
    return (<>
        <div className="keen-slider__slide">
            <div className="gap-4 max-w-[60em] mx-auto md:px-[4em] p-4 flex md:flex-row flex-col items-center justify-center">
                <Image 
                    className="w-[4em] h-[4em] rounded-full"
                    src={props.image}
                    alt={props.name}
                />
                <div className="w-full max-w-[15em]">
                    <p className="md:text-left text-center text-slate-700 text-md font-medium font-['Poppins'] m-0 p-0 leading-6">
                        {props.name}
                    </p>
                    <p className="md:text-left text-center text-slate-500 text-sm font-sm font-['Poppins'] m-0 p-0">
                        {props.title}
                    </p>
                </div>
                <p className="w-full md:text-left text-center text-slate-700 text-md font-medium font-['Poppins'] leading-[1.5em]">
                    {props.body}
                </p>
            </div>
        </div>
    </>);
}

export const ContactComponent : React.FC<Contact> = (props: Contact) =>{
    return (<>
       <div className="">
            <div className="w-9 h-9 bg-teal-900 pt-[0.45em] rounded-full">
                {props.icon}
            </div>
            <p className="w-60 text-slate-800  text-xl font-bold font-['Poppins'] mt-2">
                {props.title}
            </p>
            <p className="w-60 text-slate-500 text-md font-medium font-['Poppins'] mt-2">
                {props.fotterText}
            </p>
            {props.footerComponent}
       </div>
    </>);
}

export const Input : React.FC<InputProps> = (props: InputProps)=>{
    return (<>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                {props.label}
            </label>
            <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id={props.id} 
                type={props.type} 
                placeholder={props.placeholder} />
        </div>
    </>);
}

export const TextArea : React.FC<InputProps> = (props: InputProps)=>{
    return (<>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                {props.label}
            </label>
            <textarea 
                className="shadow appearance-none border h-[10em] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id={props.id}
                placeholder={props.placeholder} />
        </div>
    </>);
}