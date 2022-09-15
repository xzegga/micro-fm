import React, { Suspense } from 'react';
import Chart from '../components/Chart/Chart';
//import FeaturedInfo from 'shell_mf/FeaturedInfo';
import './Home.scss';

const FeaturedInfo = React.lazy(()=> import('shell_mf/FeaturedInfo'));

const Home = () => {
    return (
        <div className="home-content">
            <Suspense fallback={<div>Something went wrong</div>}><FeaturedInfo /></Suspense>
            <Chart />
        </div>
    );
};

export default Home;
