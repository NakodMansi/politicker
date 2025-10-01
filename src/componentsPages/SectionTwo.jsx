"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SectionTwo() {
    const divCss="flex items-center justify-center py-[9px] px-[7px] rounded-[4px] ";
    const textCss = "text-[#FFF] text-[clamp(1.2rem,2vw,3rem)] leading-[clamp(0.9rem,1vw,2rem)]";

    return (
        <div className="flex flex-col justify-center items-center py-[64px] px-8 gap-[27px] md:py-[60px] md:px-[70px] lg:px-[200px]">
            <p className="text-[#FFF] text-[3rem] leading-[3rem] md:hidden">about</p>

            <div className="flex flex-col gap-2 relative pl-5 md:gap-4 md:pl-0 self-stretch lg:gap-6">
                <div className="flex flex-col gap-2 md:gap-[14px]">
                    <div className="flex justify-between items-center w-full">
                        <p className="text-[#FFF] text-[clamp(1.2rem,2vw,3rem)] leading-[clamp(3.5rem,4vw,5rem)]">Politicker (noun)</p>

                        <Image src="/ChessImage.svg" width={100} height={100} alt="chess" className="w-[75px]  md:w-[210px] lg:w-[270px]"/>
                    </div>

                    <p className="text-[#A3A3A3] font-palanquin text-[clamp(0.9rem,2vw,3rem)] leading-[clamp(1.2rem,2vw,3rem)] md:w-[77%] lg:w-full">
                        <span className="bg-[#582D2D] text-[#FFF] font-bold">A politician; </span>
                        or  
                        <span className="bg-[#2F5544] text-[#FFF] font-bold"> a person </span>
                        engaging in activity directed towards acquiring power and influence.
                    </p>
                </div>
                
                <div className="flex items-start">
                    <p className="text-[#504D4D] font-palanquin text-[clamp(0.5rem,1vw,2rem)] leading-[clamp(0.5rem,1vw,2rem)]">Collins English Dictionary. <br/> Copyright © HarperCollins Publishers</p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center relative pt-[50px] md:gap-[60px] lg:p-0 lg:gap-0">
                <div className="flex justify-start self-stretch">
                    <motion.div
                        initial={{ opacity: 0, rotate: -16.581 }}
                        whileInView={{ y: 0, opacity: 1, rotate: 16.581, margin: 0}}
                        transition={{ type: "spring", stiffness: 60, damping: 7, duration: 0.3, mass: 1 }}
                        viewport={{ amount: 0.8, once: true }}
                        className={`${divCss} w-[145px] rotate-[-16.581deg] bg-[#582D2D] mb-[11px] md:mb-6 md:px-[26.554px] md:w-fit`}
                    >
                        <p className={`${textCss} md:text-[3rem] md:leading-0`}>Governmental</p>
                    </motion.div>

                    
                    <div className="flex flex-col items-center">
                        <p className="text-[#FFF] leading-[1rem] md:text-[3rem] md:leading-[3rem]">vs</p>
                        
                        <div className={`${divCss} bg-[#266247] w-[80px] md:w-fit md:px-[26.554px]`}>
                            <p className= {textCss}>civil</p>
                        </div>
                    </div>
                </div>

                <p className="text-[#FFF] text-[clamp(5rem,6vw,7rem)] leading-[clamp(5rem,7vw,8rem)]">POLITICKER</p>
            </div>
        </div>
    )
}