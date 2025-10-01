import Link from "next/link";
import React from "react";

const text = ["SICK OF ", "COMPLICITY ", "WITH CRIMES ", "IN YOUR NAME", "?"];
const textColor = ["#FFF", "#A12828", "#FFF", "#348963", "#FFF" ];

export default function HeroBanner({goToSelectMailFunc}) {
    const btnCss = "py-[6.5px] px-[16px] bg-[#941010] text-[#FFF] text-[clamp(0.9rem,1.5vw,2rem)] leading-[clamp(1.5rem,2vw,4rem)] w-fit rounded-[8px] md:py-4 md:px-[30px] w-[90%] md:w-[300px]";

    return (
        <div className="pt-[190px] px-[30px] pb-[115px] flex flex-col justify-center items-center gap-[78px] w-full text-center relative md:gap-[50px] md:py-[60px] md:px-4 lg:px-8 lg:py-[60px]">
            <div className="flex flex-col items-center gap-[6px] self-stretch z-[1]">
                <h1 className="text-[#FFF] text-[clamp(2.5rem,3vw,4rem)] leading-[clamp(2.8rem,2vw,4rem)]"
                style={{textShadow: "0 4px 4px #941010"}}>
                    sick of complicity with crimes in your name?
                </h1>

                <h3 className="text-[#888888F7] text-[clamp(1.25rem,2vw,4rem)] leading-[clamp(1.5rem,2.5vw,4rem)]">ask our politicians to respect <br /> international law.</h3>
            </div>

            <div className="absolute h-[300px] w-full top-0" style={{background: "linear-gradient(to bottom, #5B1616 0%, #1E1E1E 100%)"}}></div>

            <div className="flex flex-col items-center gap-8 self-stretch z-[1]">
                <button className={btnCss} onClick={goToSelectMailFunc}>send an email</button>
                <Link href="/about">
                    <p className="text-[#A3A3A3] font-palanquin text-[clamp(0.6rem,1.5vw,2rem)] leading-[clamp(1.5rem,2vw,4rem)]" style={{textDecoration: "underline"}}>Why should I?</p>
                </Link>
            </div>
        </div>
    )
}