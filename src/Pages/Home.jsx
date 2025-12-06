import React from 'react';
import Banner from '../Components/Home/Banner';
import Category from '../Components/Home/Category';
import RecentListing from '../Components/Home/RecentListing';
import About from '../Components/Home/About';
import PetHeros from '../Components/Home/PetHeros';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category/>
            <RecentListing/>
            <About/>
            <PetHeros/>
        </div>
    );
};

export default Home;