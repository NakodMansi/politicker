"use client";
import React, { useState } from "react";
import Image from "next/image";

// const data = [
//     {
//         image: "/englishTemplate.png",
//         text: "English",
//         docFile: "/docs/GazaChildrenAid(English).pdf"
//     },
//     {
//         image: "/germanTemplate.png",
//         text: "German",
//         docFile: "docs/GazaChildrenAid(German).pdf"
//     },
// ];

const data = {
    "EU": [
        {
            image: "/englishTemplate.png",
            text: "English",
            docFile: "/docs/EUSanctions(English).pdf",
        },
        {
            image: "/germanTemplate.png",
            text: "German",
            docFile: "docs/EUSanktionen(German).pdf",
        }
    ],
    "Gaza": [
        {
            image: "/englishTemplate.png",
            text: "English",
            docFile: "/docs/GazaChildrenAid(English).pdf"
        },
        {
            image: "/germanTemplate.png",
            text: "German",
            docFile: "docs/GazaChildrenAid(German).pdf"
        }
    ]
};

export default function SelectEmail({reference, ScrollToPrepareMailFunc}) {
    const [clickedId, setClicked] = useState(0);
    const [clickedFirstButton, setFirstButtonClick] = useState(0);
    const [clickedSecondButton, setClickedSecondButton] = useState(0);

    function handleClick() {
        setClicked(1);
    }

    function ClickedFirst() {
        setFirstButtonClick(1);
        setClickedSecondButton(0);
    }

    function ClickedSecond() {
        setClickedSecondButton(1);
        setFirstButtonClick(0);
    }
    
    function openDoc(url) {
        window.open(url)
    }
    const btnCss = "py-[14px] px-4 w-[90%] text-[clamp(1.2rem,2vw,3rem)] leading-[clamp(1.5rem,2vw,4rem)] text-[#FFF] rounded-[8px] transition duration-500 md:py-3 md:px-[30px] md:w-[200px] lg:w-[350px]";
    const EUdata = data["EU"];
    const gazaData = data["Gaza"];
    
    return (
        <div ref={reference} id="section3" className="px-[39px] py-[140px] w-full bg-[#FFF] flex flex-col gap-[18px] items-center text-center md:px-8 md:gap-[30px] lg:p-[70px]">
            <h1 className="text-[#000] text-[clamp(2.5rem,3vw,4rem)] leading-[clamp(3.1rem,3vw,4rem)]">1. select your email</h1>

            <div className="flex flex-col justify-center items-center gap-[22px] self-stretch md:flex-row-reverse md:justify-between">
                <div className="flex flex-col justify-center items-center content-start gap-3 self-stretch md:w-[45%] md:flex-col md:items-center md:content-center md:relative md:top-[10px] lg:gap-5">
                    <button className= {`${btnCss} ${clickedFirstButton==1?"bg-[#266247]":"bg-[#941010]"}`} onClick={() => {handleClick(), ClickedFirst()}}>EU-wide sanctions</button>
                    <button className= {`${btnCss} ${clickedSecondButton==1?"bg-[#4E4E4E]":"bg-[#941010]"}`} onClick={() => {handleClick(), ClickedSecond()}}>Gaza children aid</button>
                    <button 
                        className={`hidden w-full transition transition duration-500 ${!clickedId==1 && "opacity-0"} ${clickedFirstButton?"bg-[#266247]":"bg-[#4E4E4E]"} md:block md:text-[1.5rem] md:leading-[1.5rem] lg:text-[2.5rem] lg:leading-[2.5rem] md:w-[200px] lg:w-[350px]`} 
                        onClick={() => clickedFirstButton==1?ScrollToPrepareMailFunc(1):ScrollToPrepareMailFunc(2)}>
                            {clickedFirstButton==1?"prepare your mail":"unlock in few days (to avoid spam)"}
                    </button>
                </div>

                <div className="flex flex-col items-center gap-[10px] self-stretch md:w-[45%] md:gap-[6px] lg:pt-6">
                    <h2 className="text-[#000] text-[clamp(1.2rem,2vw,4rem)] leading-[clamp(2rem,2vw,4rem)]">Click On Letter To Preview pdf</h2>

                    <div className="flex justify-between items-center self-stretch md:pl-5 md:gap-8 lg:gap-[50px]">
                        {
                            (clickedSecondButton==0? EUdata : gazaData ).map((item, index) => (
                                <div key={index} className="flex flex-col items-center gap-2 md:flex-col-reverse md:gap-1 lg:gap-2">
                                    <Image 
                                        src={item.image} 
                                        width={100} 
                                        height={100} 
                                        className="w-[35vw] md:w-[224px] transition duration-500" 
                                        alt="templates" 
                                        style={{boxShadow: clickedFirstButton==1?"7.58px 7.58px 2.316px 0 #266247":"7.58px 7.58px 2.316px 0 #994242"}} 
                                        onClick={() => openDoc(item.docFile)}
                                    />

                                    <p className="text-[#A3A3A3] font-palanquin font-medium text-[clamp(0.6rem,2vw,4rem)] leading-[clamp(1.5rem,2vw,4rem)]">{item.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <button 
                    className={`${btnCss} transition transition duration-500 ${clickedId !==1 ? "opacity-0": "opacity-100"} ${clickedFirstButton?"bg-[#266247]":"bg-[#4E4E4E]"} md:hidden`} 
                    onClick={() => clickedFirstButton==1?ScrollToPrepareMailFunc(1):""}
                    type="button"
                >
                        {clickedFirstButton==1?"prepare your mail":"unlock in few days (to avoid spam)"}
                </button>
            </div>
        </div>
    )
}