"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function ThankYou() {
    const [screenSize, setScreenSize] = useState(0);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        console.log(screenSize);
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex flex-col items-start w-full bg-[#1E1E1E]">
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

            <div className="md:flex md:items-center md:justify-between md:self-stretch md:py-[60px] md:px-8 lg:px-[100px]" style={{background: "linear-gradient(180deg, #1E1E1E 27.87%, #5F1717 98.29%)"}}>
                <div className="flex flex-col items-center text-center gap-7 self-stretch py-[50px] px-4 md:p-0 md:justify-between md:text-left lg:justify-center lg:gap-[100px]">
                    <p className="self-stretch text-[#FFF] text-[3.7rem] leading-[3.7rem] md:text-[5rem] md:leading-[4.5rem] md:text-left lg:text-[6.5rem] lg:leading-[6.5rem]">
                        {screenSize > 1023 ? "App coming soon..." : "App coming out soon..."}
                    </p>

                    <Image src="/phoneImg.svg" width={200} height={0} alt="phone image" className="md:hidden" />

                    <p className="text-[3.5rem] leading-[3.5rem] md:text-[3.9rem] md:leading-[4rem] lg:text-[5rem] lg:leading-[5rem] text-[#FFF]">
                        Stay tuned for 
                        <span className="text-[#A12828]"> upcoming</span>
                        <span className="text-[#266247]"> letters</span>
                        , petitions and much more! 
                    </p>
                </div>

                <Image src="/phoneImg.svg" width={270} height={0} alt="phone image" className="hidden md:block" />
            </div>
        </div>
    )
}