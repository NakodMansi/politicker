import Link from "next/link";
import React from "react";

export default function Header() {
    const links = "text-[clamp(0.8rem,1vw,2rem)] leading-[clamp(1.2rem,2vw,3rem)]";
    return (
        <div className="flex py-5 px-4 items-center justify-between bg-[#191919] text-[#FFF] h-[44px] md:px-8 lg:px-10 w-full">
            <ul className="flex justify-center items-center gap-3 md:gap-6">
                <Link href="/about">
                    <li className= {links}>about</li>
                </Link>

                <Link href="/contactUs">
                    <li className= {links}>contact</li>
                </Link>
            </ul>

            <Link href="/" >
                <p className="text-[clamp(1.4rem,2vw,3rem)] leading-[clamp(1.7rem,2vw,3rem)]">Politicker</p>
            </Link>

            <Link href="#">
                <button className="py-2 px-4 bg-[#941010] text-[clamp(0.8rem,1vw,2vw)] leading-[clamp(1.2rem,2vw,3rem)] rounded-[8px]">send email</button>
            </Link>
        </div>
    )
}