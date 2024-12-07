import EventDetails from '@/app/components/details/EventDetails';
import EventVenue from '@/app/components/details/EventVenue';
import HeroSection from '@/app/components/details/HeroSection';
import React from 'react';

const details = () => {
    return (
      <>
        <HeroSection />
        <section class="container">
          <div class="grid grid-cols-5 gap-12 my-12">
            <EventDetails />
            <EventVenue />
          </div>
        </section>
      </>
    );
};

export default details;