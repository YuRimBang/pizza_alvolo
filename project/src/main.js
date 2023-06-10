import Header from './components/Header';
import Carousel from './components/Carousel';
import React, { useState } from "react";
import MainUnder from './components/MainUnder';
import UnderMenu from './components/UnderMenu';

function Main() {
    const [isBoxVisible, setIsBoxVisible] = useState(false);

    return (
        <div className='background'>
            <Header isBoxVisible={isBoxVisible} setIsBoxVisible={setIsBoxVisible}></Header>
      <MainUnder isBoxVisible={isBoxVisible} setIsBoxVisible={setIsBoxVisible}></MainUnder>
            <Carousel></Carousel>
            <UnderMenu></UnderMenu>
        </div>
    );
}
export default Main;