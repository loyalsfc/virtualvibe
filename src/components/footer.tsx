import React from 'react'
import Logo from './reusableComponents/logo'
import Image from 'next/image'

function Footer() {
    return (
        <footer className='bg-[#0A075F] pt-10 md:pt-[88px] pb-[35px] text-white px-4 sm:px-0'>
            <div className="container mx-auto">
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 md:mb-[90px]'>
                    <NavigationLinks
                        title='About'
                        links={["Why VirtualVibe ?", "Careers", "Blog", "Security", "How it works", "Terms"]}
                    />
                    <NavigationLinks
                        title='Services'
                        links={["Sport Meetings", "Tech Conference", "Musical Concerts", "Medical Seminars", "Fashion Shows", "Others"]}
                    />
                    <NavigationLinks
                        title='Plan Events'
                        links={["Create and set up", "Sell Tickets", "Online RSVP", "Online Events"]}
                    />
                    <NavigationLinks
                        title='Support'
                        links={["Help Center", "Contact Us", "Product updates"]}
                    />
                    <div className='col-span-2'>
                        <NavigationsWrapper title='Stay In The Loop'>
                            <p className="font-switzer mb-[22px] leading-normal">Join our mailing list to stay in the loop with our newest for Event and concert</p>
                            <div className='bg-white p-2 text-[12.5px] flex items-center'>
                                <div className='flex-1'>
                                    <input type="text" placeholder='Enter your email address..' className='bg-transparent text-[#959595] px-1 md:px-3 w-full placeholder:text-[#959595] placeholder:font-switzer focus:outline-none' />
                                </div>
                                <button className="bg-orange font-bold tracking-[0.79px] leading-normal shrink-0 py-3 sm:py-[15px] px-2 sm:px-4 md:px-[30px] whitespace-nowrap">Subscribe Now</button>
                            </div>
                        </NavigationsWrapper>

                    </div>
                </div>
                <div className='sm:px-5 py-8 border-t  border-white flex items-center justify-between'>
                    <Logo />
                    <div className='flex items-center gap-4 md:gap-9'>
                        <Socials name='google' />
                        <Socials name='twitter' />
                        <Socials name='facebook' />
                        <Socials name='instagram' />
                    </div>
                </div>
                <p className=' sm:py-8 px-5 text-center'>
                    <span className='text-xl font-bold'>&copy;</span>
                    <span className='font-bold'>VirtualVibe,</span>
                    <span className='text-sm font-switzer'> All rights reserved</span>
                </p>
            </div>
        </footer>
    )
}

function NavigationsWrapper({title, children}:{title: string, children: React.ReactNode}){
    return(<div className='mb-6 md:mb-0'>
        <h4 className='font-bold text-xl mb-6 md:mb-9'>{title}</h4>
        {children}
    </div>)
}

function NavigationLinks({links, title}:{links: string[], title: string}){
    return(
        <NavigationsWrapper title={title}>
            <ul className='font-switzer'>
                {links.map((item, index) => {
                    return(
                        <li key={index} className="mb-4 lg:mb-6 last:mb-0 cursor-pointer hover:underline">{item}</li>
                    )
                })}
            </ul>
        </NavigationsWrapper>
    )
}

function Socials({name}:{name: string}){
    return(
        <div className='h-4 sm:h-8 w-4 sm:w-8 relative'>
            <Image
                src={`/socials/${name}.svg`}
                fill
                alt={name}
            />
        </div>
    )
}

export default Footer