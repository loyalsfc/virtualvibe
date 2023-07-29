import React from 'react'
import Events from './reusableComponents/events'

const recents_events = [
    {
        id: 1,
        date: "Jul 22 / 03:00 pm",
        title: "Rock Fair Musical Concert Tour Exhibition 2023 ‘’ALL ROCKIE”",
        image: "/recent-events/recent-event-1.jpg"
    },
    {
        id: 2,
        date: "Jul 22 / 03:00 pm",
        title: "All  Girls 2023 Sport Rely Racing Saga Fitness Exposure",
        image: "/recent-events/recent-event-2.jpg"
    },
    {
        id: 3,
        date: "Jul 22 / 03:00 pm",
        title: "Pep Candle Medical Tour Conference Seminar Examination",
        image: "/recent-events/recent-event-3.jpg"
    },
    {
        id: 4,
        date: "Jul 22 / 03:00 pm",
        title: "Tech Powered AI Fair Conference for all newbies ‘’AI IS ALL WE HAVE LEFT”",
        image: "/recent-events/recent-event-4.jpg"
    },
    {
        id: 5,
        date: "Jul 22 / 03:00 pm",
        title: "Tennis- Thon for all enabled Fitness Women Spa Conference Tour guide",
        image: "/recent-events/recent-event-5.jpg"
    },
    {
        id: 6,
        date: "Jul 22 / 03:00 pm",
        title: "‘’MEET THE TECH FOUNDERS” 2023 Techie gathering Conference Chitty Chatty",
        image: "/recent-events/recent-event-6.jpg"
    },
]

function RecentEvents() {
    return (
        <section className='pt-24 pb-20 px-4 md:px-0'>
            <div className="container mx-auto flex flex-col md:flex-row gap-20">
                <h2 className='text-cc-300 text-xl md:text-3xl font-bold'>
                    RECENT <br /> EVENTS
                </h2>
                <ul className='font-switzer flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mb-16'>
                    {recents_events.map(item => {
                        return (
                            <Events
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                date={item.date}
                            />
                        )})}
                </ul>
            </div>
        </section>
    )
}

export default RecentEvents