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

        return () => {window.removeEventListener("resize", handleResize);}
    },[]);

    return (
        <div className="flex flex-col items-start w-full bg-[#1E1E1E]" >
            <div className="flex flex-col items-center justify-center self-stretch py-3 px-4 md:py-11 lg:pt-[60px] lg:pb-10">
                    <Image 
                        src="/thankYou.svg" 
                        width={200} 
                        height={200} 
                        alt="thank you"
                        className="md:w-[300px] lg:w-[310px]"
                    />
                    <p className="text-[#EDEDED] text-[2.8rem] leading-[3.7rem] font-oswald md:text-[2.2rem] md:leading-[2.5rem] md:font-bold lg:text-[2.6rem] lg:leading-[3.3rem]">THANK YOU</p>
            </div>

            <div className="md:flex md:items-center md:justify-between md:self-stretch md:py-[60px] md:px-8 lg:py-[60px] lg:px-[150px]" style={{background: "linear-gradient(180deg, #1E1E1E 27.87%, #5F1717 98.29%)"}}>
                <div className="flex flex-col items-center text-center gap-7 self-stretch py-[50px] px-4 md:p-0 md:justify-between md:text-left">
                    <p className="self-stretch text-[#FFF] text-[4.3rem] leading-[4.3rem] md:text-left md:text-[6.5rem] md:leading-[6.5rem] lg:text-[8rem] lg:leading-[8rem]">{screenSize>1023?"App coming soon...":"App coming out soon..."}</p>

                    <Image src="/phoneImg.svg" width={200} height={0} alt="phone image" className="md:hidden"/>

                    <p className="text-[4.1rem] leading-[4.1rem] text-[#FFF] lg:text-[5rem] lg:leading-[5rem]">
                        Stay tuned for 
                        <span className="text-[#A12828]"> upcoming</span>
                        <span className="text-[#266247]"> letters</span>
                        , petitions and much more! 
                    </p>
                </div>
                
                <Image src="/phoneImg.svg" width={300} height={0} alt="phone image" className="hidden md:block"/>
                
            </div>
        </div>
    )
}