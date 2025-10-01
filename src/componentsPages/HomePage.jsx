"use client";
import React, { useRef, useState } from "react";
import HeroBanner from "./HeroBanner";
import Chessboard from "./Chessboard";
import SelectEmail from "./SelectEmail";
import PrepareEmail from "./PrepareEmail";
import Header from "./Header";
import Footer from "./Footer";

export default function HomePage() {
    const goToSelectMail = useRef(null);
    const goToPrepareMail =  useRef(null);
    const [num, setNum] = useState(0);

    function Scroll() {
        goToSelectMail.current.scrollIntoView({behavior: "smooth"});
    }

    function ScrollToPrepareMail(btnNumber) {
        goToPrepareMail.current.scrollIntoView({behavior: "smooth"});

        setNum(btnNumber);
    }

    return (
        <div className="bg-[#1E1E1E]">
            <Header />
            <HeroBanner goToSelectMailFunc = {Scroll}/>
            <Chessboard />
            <SelectEmail reference = {goToSelectMail} ScrollToPrepareMailFunc= {(btnNumber) => ScrollToPrepareMail(btnNumber)}/>
            <PrepareEmail reference= {goToPrepareMail} buttonNumber = {num} />
            <Footer />
        </div>
    )
} 