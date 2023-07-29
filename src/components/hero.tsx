import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <section className='pt-8 pb-20 px-4 md:px-0'>   
            <div className="container mx-auto flex flex-col md:flex-row gap-12 md:gap-0">
                <article className='md:w-1/3 shrink-0 pt-10 text-center md:text-left'>
                    <h1 className='text-cc-400 text-3xl lg:text-5xl font-bold mb-[22px]'>Unleash the Power of Virtual Networking</h1>
                    <p className='text-lg lg:text-xl font-dm-sans m-8 md:mb-[55px]'>Secure Your Spot for a Journey into Innovation, Inspiration, and Impact from the comfort of your home</p>

                    <button className="bg-orange hover:opacity-75 transition-all py-5 px-10 font-semibold text-white font-work-sans">Create an event</button>
                </article>
                <div className='flex-1 md:pl-8 lg:px-16'>
                    <div className='grid grid-cols-2 gap-5 px-[18px]'>
                        <HeroImageWide image='1'/>
                        <HeroImageWide image='2'/>
                    </div>
                    <div className='grid grid-cols-3 gap-3 my-2'>
                        <HeroImageWide image='3'/>
                        <HeroImageWide image='4'/>
                        <HeroImageWide image='5'/>
                    </div>
                    <div className='grid grid-cols-2 gap-5 px-[18px]'>
                        <HeroImageWide image='6'/>
                        <HeroImageWide image='7'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

function HeroImageWide({image}:{image: string}){
    return(
        <div className='rounded-xl aspect-[1.39/1] relative overflow-hidden'>
            <Image
                src={`/hero/hero-${image}.jpg`}
                fill
                alt="image"
                className=' object-cover transition-all hover:scale-110'
            />
        </div>
)
}

export default Hero