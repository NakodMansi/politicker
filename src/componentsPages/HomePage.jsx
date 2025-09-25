import React from "react";
import HeroBanner from "./HeroBanner";
import Chessboard from "./Chessboard";
import SelectEmail from "./SelectEmail";
import PrepareEmail from "./PrepareEmail";

export default function HomePage() {
    return (
        <div>
            <HeroBanner />
            <Chessboard />
            <SelectEmail />
            <PrepareEmail />
        </div>
    )
} 