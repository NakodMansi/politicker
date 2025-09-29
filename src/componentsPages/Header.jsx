import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <div className="flex py-5 px-4 items-center justify-between bg-[#191919] text-[#FFF] h-[44px] md:px-8 lg:px-10 w-full">
            <ul className="flex justify-center items-center gap-3 md:gap-6">
                <Link href="/about">
                    <li className="text-[clamp(0.6rem,1vw,2rem)] leading-[clamp(1rem,2vw,3rem)]">about</li>
                </Link>

                <Link href="/contactUs">
                    <li className="text-[clamp(0.6rem,1vw,2rem)] leading-[clamp(1rem,2vw,3rem)]">contact</li>
                </Link>
            </ul>

            <p className="text-[clamp(1.2rem,2vw,3rem)] leading-[clamp(1.5rem,2vw,3rem)]">Politicker</p>

            <Link href="#">
                <button className="py-2 px-4 bg-[#941010] text-[clamp(0.6rem,1vw,2vw)] leading-[clamp(1rem,2vw,3rem)] rounded-[8px]">send email</button>
            </Link>
        </div>
    )
}