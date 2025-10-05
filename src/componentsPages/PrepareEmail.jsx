"use client";
import React, { useState } from "react";
import ReadyImage from "../../public/ReadyImage.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PrepareEmail({reference, buttonNumber}) {
    const formDivCss = "flex flex-col items-start self-stretch lg:gap-2 relative";
    const inputFieldCss = "py-3 px-4 h-[44px] rounded-[10px] flex-[1_0_0] border border-[#5C5959] w-full focus:outline-none text-[#5C5959] lg:h-[58px] lg:p-4";
    const labelCss = "text-[#4E4E4E] font-palanquin text-[clamp(0.6rem,2vw,3rem)] leading-[clamp(1.3rem,2vw,3rem)]";
    const btnCss = "p-[9.5px] text-[clamp(1.2rem,2vw,4rem)] leading-[clamp(1.2rem,2vw,4rem)] rounded-[10px] w-full md:p-4 md:w-[236px]";

    const [nameEmail, setName] = useState({user_name: "", email: ""});
    const [showNameMsg, setShowNameMsg] = useState(false);
    const [showNameMsgOnce, setShowNameMsgOnce] = useState(false);
    const [showEmailMsg, setShowEmailMsg] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const router = useRouter();

    function handleChange(event) {
        const {value, name} = event.target;

        setName((prevValue) => ({...prevValue, [name]: value }));
    }

    function handleBtnClick() {
        // Check if template is selected
        if (!buttonNumber) {
            alert("Please select your template first!"); // ⚠️ Show alert
            return; // stop user from navigating
        }

        if (nameEmail.email) {
            // Optional: show name alert
            if (!nameEmail.user_name && !showNameMsgOnce) {
                setShowNameMsg(true);
                setShowNameMsgOnce(true);
                setTimeout(() => setShowNameMsg(false), 3000);
            }

            // Proceed to next page
            router.push(`/finalizeEmail/EUcommittee?username=${nameEmail.user_name}&useremail=${nameEmail.email}`);
            setIsButtonClicked(true);
        }
    }


    return (
        <div ref={reference} id="section4" className="flex flex-col gap-[23px] px-4 pb-8 pt-[70px] w-full justify-center items-start md:flex-row md:py-[60px] md:px-8 md:gap-6 lg:gap-8" style={{background: "linear-gradient(180deg, #1E1E1E 27.87%, #5F1717 98.29%)"}}>
            <div className="flex flex-col-reverse gap-[23px] w-full justify-center items-start self-stretch md:gap-6 lg:gap-8 lg:w-[66%]">
                <div 
                    style={{backgroundImage: `url(${ReadyImage.src})`, backgroundSize: "cover", backgroundPosition: "center"}} 
                    className="h-[350px] w-full md:flex-1 md:h-full md:w-[200px]"
                ></div>
                
                <p className="text-[#FFF] text-[clamp(2.5rem,3vw,4vw)] leading-[clamp(3rem,4vw,5vw)]">2. prepare your email</p>
            </div>

            <form onSubmit={(e) => {e.preventDefault()}} className="flex flex-col justify-center items-center self-stretch gap-[11px] p-10 bg-[#FFF] rounded-[10px] md:flex-1 md:py-5 md:px-3 md:justify-between lg:p-6 lg:w-[33%] lg:gap-6">
                <div className= {formDivCss}>
                    <div className="flex justify-between gap-5 w-full">
                        <input 
                            type="text" 
                            name="user_name" 
                            className={`${inputFieldCss} w-[70%] font-palanquin`} 
                            value={nameEmail.user_name} 
                            onChange={handleChange}
                        />
                        <Image 
                            src="Frame.svg" 
                            width={20} 
                            height={20} 
                            alt="Frame Icon" 
                            onMouseOver= {() => {setShowNameMsg(true)}}
                            onMouseOut= {() => {setShowNameMsg(false)}}
                        />
                    </div>
                    
                    {
                        showNameMsg && 
                        <div className={`p-2 w-fit bg-[#515050] absolute top-[5px] right-[50px] text-[#FFF] font-palanquin text-[0.6rem] transition-all duration-500`}>
                            <p>Including your name in your letter makes </p>
                            <p className="font-semibold"> it more believable</p> 
                        </div>
                    }
                    <label className={labelCss} >Name (recommended)</label>
                </div>

                <div className= {formDivCss}>
                    <div className="flex justify-between w-full gap-9">
                        <input 
                            type="email" 
                            name="email" 
                            className={`${inputFieldCss} font-palanquin`} 
                            onChange={handleChange} 
                            value={nameEmail.email} 
                            required
                        />

                        <span></span>
                    </div>
                    <label className={labelCss} >Email*</label>
                </div>
                
                <div className= {formDivCss}>
                    <a href="https://account.proton.me/start?ref=pme_lp_b2c_proton_menu" target="_blank" className="w-full" >
                        <div className="flex justify-between gap-5 w-full">
                            <button
                                type="button"
                                className={`${inputFieldCss} border-[#941010] text-[#941010] tracking-wide text-[clamp(0.9rem,2vw,3rem)] leading-[clamp(1.2rem,2vw,3rem)]`}
                            >
                                create a proton mail first
                            </button>

                            <Image 
                                src="/Frame2.svg" 
                                width={20} 
                                height={20} 
                                alt="Frame Icon" 
                                onMouseOver= {() => {setShowEmailMsg(true)}}
                                onMouseOut= {() => {setShowEmailMsg(false)}}
                            />
                        </div>
                    
                        <div className={`p-2 w-fit bg-[#515050] absolute top-[5px] right-[50px] text-[#FFF] font-palanquin text-[0.4rem] transition duration-500  ${showEmailMsg?"flex":"hidden"}`}>
                            <p>Don’t want to use your personal email? Try Proton Mail — more secure with end-to-end encryption.</p>
                        </div>
                    </a>
                    <label className={labelCss} >Do you need Proton Mail? (optional)</label>
                </div>

                <button 
                    type="submit" 
                    name="submitBtn" 
                    className={`${btnCss} ${isButtonClicked? "bg-[#5F0808]":"bg-[#941010] text-[#FFF]"} `}
                    onClick={handleBtnClick}
                >
                    finalize emails
                </button>
            </form>
        </div>
    )
}