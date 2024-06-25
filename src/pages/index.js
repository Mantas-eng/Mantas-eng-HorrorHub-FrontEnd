import React from 'react';

import "../components/styles/styles.module.scss";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import DownloadSection from "../components/DownloadSection/downloadSection";
import Footer from "../components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';  

function Main() {
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Header />
            </div>
            <div className='Download'>
                <DownloadSection/>
            </div>
            <div className='Footer'>
                <Footer/>
            </div>
        </div>
    );
}

export default Main;