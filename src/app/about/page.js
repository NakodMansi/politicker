import Explanation from "@/componentsPages/Explanation";
import MainContainer from "@/componentsPages/MainContainer";
import ReadySection from "@/componentsPages/ReadySection";
import SectionFour from "@/componentsPages/SectionFour";
import SectionTwo from "@/componentsPages/SectionTwo";
import React from "react";

export default function About() {
    return (
        <div className="bg-[#1E1E1E]">
            <Explanation />
            <SectionTwo />
            <MainContainer />
            <SectionFour />
            <ReadySection />
        </div>
    )
}