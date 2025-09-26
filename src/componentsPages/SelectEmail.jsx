"use client";

import React, { useState } from "react";
import Image from "next/image";

const data = [
    {
        image: "/englishTemplate.png",
        text: "English",
    },
    {
        image: "/germanTemplate.png",
        text: "German",
    },
];

export default function SelectEmail() {
    const [clickedId, setClicked] = useState(0);
    const [{firstButtonBg, firstButtonId}, setFirstButtonBg] = useState("#941010");
    const [clickedSecondButton, setClickedSecondButton] = useState("#941010");

    function handleClick() {
        setClicked(1);
    }

    function ClickedFirst() {
        setFirstButtonBg("#266247");
        console.log("clicked first");
    }

    const btnCss = "py-[14px] px-4 w-fit  text-[#FFF] text-[2.4rem] leading-[1.5rem] md:pt-4 md:pb-[14px] md:text-[3rem] lg:text-[2.7rem]";

    return (
        <div className="flex flex-col gap-[45px] items-center text-center py-[106px] px-6 w-full">
            <h1 className="text-[#000] text-[3rem] leading-[2.5rem]">1. select your email</h1>

            <div className="flex flex-col justify-center items-center gap-6 self-stretch">
                <div className="flex flex-wrap justify-center items-start content-start gap-3">
                    <button className= {`${btnCss} bg-[#941010] transition duration-500`} onClick={() => {handleClick(), ClickedFirst()}}>EU-wide sanctions</button>
                    <button className= {`${btnCss} bg-[#941010]`} onClick={handleClick}>Gaza children aid</button>
                </div>

                <div className="flex flex-col items-center gap-6 self-stretch">
                    <h2 className="text-[#000] text-[2rem] leading-[2rem]">preview</h2>

                    <div className="flex justify-between items-center self-stretch">
                        {
                            data.map((item, index) => (
                                <div key={index} className="flex flex-col items-center gap-2">
                                    <Image src={item.image} width={100} height={100} alt="templates" style={{boxShadow: "7.58px 7.58px 2.316px 0 #994242"}} />

                                    <p className="text-[#A3A3A3] font-palanquin font-medium text-[1.6rem]">{item.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <button className={`text-[1.2rem] bg-[#266247] text-[#FFF] py-[10px] px-4 leading-[1rem] w-full ${!clickedId==1 && "opacity-0"}`}>prepare your mail</button>
            </div>
        </div>
    )
}