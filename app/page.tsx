

import { Accordion, Banner, Carousel, CarouselItemProps, ContactComponent, FinancialCard, Input, Investors, SubFinancial, SubInterface, TextArea, TransactionCard, } from "./ui/components/component";
import { Navbar } from "./ui/layout/navbar";
import bills from "@/app/assets/images/Fintech1 1.svg"
import bills2 from "@/app/assets/images/Fintech1 1-2.svg"

import cover1 from "@/app/assets/images/Frame 14332.svg"
import cover2 from "@/app/assets/images/Frame 14332-1.svg"
import { ArrowLeft, ArrowRight, Badge, EmailIcon, FacebookIcon, InstagramIcon, LinkedinIcon, MapMarkerIcon, PhoneIcon, SocialIcon, XIcon } from "./ui/components/svg_components";
import { carouseData } from "./data/data";
import { Footer } from "./ui/layout/footer";


export default function LandingPage() {
    return (<>
        <div className="">
            <Navbar />
            <Banner />
            
            
            <div className="max-w-[80em] w-full mx-auto my-5 mb-2">
                <p className="text-center px-4 text-slate-300 text-base font-medium font-['Poppins'] leading-normal">
                    Join 4,000+ customers already growing
                </p>
            </div>
            <Investors/>
            <Badge text="Features" />
            <h3 className="text-center text-sky-900 px-4 mx-auto text-2xl mb-1 font-medium font-['Poppins']">
                Transforming Your Financial Experience  😍
            </h3>
            <div className="max-w-[50em] text-center px-4 mb-5 mx-auto text-slate-500 text-sm font-medium font-['Poppins']">
                Get a real-time overview of your financial health with our intuitive dashboard. Track your spending, monitor investments, and plan for the future—all in one place.
            </div>
            <div className="">

                <div className="bg-white w-full md:px-[4em]  max-w-[80em] mx-auto p-4 justify-between flex flex-wrap gap-4 mt-5">
                    <FinancialCard 
                        body=" Tailored financial advice at your fingertips. Notionpay provides personalized insights and 
                        recommendations to help you make informed decisions about your money." 
                        title="Personalized Financial "
                        image={bills}
                        // addPaddingTop={false}
                    />
                    <SubFinancial/>
                    <SubInterface/>
                    <FinancialCard 
                        body="  No more navigating through complex menus. 
                        Our user-friendly interface makes managing your finances a breeze. 
                        Spend less time figuring out your app and more time focusing on what matters to you." 
                        title="Intuitive User Interface"
                        image={bills2}
                        addPaddingTop
                    />
                    {/* <Interface /> */}
                </div>

            </div>

            <div className="bg-zinc-300 bg-opacity-30 sm:p-[4em] p-4">
                <TransactionCard 
                    body="Send & receive money to family and friends to and from abroad, also make seamless 
                    transactions, sales, purchases & subscriptions without limits." 
                    title="Limitless Dollar Transactions"
                    addPaddingTop={false}
                    image={cover1}
                />
                <div className="mt-10"></div>
                <TransactionCard 
                    body="Notionpay can be a useful tool for shopping online.
                    paying for online subscriptions and managing international stores. 
                    its the best platform for small to large enterpreneurs." 
                    title="Mode for Everyone Everywhere."
                    addPaddingTop={false}
                    image={cover2}
                    reverse
                />
            </div>

            <div className="bg-[#112025] ">
                <div className="flex justify-between w-full max-w-[80em] md:p-[4em] mx-auto">
                    <ArrowRight className="self-start"/>
                    <div className="flex flex-col py-4">
                        <p className="text-center text-white text-2xl font-extrabold font-['Poppins'] mb-5">
                            Have more Questions?
                        </p>
                        <div className="text-center text-white text-sm font-medium font-['Poppins']">
                            Contact our support and we are always there to answer your questions
                        </div>

                        <button className="w-36 h-12 px-5 py-2.5 rounded-xl border-2 mx-auto mt-5 border-teal-900 justify-center items-center gap-2.5 inline-flex">
                            <p className="text-center text-white text-xl font-medium m6-5 font-['Poppins']">
                                Download
                            </p>
                        </button>
                    </div>
                    <ArrowLeft className="self-end" />
                </div>
            </div>

            <div className="p-5 pb-0">
                <Badge text="FAQ" />

                <p className="mx-auto text-center text-gray-800 text-4xl mb-1 font-bold font-['Poppins']">
                    Frequently Asked Questions
                </p>
                <p className="mx-auto text-center text-slate-500 text-xl font-medium font-['Poppins']">
                    You asked, we answered. Here are some answers to your questions
                </p>
            </div>

            <div className="mx-auto max-w-[55em] w-full bg-white md:px-[4em] p-4">
                <Accordion />
            </div>

            <Badge text="Testimonials" />
            <Carousel items={carouseData}/>
            <div className="md:mt-12 mt-5"></div>
            <Badge text="Contact" />
            <div className="flex gap-4 md:flex-row flex-col items-center justify-center max-w-[60em] gap-4 md:px-[4em] p-4 mx-auto">
                <div className="left">
                    <p className="text-slate-800 text-2xl md:text-left text-center font-semibold font-['Poppins']">
                        Let’s stay connected
                    </p>

                    <p className="text-slate-500 text-sm md:text-left text-center font-medium font-['Poppins']">
                        {`It's never been easier to get in touch with us. Call us, use our live chat widget or 
                        email and we'll get back to you as soon as possible!`}
                    </p>
                </div>

                <div className="flex gap-4 md:mt-0 mt-5">
                    <button className="w-[10em] h-[2.5em] px-6 py-3.5 bg-teal-900 rounded-md shadow justify-center items-center gap-2 inline-flex">
                        <p className="text-green-50 text-xs font-small font-['Poppins']">
                            Open Positions
                        </p>
                    </button>
                    <button className="w-[8em] h-[2.5em] px-6 py-3.5 bg-white rounded-md shadow border border-gray-300 justify-center items-center gap-2 inline-flex">
                        <p className="text-slate-700 text-xs font-small font-['Poppins']">
                            About Us
                        </p>
                    </button>
                </div>
            </div>

            <div className="mx-auto max-w-[70em] md:p-[4em] p-4">
                <div className="md:flex items-start">
                    <div className="flex flex-wrap mb-5 gap-4 max-w-[45em]">

                        <ContactComponent {...{ title: 'Email', 
                                                icon: <EmailIcon className='mx-auto my-auto w-5 h-5'/>,
                                                fotterText: 'Olaemma4213@gmail.com'
                                        }}/>
                        <ContactComponent {...{ title: 'Phone', 
                                                icon: <PhoneIcon className='mx-auto my-auto w-5 h-5'/>,
                                                fotterText: '(+234) 815-2715-095'
                                        }}/>
                        <ContactComponent {...{ title: 'Location', 
                                                icon: <MapMarkerIcon className='mx-auto my-auto w-5 h-5'/>,
                                                fotterText: 'Ogun state, Lagos state'
                                        }}/>
                        <ContactComponent {...{ title: 'Social', 
                                                icon: <SocialIcon className='mx-auto my-auto w-5 h-5'/>,
                                                footerComponent: <div className="flex gap-6 flex-wrap mt-3">
                                                    <FacebookIcon/>
                                                    <XIcon/>
                                                    <InstagramIcon/>
                                                    <LinkedinIcon/>
                                                </div>
                                        }}/>
                    </div>

                    <div className="form bg-gray-100 md:min-w-[25em] rounded-md shadow md:p-[2em] p-[1em]">
                        <Input {...{label: 'Email address', placeholder: 'example@domain.com'}}/>
                        <div className="mb-5"/>
                        <TextArea {...{label: 'Message', placeholder: 'Yor message.....'}}/>
                        <div className="mb-5"/>
                        <button className="w-full h-[2.5em] px-6 py-3.5 bg-teal-900 rounded-md shadow justify-center items-center gap-2 inline-flex">
                            <p className="text-green-50 text-xs font-small font-['Poppins']">
                                Send
                            </p>
                        </button>
                    </div>
                </div>

            </div>

            <Footer/>
        </div>
        
    </>);
}