import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';

import './TopBar.scss';

interface TopBarProps {
    title?: string;
}

const TopBar: React.FC<TopBarProps> = ({ title }) => {
    return (
        <div className='top-bar'>
            <div className="topbar-wrapper">
                <div className="top-left">
                    <span className="logo">Micro-Frontend Admin</span>
                </div>
                <div className="top-right">
                    <div className="topbar-icon-container">
                        <NotificationsNoneIcon className='icon' />
                        <span className="top-icon-badge">2</span>
                    </div>
                    <div className="topbar-icon-container">
                        <LanguageIcon className='icon' />
                    </div>
                    <div className="topbar-icon-container">
                        <SettingsIcon className='icon' />
                    </div>
                    <img src="https://1.gravatar.com/avatar/a40ff0d47b048f36e1d5590378b120fb?s=400&d=mm" alt="Raúl Escamilla" className="top-avatar" />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
