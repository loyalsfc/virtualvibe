'use client'

import React from 'react'

const questions_list = [
    {
        number: "01",
        question: "Why should I choose VirtualVibe ?"
    },
    {
        number: "02",
        question: "Do I have to pay to create an event ?"
    },
    {
        number: "03",
        question: "What are the requirements to attend ?"
    },
    {
        number: "04",
        question: "What are the requirements to attend ?"
    },
    {
        number: "05",
        question: "How do I get my virtual ticket ?"
    },
]

function Faq() {
    return (
        <section className='pb-20 md:pb-[169px] px-4 md:px-0'>
            <div className="container mx-auto">
                <div className="max-w-[1191px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-36">
                    <article>
                        <span className='grid place-content-center w-fit p-6 mb-8 md:mb-[3.75rem] bg-[#F2F4FF] rounded-xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M28.8839 1.61615C29.2574 1.98969 29.3558 2.55773 29.1297 3.03514L17.8797 26.7851C17.6537 27.2623 17.1522 27.546 16.6268 27.494C16.1014 27.4419 15.6654 27.0654 15.5373 26.5532L13.2192 17.2808L3.94683 14.9627C3.43463 14.8347 3.05811 14.3986 3.00608 13.8732C2.95406 13.3478 3.23775 12.8464 3.71489 12.6204L27.4649 1.37036C27.9423 1.14422 28.5103 1.24261 28.8839 1.61615ZM7.94169 13.3845L14.5532 15.0374C15.001 15.1493 15.3507 15.499 15.4627 15.9469L17.1156 22.5583L25.372 5.12801L7.94169 13.3845Z" fill="#425095"/>
                            </svg>
                        </span>
                        <h3 className='text-cc-300 text-[34px] font-bold mb-3'>FAQS</h3>
                        <p className='font-switzer md:text-lg text-[#6F7782] leading-normal'>We are here to answer all you questions, that’s what we do at VirtualVibe. We are here to answer all you questions, that’s what we do at VirtualVibe</p>
                    </article>
                    <ul>
                        {questions_list.map(item => {
                            return(
                                <Questions key={item.number} number={item.number} title={item.question} />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

function Questions({number, title}:{number:string, title: string}){
    const showAnswer = (e: React.MouseEvent<HTMLElement>) => {
        e.currentTarget.nextElementSibling?.classList.toggle('h-0')
    }

    return (
        <li className='border border-[#0A075F] p-2 md:p-5 mb-[22px] last:mb-0'>
            <h4 onClick={showAnswer} className='text-cc-300 font-dm-sans cursor-pointer leading-normal flex items-center gap-4 md:gap-[22px]'>
                <span className='w-[30.5px] border-r border-cc-200'>{number}</span>
                <span>{title}</span>
                <span className='ml-auto text-xl'>+</span>
            </h4>
            <p className='text-cc-200 text-sm h-0 transition-all overflow-hidden'>
                <span className='block pt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, voluptatibus minima? Ducimus maiores iste fugit dolores, saepe et obcaecati, illo reiciendis voluptates velit quis at ea ex unde quos corporis.</span>
            </p>
        </li>
    )
}

export default Faq