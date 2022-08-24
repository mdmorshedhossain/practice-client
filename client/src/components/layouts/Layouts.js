import React from 'react';
import Header from '../header/Header';
import { Outlet } from "react-router-dom";
// import Footer from '../footer/Footer';

const Layouts = ({ childdren }) => {
    return (
        <>
            <Header />
            <div>{childdren}</div>
            <div className="content">
                <Outlet />
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Layouts;