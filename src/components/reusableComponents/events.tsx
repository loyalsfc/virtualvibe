import Image from 'next/image'
import React from 'react'

function Events({image, date, title}:{image:string, date:string, title:string}) {
    return (
        <li className='pb-[22px] event-shadow bg-white'>
            <div className="relative aspect-[1.55/1] overflow-hidden">
                <Image
                    src={image}
                    fill
                    alt={title}
                    className=' object-cover transition-all hover:scale-125'
                />
            </div>
            <article className='text-[#6A6A6A] text-sm leading-normal p-2 flex flex-col gap-2'>
                <span className=''>{date}</span>
                <h3 className='text-black font-bold text-base'>{title}</h3>
                <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
            </article>
        </li>
    )
}

export default Events