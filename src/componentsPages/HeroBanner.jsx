import React from "react";

const text = ["SICK OF ", "COMPLICITY ", "WITH CRIMES ", "IN YOUR NAME", "?"];
const textColor = ["#FFF", "#A12828", "#FFF", "#348963", "#FFF" ];

export default function HeroBanner({goToSelectMailFunc}) {
    const btnCss = "py-2 px-3 md:py-4 md:px-[30px] w-[90%] bg-[#941010] text-[#FFF] text-[1.5rem] leading-[1rem] md:w-[300px] md:text-[2rem] md:leading-[2rem] lg:text-[2.5rem] lg:leading-[1.5rem]";

    return (
        <div className="flex flex-col justify-center items-center gap-[40px] md:gap-[78px] w-full text-center px-4 py-8 md:gap-[50px] md:py-[60px] md:px-4 lg:px-8 lg:py-[60px]">
            <div className="flex flex-col items-center gap-[6px] self-stretch">
                <h1 className="text-[4.5rem] leading-[4.5rem] md:text-[4.5rem] md:leading-[4.5rem] lg:text-[6rem] lg:leading-[5.5rem]">
                    {
                        text.map((text, index) => (
                            <span style={{color: textColor[index]}} key={index}>{text}</span>
                        ))
                    }
                </h1>

                <h3 className="text-[#888888F7] text-[1.5rem] leading-[1.5rem] md:text-[3rem] md:leading-[3rem] lg:w-[70%] lg:text-[4rem] lg:leading-[3.8rem]">EMAIL OUR POLICITICIANS TO RESPECT INTERNATIONAL LAW.</h3>
            </div>

            <div className="flex flex-col items-center gap-2 self-stretch">
                <button className={btnCss} onClick={goToSelectMailFunc}>VOICE YOUR RIGHT</button>
                <p className="text-[#A3A3A3] font-palanquin text-[0.7rem] md:text-[1.4rem] lg:text-[1.5rem]" style={{textDecoration: "underline"}}>Why should I?</p>
            </div>
        </div>
    )
}