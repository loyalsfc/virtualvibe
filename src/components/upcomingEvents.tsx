import React from 'react'
import Events from './reusableComponents/events'

const upcoming_events = [
    {
        id: 1,
        date: "Jul 22 / 03:00 pm",
        title: "Pep Candle Medical Tour Conference Seminar Examination",
        image: "/upcoming-events/event-1.jpg"
    },
    {
        id: 2,
        date: "Jul 24 / 03:00 pm",
        title: "All  Girls 2023 Sport Rely Racing Saga Fitness Exposure",
        image: "/upcoming-events/event-2.jpg"
    },
    {
        id: 3,
        date: "Jul 25 / 06:00 pm",
        title: "Tennis- Thon for all enabled Fitness Women Spa Conference Tour guide",
        image: "/upcoming-events/event-3.jpg"
    },
    {
        id: 4,
        date: "Jul 27 / 11:00 am",
        title: "Tech Powered AI Fair Conference for all newbies ‘’AI IS ALL WE HAVE LEFT”",
        image: "/upcoming-events/event-4.jpg"
    },
    {
        id: 5,
        date: "Jul 28 / 02:00 pm",
        title: "Rock Fair Musical Concert Tour Exhibition 2023 ‘’ALL ROCKIE”",
        image: "/upcoming-events/event-5.jpg"
    },
    {
        id: 6,
        date: "Jul 29 / 12:00 pm",
        title: "‘’MEET THE TECH FOUNDERS” 2023 Techie gathering Conference Chitty Chatty",
        image: "/upcoming-events/event-6.jpg"
    },
]

function UpcomingEvents() {
    return (
        <section className='pt-12 md:pt-40 pb-14 px-4 md:px-0'>
            <div className="container mx-auto">
                <div className="max-w-[1118px] mx-auto">
                    <div className='mb-8 md:mb-20 flex gap-4 md:gap-0 flex-col sm:flex-row justify-between items-center'>
                        <h2 className='text-xl md:text-3xl lg:text-[2.5rem] font-bold text-cc-300'>UPCOMING EVENTS</h2>
                        <div className='flex gap-1 md:gap-4 lg:gap-5'>
                            <Filters>
                                <option value="">Weekdays</option>
                            </Filters>
                            <Filters>
                                <option value="">Event Types</option>
                            </Filters>
                            <Filters>
                                <option value="">Any Category</option>
                            </Filters>
                        </div>
                    </div>
                    <ul className='font-switzer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mb-8 md:mb-16'>
                        {upcoming_events.map(item => {
                            return (
                                <Events
                                    key={item.id}
                                    image={item.image}
                                    title={item.title}
                                    date={item.date}
                                />
                            )})}
                    </ul>
                    <button className='border-[1.5px] border-cc-200 shadow-btn py-2 md:py-[18px] px-8 sm:px-[45px] font-dm-sans text-cc-300 font-bold text-lg block mx-auto hover:bg-cc-200 hover:text-white transition-all'>
                        Load More
                    </button>
                </div>
            </div>
        </section>
    )
}

function Filters({children}:{children: React.ReactNode}){
    return (
        <div className='border border-cc-200 rounded-[50px] px-1 py-1 md:px-3 md:py-2.5 lg:px-6 lg:py-3.5'>
            <select className='font-switzer text-sm font-medium text-cc-300 bg-transparent focus:outline-none sm:pr-1 md:pr-8'>
                {children}
            </select>
        </div>
    )
}

export default UpcomingEvents