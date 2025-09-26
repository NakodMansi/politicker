import React from "react";

const text = ["SICK OF ", "COMPLICITY ", "WITH CRIMES ", "IN YOUR NAME", "?"];
const textColor = ["#FFF", "#A12828", "#FFF", "#348963", "#FFF" ];

export default function HeroBanner() {
    const btnCss = "pt-[14px] pb-3 px-[30px] w-fit bg-[#941010] text-[#FFF] text-[2.5rem] leading-[1.5rem] md:pt-4 md:pb-[14px] md:text-[3rem] lg:text-[2.7rem]";

    return (
        <div className="flex flex-col justify-center items-center gap-[78px] w-full text-center pt-[130px] px-4 pb-[115px] bg-[#383535] md:px-8 md:py-[60px] lg:px-[150px] lg:py-[140px]">
            <div className="flex flex-col items-center gap-[6px] self-stretch">
                <h1 className="text-[4rem] leading-[3.5rem] md:text-[6rem] md:leading-[5.5rem] lg:text-[9rem] lg:leading-[8rem]">
                    {
                        text.map((text, index) => (
                            <span style={{color: textColor[index]}} key={index}>{text}</span>
                        ))
                    }
                </h1>

                <h3 className="text-[#888888F7] text-[1.6rem] leading-[1.8rem] md:text-[3rem] md:leading-[3.3rem] lg:text-[4.7rem] lg:leading-[4.3rem]">EMAIL OUR POLICITICIANS TO RESPECT INTERNATIONAL LAW.</h3>
            </div>

            <div className="flex flex-col items-center gap-2 self-stretch">
                <button className={btnCss}>VOICE YOUR RIGHT</button>
                <p className="text-[#A3A3A3] font-palanquin md:text-[1.9rem]" style={{textDecoration: "underline"}}>Why should I?</p>
            </div>
        </div>
    )
}