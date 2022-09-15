import React from 'react';
import './FeaturedInfo.scss';
import {ArrowDownward, ArrowUpward} from '@mui/icons-material/';

const FeaturedInfo = () => {
    return (
        <div className="featured-info">
            <div className="featured-item">
                <span className="featured-title">Revenue</span>
                <div className="featured-money-container">
                    <span className="featured-money">$2,575.00</span>
                    <span className="featured-money-rate negative">-11.4 <ArrowDownward className='featured-icon' /></span>
                </div>
                <span className="featured-sub">Compared to last month</span>
            </div>
            <div className="featured-item">
                <span className="featured-title">Sales</span>
                <div className="featured-money-container">
                    <span className="featured-money">$1,525.00</span>
                    <span className="featured-money-rate negative">-1.4 <ArrowDownward className='featured-icon' /></span>
                </div>
                <span className="featured-sub">Compared to last month</span>
            </div>
            <div className="featured-item">
                <span className="featured-title">Cost</span>
                <div className="featured-money-container">
                    <span className="featured-money">$2,120.00</span>
                    <span className="featured-money-rate positive">2.3 <ArrowUpward className='featured-icon' /></span>
                </div>
                <span className="featured-sub">Compared to last month</span>
            </div>
        </div>
    );
};

export default FeaturedInfo;
