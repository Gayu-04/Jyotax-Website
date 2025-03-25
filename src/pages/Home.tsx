import React from 'react';
import Hero from '../components/Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Pricing from './Pricing';
import FAQ from '../components/FAQ';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;