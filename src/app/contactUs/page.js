"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/componentsPages/Header";
import Footer from "@/componentsPages/Footer";

export default function ContactUs() {
    const formDivCss = "flex flex-col items-start gap-1 self-stretch md:gap-2 relative";
    const inputFieldCss = "py-3 px-4 h-[44px] flex-[1_0_0] border border-[#5C5959] w-full focus:outline-none text-[#5C5959] md:py-4 lg:p-4 font-palanquin";
    const labelCss = "text-[#4E4E4E] font-palanquin text-[1.1rem] leading-[1.3rem]";
    const btnCss = "py-3 px-4 text-[#FFF] bg-[#941010] text-[1.3rem] leading-[1rem] w-full md:p-4 md:w-[236px] md:text-[2rem] lg:w-full";

    const [nameEmail, setName] = useState({ email: "", subject: "", message: "" });
    const [showEmailMsg, setShowEmailMsg] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    function handleChange(event) {
        const { value, name } = event.target;
        setName((prevValue) => ({ ...prevValue, [name]: value }));
    }

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    return (
        <>  
        <Header />
          
        <div className="flex flex-col items-start gap-4 flex-1 w-full px-4 pb-4 md:flex-row md:py-10 md:px-8 md:gap-8 lg:py-[100px] lg:px-[100px]" style={{ background: "linear-gradient(180deg, #1E1E1E 27.87%, #5F1717 98.29%)" }}>    
            <div className="p-5 flex justify-center items-center bg-[#FFF] self-stretch md:flex-col md:justify-start md:text-left md:p-6 lg:gap-[60px]">
                <p className="text-[#000] text-[2.6rem] leading-[2.6rem] md:text-[4rem] md:leading-[4rem] self-stretch">contact us</p>
                
                <div className="hidden md:flex md:flex-col md:gap-[30px] md:self-stretch lg:gap-[60px]">
                    <div className={formDivCss}>
                        <button name="mailBtn" className={`${inputFieldCss} flex items-center justify-center bg-[#BDBDBD] border-none text-[#FFF] tracking-wide lg:text-[1rem]`}>
                            create a proton mail
                        </button>
                        
                        <Image 
                            src="/Frame.svg" 
                            width={30} 
                            height={30} 
                            alt="Frame Icon" 
                            className="absolute top-[7px] right-4 md:hidden lg:block lg:w-[20px] lg:h-[20px] lg:top-3" 
                            onMouseOver={() => setShowEmailMsg(true)} 
                            onMouseOut={() => setShowEmailMsg(false)} 
                        />
                        <label className={labelCss}>Do you need Proton Mail? (optional)</label>
                    </div>
                    
                    <div className={formDivCss}>
                        <input type="email" name="email" className={inputFieldCss} value={nameEmail.email} onChange={handleChange} />
                        <label className={labelCss}>Email</label>
                    </div>
                </div>
            </div>
            
            <form onSubmit={() => { e.preventDefault() }} className="flex flex-col justify-center items-center self-stretch gap-[11px] flex-1 py-4 px-6 bg-[#FFF] md:py-6 md:gap-[30px] lg:p-6 lg:w-[33%] lg:gap-6">
                <div className={`${formDivCss} md:hidden`}>
                    <button name="mailBtn" className={`${inputFieldCss} bg-[#BDBDBD] border-none text-[#FFF] tracking-wide lg:text-[1.5rem]`}>create a proton mail</button>
                    
                    <Image 
                        src="/Frame.svg" 
                        width={30} 
                        height={30} 
                        alt="Frame Icon" 
                        className="absolute top-[7px] md:top-[15px] right-4" 
                        onMouseOver={() => setShowEmailMsg(true)} 
                        onMouseOut={() => setShowEmailMsg(false)} 
                    />
                    
                    <div className={`p-2 w-fit bg-[#515050] absolute top-[5px] right-[50px] text-[#FFF] font-palanquin text-[0.6rem] transition duration-500 ${showEmailMsg ? "opacity-100" : "opacity-0"}`}>
                        <p>Don’t want to use your personal email? Try Proton Mail — more secure with end-to-end encryption.</p>
                    </div>
                    
                    <label className={labelCss}>Do you need Proton Mail? (optional)</label>
                </div>
                
                <div className={`${formDivCss} md:hidden`}>
                    <input type="email" name="email" className={inputFieldCss} value={nameEmail.email} onChange={handleChange} />
                    <label className={labelCss}>Email</label>
                </div>
                
                <div className={formDivCss}>
                    <input type="text" name="subject" className={inputFieldCss} value={nameEmail.subject} onChange={handleChange} />
                    <label className={labelCss}>Subject</label>
                </div>
                
                <div className={formDivCss}>
                    <textarea type="text" name="message" rows="5" className={inputFieldCss} value={nameEmail.message} onChange={handleChange} style={{ flex: windowWidth < 769 ? 0 : 1 }} />
                    <label className={labelCss}>Your Message</label>
                </div>
                
                <button type="submit" name="submitBtn" className={btnCss}>send</button>
            </form>
        </div>
        <Footer />
        </>
    )
}
