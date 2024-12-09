import EventDetails from '@/app/components/details/EventDetails';
import EventVenue from '@/app/components/details/EventVenue';
import HeroSection from '@/app/components/details/HeroSection';
import { getEventById } from '@/db/queries';
import React from 'react';

const details =  async({params: {id}}) => {
  const eventInfo = await getEventById(id);
  console.log(eventInfo);
    return (
      <>
        <HeroSection eventInfo={eventInfo} />
        <section className="container">
          <div className="grid grid-cols-5 gap-12 my-12">
            <EventDetails
              details={eventInfo?.details}
              swags={eventInfo?.swags}
            />
            <EventVenue location={eventInfo?.location} />
          </div>
        </section>
      </>
    );
};

export default details;