import React from 'react';
import './AppShell.scss';
import { BrowserRouter, Outlet, Link, Routes, Route as NavRoute } from 'react-router-dom'
import { NavLink, Route } from  '../../routes';

import SideBar from 'shell_mf/SideBar';
import TopBar from 'shell_mf/TopBar';

interface AppShellProps {
    routes: Route[];
    navLinks: NavLink[];
}

const AppShell: React.FC<AppShellProps> = ({ routes, navLinks }) => {
    return (
        <div className='app-shell'>
        <TopBar />
        <div className="container">
            <BrowserRouter>
            <SideBar navLinks={navLinks} />
                <div className="content">
                    <Routes>
                        {routes.map((route)=>(
                                <NavRoute 
                                    key={route.path}
                                    path={route.path} 
                                    element={<route.element />} />
                            )
                        )}
                    </Routes>
                    <Outlet />
                </div>
            </BrowserRouter>
        </div>   
    </div>
    );
};

export default AppShell;
