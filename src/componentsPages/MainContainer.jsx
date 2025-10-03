import React from "react";
import Image from "next/image";
export default function MainContainer() {
    const pText="text-[#FFF] text-[clamp(1.2rem,2vw,3rem)] leading-[clamp(1.2rem,2vw,3rem)]";
    
    return (
        <div className="w-full relative">
            <div className="absolute top-[20px] pl-10 flex flex-col gap-5 md:pl-8 md:gap-7 lg:pl-[100px]">
                <p className={pText} >STRATEGIC <br/> Steps,</p>
                <p className={`${pText} pl-13 md:pl-[70px]`} >ONE CHECK  <br /> AT A TIME.</p>
            </div>

            <Image width={0} height={0} src= "/PlayingChess.svg" alt="Playing Chess" className="w-full bg-[#1E1E1E]" />
        </div>
    )
}