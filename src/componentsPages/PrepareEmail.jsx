"use client";
import React, { useState } from "react";
import ReadyImage from "../../public/ReadyImage.svg";
import Frame from "../../public/Frame.svg";
import Image from "next/image";

export default function PrepareEmail() {
    const formDivCss = "flex flex-col items-start gap-1 self-stretch lg:gap-2";
    const inputFieldCss = "py-3 px-4 h-[44px] flex-[1_0_0] border border-[#5C5959] w-full focus:outline-none text-[#5C5959] lg:h-[58px] lg:p-4";
    const labelCss = "text-[#4E4E4E] font-palanquin text-[1.1rem] leading-[1.3rem] lg:text-[1.5rem]";
    const btnCss = "py-3 px-4 text-[#FFF] bg-[#941010] text-[1.3rem] leading-[1rem] w-full md:p-4 md:w-[236px] md:text-[2rem] lg:w-full lg:text-[3.9rem] lg:leading-[4rem]";

    const [nameEmail, setName] = useState({name: "", email: ""});

    function handleChange(event) {
        console.log(event.target.value);
    }

    return (
        <div className="flex flex-col gap-4 px-4 py-8 w-full justify-center items-start md:flex-row md:py-[60px] md:px-8 md:gap-6 lg:py-[100px] lg:px-[70px] lg:gap-8" style={{background: "linear-gradient(180deg, #1E1E1E 27.87%, #5F1717 98.29%)"}}>
            <div className="flex flex-col gap-4 w-full justify-center items-start self-stretch md:flex-row-reverse md:gap-6 lg:gap-8 lg:w-[66%]">
                <div style={{backgroundImage: `url(${ReadyImage.src})`, backgroundSize: "cover", backgroundPosition: "center"}} className="h-[291px] w-full md:flex-1 md:h-full md:w-[300px]"></div>
                
                <div className="flex gap-1 p-5 bg-[#FFF] self-stretch text-[2.1rem] leading-[2rem] md:flex-1 md:py-5 md:px-3 md:text-[2rem] md:leading-[2rem] lg:p-6 lg:gap-[10px] lg:text-[5rem] lg:leading-[4.5rem]">
                    <span>2.</span> 
                    <span>prepare your email</span>
                </div>
            </div>

            <form action="" className="flex flex-col justify-center items-center self-stretch gap-[11px] p-4 bg-[#FFF] md:flex-1 md:py-5 md:px-3 md:justify-between lg:p-6 lg:w-[33%] lg:gap-6">
                <div className= {formDivCss}>
                    <input type="text" className={`${inputFieldCss} font-palanquin`} onClick={handleChange}/>
                    <Image src="Frame.svg" width={20} height={20} />
                    <label className={labelCss} >Name (optional)</label>
                </div>

                <div className= {formDivCss}>
                    <button className={`${inputFieldCss} bg-[#BDBDBD] border-none text-[#FFF] tracking-wide lg:text-[1.5rem]`}>create a proton mail</button>
                    <Image src="Frame.svg" width={20} height={20} />
                    <label className={labelCss} >Do you need Proton Mail? (optional)</label>
                </div>

                <div className= {formDivCss}>
                    <input type="email" className={`${inputFieldCss} font-palanquin`} />
                    <label className={labelCss} >Email</label>
                </div>

                <button className={btnCss}>finalize emails</button>
            </form>
        </div>
    )
}