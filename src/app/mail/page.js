"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const data = ["Human rights committee", "Foreign affairs committee", "EU matters committee"];

export default function SendEmail() {
    const btnCss = "px-4 bg-[#A12828] w-full text-[#FFF] md:w-fit md:text-[2rem] lg:text-[3.1rem]";
    const [screenSize, setScreenSize] = useState(0);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        console.log(screenSize);
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {window.removeEventListener("resize", handleResize);}
    },[]);

    return (
        <div className="flex flex-col gap-[30px] justify-center items-start py-10 px-4 w-full bg-[#FFF] md:px-8 md:gap-[60px] lg:py-[60px] lg:px-[150px]">
            <div className="flex flex-col gap-[10px] justify-center items-center self-stretch md:gap-2 lg:gap-1">
                <h1 className="text-[#383535] text-[3.2rem] leading-[3rem] md:text-[5.6rem] md:leading-[5.6rem] lg:text-[8.8rem] lg:leading-[8.8rem]">3. Finalize email</h1>
                <p className="text-[#5C5C5C] text-[1.8rem] leading-[1.8rem] md:text-[3rem] md:leading-[3rem] lg:text-[4.6rem] lg:leading-[4.6rem]">3 clicks for 3 committees</p>
            </div>
            
            <div className="flex flex-col gap-5 items-start self-stretch md:flex-row md:w-full md:gap-4 md:justify-between md:gap-0">
                {
                    data.map((text, index) => (
                        <div className="flex items-center justify-between gap-[44px] px-4 self-stretch md:w-full md:p-0" key={index}>
                            <div className="flex flex-col gap-[10px] justify-center items-center w-[150px] md:w-full md:flex-col-reverse md:gap-6 md:gap-10">
                                <p className="text-[#383535] leading-[1.1rem] md:text-[1.5rem] md:leading-[1.5rem] md:text-center md:text-[2.3rem] md:leading-[3.1rem]" style={{fontFamily: screenSize>769&&"palanquin"}}>{text}</p>
                                
                                <Image 
                                    src="/englishTemplate.png" 
                                    width={120} 
                                    height={120} 
                                    alt="template" 
                                    style= {{boxShadow: screenSize<769?"10.387px 10.387px 5.666px 0 #994242":"10.768px 10.768px 3.554px 0 #994242"}} 
                                    className="hidden md:block lg:w-[230px]"
                                />
                                
                                <button className={btnCss}>open in mail</button>
                            </div>
                            
                            <Image 
                                src="/englishTemplate.png" 
                                width={80} 
                                height={90} 
                                alt="template" 
                                className="md:hidden"
                                style= {{boxShadow: "10.387px 10.387px 5.666px 0 #994242"}} 
                            />
                        </div>
                    ))
                }
            </div>
            
            <Link href="/thankYou">
                <button className="w-[150px] bg-[#888] ml-4 text-[#FFF] md:hidden">Done</button>
            </Link>
        </div>
    )
}