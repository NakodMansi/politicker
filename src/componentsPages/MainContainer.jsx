import React from "react";
import Image from "next/image";
export default function MainContainer() {
    const pText="leading-[0.8rem] text-[#FFF] md:text-[3rem] md:leading-[3rem] lg:text-[4rem] lg:leading-[4rem]";
    
    return (
        <div className="w-full relative">
            <div className="absolute top-[20px] pl-5 flex flex-col gap-5 md:pl-8 md:gap-7 lg:pl-[100px]">
                <p className={pText} >STRATEGIC <br/> Steps,</p>
                <p className={`${pText} pl-[30px] md:pl-[70px]`} >ONE CHECKAT <br /> A TIME.</p>
            </div>

            <Image width={0} height={0} src= "/PlayingChess.svg" className="w-full bg-[#1E1E1E]" />
        </div>
    )
}