import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../SharedPages/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='mt-3'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;