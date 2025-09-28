"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Explanation() {
    const btnCss = "py-[6px] px-2 w-[150px] bg-[#941010] text-[#FFF] lg:w-fit lg:text-[2.5rem] lg:py-3 lg:leading-[2.5rem]";

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
            <p className="text-[3.1rem] leading-[3.1rem] lg:text-left lg:text-[6rem] lg:leading-[6rem] text-[#FFF]">
                Enraged that <br/>
                <span className="text-[#266247]"> your taxes <br /> </span> 
                fund
                <span className="text-[#A12828]"> crimes <br /> </span>
                against humanity?
            </p>

            <div className="flex flex-col justify-center items-center self-stretch gap-4 lg:w-[50%] lg:gap-[50px]">
                <div className="flex flex-col items-center gap-6 lg:gap-[40px]">
                    <Image 
                        src="/englishTemplate.png" 
                        width={140} 
                        height={100} 
                        alt="englishTemplate" 
                        style={{boxShadow: "7.58px 7.58px 2.316px 0 #994242"}}
                        className="w-[200px]"
                    />

                    {/* <a href="#"> */}
                        <p 
                            className="text-[#A3A3A3] text-[1.3rem] lg:text-[2rem]" 
                            style={{textDecoration: "underline", cursor: "pointer"}}
                            onClick={Share}
                        >Spread these facts</p>
                    {/* </a> */}
                </div>

                <Link href="/">
                    <button className={btnCss}>Voice your right</button>
                </Link>
            </div>
        </div>
    )
}