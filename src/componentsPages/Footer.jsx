import React from "react";

export default function Footer() {
    return (
        <div className="font-palanquin text-[#FFF] p-4 flex flex-col items-center w-full gap-3 bg-[#0B0B0B] md:py-6 md:px-8">
            <ul className="flex justify-center items-center gap-4 self-stretch md:hidden">
                <a className="text-[clamp(0.6rem,1vw,2vw)] leading-[clamp(1rem,2vw,3rem)]" href="/about">
                    <li>About</li>
                </a>

                <a className="text-[clamp(0.6rem,1vw,2vw)] leading-[clamp(1rem,2vw,3rem)]" href="/contactUs">
                    <li className="">Contact</li>
                </a>
            </ul>

            <hr className="w-full w-[0.1px] bg-[#FFF] md:hidden"/> 

            <div className="flex w-full justify-between">
                <p className="text-[clamp(0.6rem,1vw,2vw)] leading-[clamp(1rem,2vw,3rem)]">© 2025 Politicker. All rights reserved.</p>

                <ul className="hidden md:flex md:justify-center md:items-center md:gap-4 md:self-stretch">
                    <a href="/about">
                        <li>About</li>
                    </a>

                    <a href="/contactUs">
                        <li>Contact</li>
                    </a>
                </ul>

                <ul className="flex gap-2 justify-end md:gap-4">
                    <li className="text-[clamp(0.6rem,1vw,2vw)] leading-[clamp(1rem,2vw,3rem)]">Terms & Conditions</li>
                    <li className="text-[clamp(0.6rem,1vw,2vw)] leading-[clamp(1rem,2vw,3rem)]">Privacy Policy</li>
                </ul>
            </div>
        </div>
    )
}