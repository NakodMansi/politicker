import React from "react";
import Image from "next/image";
import ReadySection from "@/componentsPages/ReadySection";
import Header from "@/componentsPages/Header";
import Footer from "@/componentsPages/Footer";

export default function ThankYou() {


    return (
        <div className="flex flex-col items-start w-full bg-[#1E1E1E]">
            <Header />
            
            <div className="flex flex-col items-center justify-center self-stretch py-3 px-4 md:py-11 lg:pt-[60px] lg:pb-0">
                <Image 
                    src="/thankYou.svg" 
                    width={200} 
                    height={200} 
                    alt="thank you"
                    className="md:w-[250px] lg:w-[290px]"
                />
                <p className="text-[#EDEDED] text-[clamp(2rem,3vw,4rem)] leading-[clamp(2.7rem,3vw,4rem)] font-oswald md:font-bold">
                    THANK YOU
                </p>
            </div>

            <ReadySection />

            <Footer />
        </div>
    )
}