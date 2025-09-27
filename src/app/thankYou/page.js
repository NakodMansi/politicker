import React from "react";
import Image from "next/image";
import ReadySection from "@/componentsPages/ReadySection";
import Header from "@/componentsPages/Header";

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
                <p className="text-[#EDEDED] text-[2rem] leading-[2rem] font-oswald md:text-[2.2rem] md:leading-[2.5rem] md:font-bold lg:text-[2.6rem] lg:leading-[3.3rem]">
                    THANK YOU
                </p>
            </div>

            <ReadySection />
        </div>
    )
}