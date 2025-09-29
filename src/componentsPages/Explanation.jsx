"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Explanation() {
    const btnCss = "py-[14px] px-4 text-[clamp(1.2rem,2vw,3rem)] leading-[clamp(0.7rem,2vw,4rem)] w-[156px] bg-[#941010] text-[#FFF] rounded-[8px] transition duration-500 md:py-3 md:px-[30px] md:text-[1.5rem] md:leading-[1.5rem] md:w-[200px] lg:text-[2.5rem] lg:w-[350px] lg:leading-[2.5rem]";
    
    async function Share() {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: "This is title",
                    text: "This is text",
                    url: "www.linkedin.com/in/mansinakod",
                });

                console.log("Shared successfully!")
            } else {
                console.log("Your browser doesn't support sharing..");
            }
        } catch(error) {
            console.log("Error sharing: ", error);
        }
    }
    return (
        <div className="flex flex-col items-center py-[60px] px-4 gap-6 text-center w-full md:hidden lg:flex lg:items-start lg:flex-row lg:px-[200px] lg:gap-[70px] lg:pt-[60px] lg:pb-[100px]">
            <p className="text-[clamp(2.5rem,3vw,4rem)] leading-[clamp(2.8rem,3vw,4rem)] lg:text-left text-[#FFF]">
                Enraged that your 
                <span className="text-[#941010]">  taxes fund crimes </span> 
                against humanity?
            </p>

            <div className="flex flex-col justify-center items-center self-stretch gap-[51px] lg:w-[50%] lg:gap-[50px]">
                <Image 
                    src="/englishTemplate.png" 
                    width={100} 
                    height={100} 
                    alt="englishTemplate" 
                    style={{boxShadow: "13.58px 13.58px 2.316px 0 #994242"}}
                    className="w-[100px]"
                />

                <div className="flex flex-col justify-center items-center self-stretch gap-2">
                    <button
                        className="py-3 px-4 rounded-[10px] border border-[#A3A3A3] text-[#A3A3A3] w-[156px] text-[clamp(1.2rem,2vw,3rem)] leading-[clamp(0.7rem,1vw,2rem)]" 
                        onClick={Share}
                    >Spread these facts</button>

                    <a href="/">
                        <button className={btnCss}>Voice your right</button>
                    </a>
                </div>
            </div>
        </div>
    )
}