import React from "react";
import Image from "next/image";

export default function SectionTwo() {
    return (
        <div className="flex flex-col justify-center items-center px-4 gap-[50px] md:py-[60px] md:px-[70px] lg:px-[200px]">
            <p className="text-[#FFF] text-[3rem] leading-[3rem] md:hidden">about</p>

            <div className="flex flex-col gap-9 relative pl-5 md:gap-4 md:pl-0 self-stretch lg:gap-6">
                <div className="flex flex-col gap-2 md:gap-[14px] w-[70%]">
                    <p className="text-[#FFF] text-[2rem] md:text-[4rem] md:leading-[4rem] lg:text-[5rem] lg:leading-[5rem]">Politicker (noun)</p>

                    <p className="text-[#A3A3A3] font-palanquin w-[70%] md:text-[1.5rem] md:w-[77%] lg:text-[2rem] lg:leading-[2.5rem] lg:w-full">
                        <span className="bg-[#941010] text-[#FFF] font-bold">A politician; </span>
                        or  
                        <span className="bg-[#266247] text-[#FFF] font-bold"> a person </span>
                        engaging in activity directed towards acquiring power and influence.
                    </p>
                </div>
                
                <div className="flex gap-[70px] items-start">
                    <p className="text-[#504D4D] font-palanquin leading-[1.3rem] w-[85%] lg:text-[1.3rem] lg:leading-[1.5rem]">Collins English Dictionary. <br/> Copyright © HarperCollins Publishers</p>

                    <Image src="/ChessImage.svg" width={100} height={100} alt="chess" className="w-[75px] absolute right-0 bottom-[-10px] md:w-[210px] lg:w-[270px]"/>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center relative pt-[50px] md:gap-[60px] lg:p-0 lg:gap-0">
                <div className="flex">
                    <div className="flex items-center justify-center px-[7px] w-[100px] rotate-[-15.515deg] bg-[#A12828] mb-[7px]   md:mb-6 md:px-[26.554px] md:w-fit">
                        <p className="text-[#FFF] md:text-[3rem] md:leading-0">Governmental</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[#FFF] leading-[1rem] md:text-[3rem] md:leading-[3rem]">vs</p>
                        <p className="flex items-center justify-center pt-[9px] pb-[6px] px-[7px] bg-[#266247] text-[#FFF] w-[80px] mb-[-4px] md:text-[3rem] md:leading-[3rem] md:w-fit md:px-[26.554px]">civil</p>
                    </div>
                </div>

                <p className="text-[#FFF] text-[5rem] leading-[5rem] md:text-[10rem] md:leading-[10rem]">POLITICKER</p>
            </div>
        </div>
    )
}