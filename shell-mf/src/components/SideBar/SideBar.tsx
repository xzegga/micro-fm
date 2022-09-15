import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';

interface NavLink {
    label: string;
    path: string;
    icon: any
  }
  
interface SideBarProps {
    navLinks: NavLink[];
}

const SideBar: React.FC<SideBarProps> = ({navLinks}) => {

    return (
        <div className="side-bar">
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">
                        Dashboard
                    </h3>
                    <ul className="sidebar-list">
                        {navLinks.map((link)=>(
                            <li key={link.path} className="sidebar-list-item">
                                <Link to={link.path}>
                                    <link.icon className='item-icon'/>{link.label}
                                </Link>
                            </li> 
                        ))}                    
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
