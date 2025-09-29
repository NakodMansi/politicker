"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import phoneImg from "../../public/phoneImg.svg";

export default function ReadySection() {
    const [screenSize, setScreenSize] = useState(0);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="md:flex md:items-center md:justify-between md:self-stretch md:py-[60px] md:px-8 lg:px-[100px]" style={{background: "linear-gradient(180deg, #1E1E1E 27.87%, #5F1717 98.29%)"}}>
            <div className="flex flex-col items-center text-center gap-7 self-stretch py-[50px] px-4 md:p-0 md:justify-between md:text-left lg:justify-center lg:gap-[100px]">
                <p className="self-stretch text-[#FFF] text-[clamp(4.3rem,5vw,6rem)] leading-[clamp(4.3rem,5vw,6rem)] px-5 md:text-left">
                    {screenSize > 1023 ? "App coming soon..." : "App coming out soon..."}
                </p>

                <Image src={phoneImg} width={200} height={10} alt="phone image" className="md:hidden" />

                <p className="text-[clamp(4.1rem,5vw,6rem)] leading-[clamp(4.1rem,5vw,6rem)] text-[#FFF]">
                    Stay tuned for 
                    <span className="text-[#A12828]"> upcoming</span>
                    <span className="text-[#266247]"> letters</span>
                    , petitions and much more! 
                </p>
            </div>

            <Image src="/phoneImg.svg" width={270} height={0} alt="phone image" className="hidden md:block" />
        </div>
    )
}