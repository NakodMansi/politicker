import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SectionFour() {
    const btnCss = "py-[14px] px-4 text-[clamp(1.2rem,2vw,3rem)] leading-[clamp(0.7rem,2vw,4rem)] w-[156px] bg-[#941010] text-[#FFF] rounded-[8px] transition duration-500 md:py-3 md:px-[30px] md:text-[1.5rem] md:leading-[1.5rem] md:w-[200px] lg:text-[2.5rem] lg:w-[350px] lg:leading-[2.5rem]";
    
    return (
        <div className="flex flex-col justify-end items-center text-center w-full gap-[64px] pt-[80px] px-4 pb-[57px]">
            <p className="text-[#FFF] text-[clamp(2.5rem,3vw,4rem)] leading-[clamp(2.5rem,3vw,4rem)] w-[90%]">feel helpless when watching the news?</p>

            <div className="flex flex-col items-center gap-4 w-[47vw]">
                <div className="flex flex-col items-center gap-3">
                    <Image 
                        src="/chessBoard.svg" 
                        width={100} 
                        height={100} 
                        className="w-[47vw] md:w-[224px] transition duration-500" 
                        alt="templates" 
                    />

                    <p className="text-[#6E6D6D] text-[clamp(1.2rem,2vw,3rem)] leading-[clamp(1.5rem,2vw,3rem)]" style={{textShadow: "-10px -5px 4px rgba(0, 0, 0, 0.25)"}}>
                        smart politickers turn outrage into outreach
                    </p>
                </div>

                <Link href="/#section3">
                    <button className={btnCss} >send email</button>
                </Link>
            </div>
        </div>
    )
}