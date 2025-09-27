"use client";
import React, { useState } from "react";
import ReadyImage from "../../public/ReadyImage.svg";
import Image from "next/image";

export default function PrepareEmail({Reference}) {
    const formDivCss = "flex flex-col items-start gap-1 self-stretch lg:gap-2 relative";
    const inputFieldCss = "py-3 px-4 h-[44px] flex-[1_0_0] border border-[#5C5959] w-full focus:outline-none text-[#5C5959] lg:h-[58px] lg:p-4";
    const labelCss = "text-[#4E4E4E] font-palanquin text-[1.1rem] leading-[1.3rem] lg:text-[1.5rem]";
    const btnCss = "py-3 px-4 text-[#FFF] bg-[#941010] text-[1.3rem] leading-[1rem] w-full md:p-4 md:w-[236px] md:text-[2rem] lg:w-full lg:text-[3rem] lg:leading-[3rem]";

    const [nameEmail, setName] = useState({user_name: "", email: ""});
    const [showNameMsg, setShowNameMsg] = useState(false);
    const [showEmailMsg, setShowEmailMsg] = useState(false);

    function handleChange(event) {
        const {value, name} = event.target;

        setName((prevValue) => ({...prevValue, [name]: value }));
    }

    console.log(nameEmail);

    return (
        <div ref={Reference} className="flex flex-col gap-4 px-4 py-8 w-full justify-center items-start md:flex-row md:py-[60px] md:px-8 md:gap-6 lg:gap-8" style={{background: "linear-gradient(180deg, #1E1E1E 27.87%, #5F1717 98.29%)"}}>
            <div className="flex flex-col gap-4 w-full justify-center items-start self-stretch md:flex-row-reverse md:gap-6 lg:gap-8 lg:w-[66%]">
                <div 
                    style={{backgroundImage: `url(${ReadyImage.src})`, backgroundSize: "cover", backgroundPosition: "center"}} 
                    className="h-[409px] w-full md:flex-1 md:h-full md:w-[200px]"
                ></div>
                
                <div className="flex gap-1 p-5 bg-[#FFF] self-stretch text-[1.7rem] leading-[2rem] md:flex-1 md:py-5 md:px-3 lg:text-[2.9rem] lg:leading-[2.9rem] lg:p-6 lg:gap-[10px]">
                    <span>2.</span> 
                    <span>prepare your email</span>
                </div>
            </div>

            <form onSubmit={(e) => {e.preventDefault()}} className="flex flex-col justify-center items-center self-stretch gap-[11px] p-4 bg-[#FFF] md:flex-1 md:py-5 md:px-3 md:justify-between lg:p-6 lg:w-[33%] lg:gap-6">
                <div className= {formDivCss}>
                    <input 
                        type="text" 
                        name="user_name" 
                        className={`${inputFieldCss} font-palanquin`} 
                        value={nameEmail.user_name} 
                        onChange={handleChange}
                    />
                    <Image 
                        src="Frame.svg" 
                        width={30} 
                        height={30} 
                        alt="Frame Icon" 
                        className="absolute top-[7px] right-2 md:top-[15px] md:right-4" 
                        onMouseOver={() => {setShowNameMsg(true)}}
                        onMouseOut= {() => {setShowNameMsg(false)}}
                    />
                    <div className={`p-2 w-fit bg-[#515050] absolute top-[5px] right-[50px] text-[#FFF] font-palanquin text-[0.6rem] transition duration-500 ${showNameMsg?"opacity-100":"opacity-0"} `}>
                        <p>Including your name in your letter makes</p>
                        <p className="font-semibold"> it more believable</p> 
                    </div>
                    <label className={labelCss} >Name (optional)</label>
                </div>

                <div className= {formDivCss}>
                    <a href="https://account.proton.me/start?ref=pme_lp_b2c_proton_menu" target="_blank" className="w-full" >
                        <button
                            type="button"
                            disabled={nameEmail.user_name.trim() === ""}
                            onClick={(e) => {
                            // prevent opening if no name entered
                            if (nameEmail.user_name.trim() === "") {
                                e.preventDefault();
                            }
                            }}
                            className={`${inputFieldCss} ${
                            nameEmail.user_name.trim() !== "" ? "bg-[#941010]" : "bg-[#BDBDBD]"
                            } border-none text-[#FFF] tracking-wide lg:text-[1.5rem] transition duration-500 disabled:cursor-not-allowed`}
                        >
                            create a proton mail
                        </button>

                        
                        <Image 
                            src="/Frame.svg" 
                            width={30} 
                            height={30} 
                            alt="Frame Icon" 
                            className="absolute top-[7px] right-2 md:top-[15px] md:right-4" 
                            onMouseOver= {() => {setShowEmailMsg(true)}}
                            onMouseOut= {() => {setShowEmailMsg(false)}}
                        />
                    
                        <div className={`p-2 w-fit bg-[#515050] absolute top-[5px] right-[50px] text-[#FFF] font-palanquin text-[0.6rem] transition duration-500  ${showEmailMsg?"opacity-100":"opacity-0"}`}>
                            <p>Don’t want to use your personal email? Try Proton Mail — more secure with end-to-end encryption.</p>
                        </div>
                    </a>
                    <label className={labelCss} >Do you need Proton Mail? (optional)</label>
                </div>

                <div className= {formDivCss}>
                    <input 
                        type="email" 
                        name="email" 
                        className={`${inputFieldCss} font-palanquin`} 
                        onChange={handleChange} 
                        value={nameEmail.email} 
                    />
                    <label className={labelCss} >Email</label>
                </div>

                <button type="submit" name="submitBtn" className={btnCss}>finalize emails</button>
            </form>
        </div>
    )
}