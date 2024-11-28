import React from 'react';
import NavBar from '../components/NavBar.jsx';
import Hero from '../components/Hero.jsx';
import HomeCards from '../components/HomeCards.jsx';
import JobListings from '../components/JobListings.jsx';
import ViewAllJobs from '../components/ViewAllJobs.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default Home;
