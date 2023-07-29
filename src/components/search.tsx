import React from 'react'

function Search() {
    return (
        <section className='bg-[#0A075F] py-[50px] px-4 md:px-0'>
            <div className="container mx-auto">
                <div className='max-w-[1086px] mx-auto font-switzer text-white grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-14 py-5'>
                    <Filters title='Search Event' value='Musical Concert' />
                    <Filters title='Place' value='Maryland' />
                    <Filters title='Date' value='25th July' />
                </div>
            </div>
        </section>
    )
}

function Filters({title, value}:{title: string, value: string}){
    return(
        <div>
            <label htmlFor="" className='block mb-3 px-1'>{title}</label>
            <div className='relative border-b border-b-[#7778B0] text-sm md:text-base'>
                <select name="" id="" className='text-lg md:text-[22px] font-bold bg-transparent w-full focus:outline-none'>
                    <option value={value}>{value}</option>
                </select>
            </div>
        </div>
    )
}

export default Search