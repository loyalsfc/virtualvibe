import Image from 'next/image'
import React from 'react'

function Logo() {
    return (
        <h2 className='flex items-center gap-1'>
            <Image
                src="/logo.svg"
                height={32}
                width={32}
                alt="Logo"
            />
            <span className='text-xl font-bold leading-[1.2]'>VirtualVibe</span>
        </h2>
    )
}

export default Logo