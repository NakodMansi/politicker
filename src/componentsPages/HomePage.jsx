"use client";
import React, { useRef } from "react";
import HeroBanner from "./HeroBanner";
import Chessboard from "./Chessboard";
import SelectEmail from "./SelectEmail";
import PrepareEmail from "./PrepareEmail";

export default function HomePage() {
    const goToSelectMail = useRef(null);
    const goToPrepareMail =  useRef(null);

    function Scroll() {
        goToSelectMail.current.scrollIntoView({behavior: "smooth"});
    }

    function ScrollToPrepareMail() {
        goToPrepareMail.current.scrollIntoView({behavior: "smooth"});
    }

    return (
        <div>
            <HeroBanner goToSelectMailFunc = {Scroll}/>
            <Chessboard />
            <SelectEmail reference = {goToSelectMail} goToPrepareMailFunc = {ScrollToPrepareMail}/>
            <PrepareEmail Reference = {goToPrepareMail} />
        </div>
    )
} 