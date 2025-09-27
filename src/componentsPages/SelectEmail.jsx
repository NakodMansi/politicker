"use client";
import React, { useState } from "react";
import Image from "next/image";

const data = [
    {
        image: "/englishTemplate.png",
        text: "English",
        docFile: "/docs/GazaChildrenAid(German).pdf"
    },
    {
        image: "/germanTemplate.png",
        text: "German",
        docFile: "docs/GazaChildrenAid(English).pdf"
    },
];

export default function SelectEmail({reference, goToPrepareMailFunc}) {
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
    const btnCss = "py-2 px-3 md:py-3 md:px-[30px] w-fit text-[#FFF] md:text-[1.5rem] md:leading-[1.5rem] md:w-[200px] lg:text-[2.5rem] lg:w-[350px] lg:leading-[2.5rem]";

    return (
        <div ref={reference} className="bg-[#FFF] flex flex-col gap-[30px] items-center text-center py-[60px] px-6 w-full md:px-8 md:gap-[30px] lg:p-[70px]">
            <h1 className="text-[#000] text-[2rem] leading-[2.5rem] lg:text-[4rem] lg:leading-[3rem]">1. select your email</h1>

            <div className="flex flex-col justify-center items-center gap-6 self-stretch md:flex-row-reverse md:justify-between">
                <div className="flex flex-wrap justify-center items-start content-start gap-3 md:w-[45%] md:flex-col md:items-center md:content-center md:relative md:top-[10px] lg:gap-5">
                    <button className= {`${btnCss} ${clickedFirstButton==1?"bg-[#266247]":"bg-[#941010]"} transition duration-500`} onClick={() => {handleClick(), ClickedFirst()}}>EU-wide sanctions</button>
                    <button className= {`${btnCss} ${clickedSecondButton==1?"bg-[#4E4E4E]":"bg-[#941010]"} transition duration-500`} onClick={() => {handleClick(), ClickedSecond()}}>Gaza children aid</button>
                    <button className={`hidden text-[#FFF] p-4 text-[2rem] leading-[2rem] w-full transition transition duration-500 ${!clickedId==1 && "opacity-0"} ${clickedFirstButton?"bg-[#266247]":"bg-[#4E4E4E]"} md:block md:text-[1.5rem] md:leading-[1.5rem] lg:text-[2.5rem] lg:leading-[2.5rem] md:w-[200px] lg:w-[350px]`}>{clickedFirstButton==1?"prepare your mail":"unlock in few days (to avoid spam)"}</button>
                </div>

                <div className="flex flex-col items-center gap-6 self-stretch md:w-[45%] md:gap-[6px] lg:pt-6">
                    <h2 className="text-[#000] text-[1.4rem] md:text-[1.5rem] md:leading-[1.5rem] lg:text-[2.5rem]">preview</h2>

                    <div className="flex justify-between items-center self-stretch md:pl-5 md:gap-8 lg:gap-[50px]">
                        {
                            data.map((item, index) => (
                                <div key={index} className="flex flex-col items-center gap-2 md:flex-col-reverse md:gap-1 lg:gap-2">
                                    <Image 
                                        src={item.image} 
                                        width={100} 
                                        height={100} 
                                        className="w-[40vw] md:w-[224px] transition duration-500" 
                                        alt="templates" 
                                        style={{boxShadow: clickedFirstButton==1?"7.58px 7.58px 2.316px 0 #266247":"7.58px 7.58px 2.316px 0 #994242"}} 
                                        onClick={() => openDoc(item.docFile)}
                                    />

                                    <p className="text-[#A3A3A3] font-palanquin font-medium lg:text-[1.5rem]">{item.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <button 
                    className={`text-[1.2rem] text-[#FFF] py-[10px] px-4 leading-[1rem] w-full transition transition duration-500 ${!clickedId==1 && "opacity-0"} ${clickedFirstButton?"bg-[#266247]":"bg-[#4E4E4E]"} md:hidden`} 
                    onClick={goToPrepareMailFunc}
                >
                        {clickedFirstButton==1?"prepare your mail":"unlock in few days (to avoid spam)"}
                </button>
            </div>
        </div>
    )
}